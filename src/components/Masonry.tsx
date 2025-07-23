import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Link } from "react-router-dom";

gsap.registerPlugin(Observer);

interface MasonryItem {
  id: string;
  img: string;
  url: string;
  height: number;
  name?: string;
}

// Add destination images
const destinationImages = [
  { id: "1", img: "/destination/ladakh-1.jpg", url: "/destinations/ladakh", name: "Ladakh", height: 250 },
  { id: "2", img: "/destination/kashmir-1.jpg", url: "/destinations/kashmir", name: "Kashmir", height: 250 },
  { id: "3", img: "/destination/goa-1.jpg", url: "/destinations/goa", name: "Goa", height: 250 },
  { id: "4", img: "/destination/kerala-1.jpg", url: "/destinations/kerala", name: "Kerala", height: 250 },
  { id: "5", img: "/destination/rajasthan-1.jpg", url: "/destinations/rajasthan", name: "Rajasthan", height: 250 },
  { id: "6", img: "/destination/bali-1.jpg", url: "/destinations/bali", name: "Bali", height: 250 },
  { id: "7", img: "/destination/singapore-1.jpg", url: "/destinations/singapore", name: "Singapore", height: 250 },
  { id: "8", img: "/destination/dubai-1.jpg", url: "/destinations/dubai", name: "Dubai", height: 250 },
  { id: "9", img: "/destination/bangkok-1.jpg", url: "/destinations/bangkok", name: "Bangkok", height: 250 },
  { id: "10", img: "/destination/vietnam-1.jpg", url: "/destinations/vietnam", name: "Vietnam", height: 250 },
  { id: "11", img: "/destination/phuket-1.jpg", url: "/destinations/phuket", name: "Phuket", height: 250 },
  { id: "12", img: "/destination/spiti-1.jpg", url: "/destinations/spiti", name: "Spiti", height: 250 },
];

