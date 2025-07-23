import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

const IMGS = [
  "/rolling/pngwing.com (1).png",
  "/rolling/favpng_13508f9fcd3c76b6fcddde307e510f7e.png",
  "/rolling/pngegg (1).png",
  "/rolling/pngegg.png",
  "/rolling/pngwing.com.png",
  "/rolling/pngwing.com (1).png",
  "/rolling/favpng_13508f9fcd3c76b6fcddde307e510f7e.png",
  "/rolling/pngegg (1).png",
  "/rolling/pngegg.png",
  "/rolling/pngwing.com.png",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = galleryImages.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5; // Increased from 1.5 to 2.5 for more gap
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: any) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: any, info: any) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: any) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[500px] w-full bg-[#F6F8FA] overflow-hidden">
      {/* Testimonials Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          data-layer="Testimonials" 
          className="Testimonials" 
          style={{
            width: '400px',
            fontSize: '64px', 
            fontFamily: 'Bebas Neue', 
            fontWeight: '400', 
            wordWrap: 'break-word',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Partnered With
        </div>
      </div>

      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"

      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[250px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[6%] [backface-visibility:hidden] md:p-[4%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none h-[200px] w-[410px] rounded-[15px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-105
                           sm:h-[160px] sm:w-[310px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery; 