interface MasonryProps {
  items?: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: string;
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items = destinationImages,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}: MasonryProps) => {
  const [containerRef, { width }] = useMeasure();
  const grid2Ref = useRef<HTMLDivElement>(null);
  const grid3Ref = useRef<HTMLDivElement>(null);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const hasMounted = useRef(false);

  // Infinite scroll animation for 3 grids
  useEffect(() => {
    const grid1Container = containerRef.current;
    const grid2Container = grid2Ref.current;
    const grid3Container = grid3Ref.current;
    
    if (!grid1Container || !grid2Container || !grid3Container) return;
    if (items.length === 0) return;

    // Setup each grid with different scroll directions
    const setupGrid = (gridContainer: HTMLElement, direction: 'up' | 'down', gridId: string) => {
      const divItems = gsap.utils.toArray(gridContainer.children) as HTMLElement[];
      if (!divItems.length) return;

      const firstItem = divItems[0];
      const itemStyle = getComputedStyle(firstItem);
      const itemHeight = firstItem.offsetHeight;
      const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
      const totalItemHeight = itemHeight + itemMarginTop;
      const totalHeight = itemHeight * divItems.length + itemMarginTop * (divItems.length - 1);

      const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

      // Set initial positions
      divItems.forEach((child, i) => {
        const y = i * totalItemHeight;
        gsap.set(child, { y });
      });

      // Create observer for this grid
      const observer = Observer.create({
        target: gridContainer,
        type: "wheel,touch,pointer",
        preventDefault: true,
        onPress: ({ target }) => {
          (target as HTMLElement).style.cursor = "grabbing";
        },
        onRelease: ({ target }) => {
          (target as HTMLElement).style.cursor = "grab";
        },
        onChange: ({ deltaY, isDragging, event }) => {
          const d = event.type === "wheel" ? -deltaY : deltaY;
          const distance = isDragging ? d * 5 : d * 10;
          divItems.forEach((child) => {
            gsap.to(child, {
              duration: 0.5,
              ease: "expo.out",
              y: `+=${distance}`,
              modifiers: {
                y: gsap.utils.unitize(wrapFn),
              },
            });
          });
        },
      });

      // Autoplay functionality with different directions
      let rafId: number | undefined;
      const autoplay = true;
      const autoplaySpeed = 0.5;
      const directionFactor = direction === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      // Pause on hover
      const pauseOnHover = true;
      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        gridContainer.addEventListener("mouseenter", stopTicker);
        gridContainer.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          gridContainer.removeEventListener("mouseenter", stopTicker);
          gridContainer.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    };

    // Setup each grid with different directions
    const cleanup1 = setupGrid(grid1Container, 'down', 'grid1'); // Up to Down
    const cleanup2 = setupGrid(grid2Container, 'up', 'grid2');   // Down to Up
    const cleanup3 = setupGrid(grid3Container, 'down', 'grid3'); // Up to Down

    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
    };
  }, [items]);

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div className="relative w-full h-[570px]">
      {/* Left half - static content */}
      <div 
        className="absolute left-0 top-0 w-[43%] h-full flex items-start pt-8 pl-8"
        style={{ background: 'linear-gradient(158deg, #F36E20 0%, #FDAF16 100%)' }}
      >
        <div className="text-left">
          <div 
            data-layer="Travel Professor" 
            className="TravelProfessor" 
            style={{
              width: 416, 
              color: '#F6F8FA', 
              fontSize: 75, 
              fontFamily: 'Bebas Neue', 
              fontWeight: '400', 
              lineHeight: '65px', 
              wordWrap: 'break-word', 
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            Travel Professor
          </div>
          <div 
            data-layer="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec." 
            className="LoremIpsumDolorSitAmetConsecteturAdipisElitSitEnimNecProinFaucibusNibhEtSagittisALaciniaPurusAcAmetPellentesqueAliquamEnimLoremIpsumDolorSitAmetConsecteturAdipisElitSitEnimNec" 
            style={{
              width: 416, 
              opacity: 0.54, 
              color: 'black', 
              fontSize: 16, 
              fontFamily: 'Poppins', 
              fontWeight: '500', 
              lineHeight: '26px', 
              wordWrap: 'break-word',
              marginTop: '20px'
            }}
          >
            See the stories our seekers create with our professors, get behind the moments that thousands of people like you create with us everyday.
          </div>
          <Link 
            to="/about"
            className="block hover:opacity-80 transition-opacity"
            style={{
              width: '100px',
              marginTop: '7px',
              padding: '12px 12px',
              color: '#F6F8FA',
              fontSize: 16,
              fontFamily: 'Poppins',
              fontWeight: '500',
              lineHeight: '26px',
              wordWrap: 'break-word',
              //background: 'rgba(246, 248, 250, 0.1)',
              borderRadius: '8px',
              backdropFilter: 'blur(4px)',
              //border: '1px solid rgba(246, 248, 250, 0.2)',
              //textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            About Us
          </Link>
          <Link 
            to="/gallery"
            className="block relative hover:opacity-90 transition-opacity"
            style={{
              width: 300,
              height: 54,
              textAlign: 'center',
              marginTop: '80px',
              overflow: 'hidden',
              borderRadius: 16,
              outline: '1px #F77A40 solid',
              outlineOffset: '-1px',
              background: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div 
              className="Ellipse26" 
              style={{
                width: 2,
                height: 2,
                left: 114,
                top: 26,
                position: 'absolute',
                background: 'linear-gradient(180deg, rgba(247, 122, 64, 0) 0%, rgba(244, 185, 67, 0) 100%)',
                borderRadius: 9999
              }} 
            />
            <div 
              className="Label"
              style={{
                left: 9,
                top: 19,
                position: 'absolute',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#F36E20',
                fontSize: 20,
                fontFamily: 'Urbanist',
                fontWeight: '600',
                lineHeight: '16px',
                wordWrap: 'break-word',
                width: '100%'
              }}
            >
              Open Gallery 
            </div>
          </Link>
        </div>
      </div>
      
      {/* Right half - Masonry Columns */}
      <div className="absolute top-0 right-0 w-[57%] h-full overflow-y-auto" style={{ background: '#FFECCE' }}>
        <div
          className="masonry ml-4"
          style={{
            columnCount: 3,
            columnGap: '16px',
            height: '100%',
            width: '100%',
            padding: '16px 0',
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                breakInside: 'avoid',
                marginBottom: '16px',
                height: item.height || 400,
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                position: 'relative',
                border: '2px solid #fff',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
              onClick={() => window.open(item.url, "_blank", "noopener")}
              onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
            >
              <div
                className="relative w-full h-full bg-cover bg-center uppercase text-[10px] leading-[10px]"
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {colorShiftOnHover && (
                  <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
                )}
                {item.name && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white rounded-b-[10px]">
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Masonry;
