import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  category: string;
  readTime: string;
  title: string;
  source: string;
  timeAgo: string;
  imageUrl: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Override the blog posts with the specified images
  const updatedBlogPosts = [
    {
      ...blogPosts[0],
      imageUrl: "/images/Background1.png"
    },
    {
      ...blogPosts[1],
      imageUrl: "/images/background2.png"
    },
    {
      ...blogPosts[2],
      imageUrl: "/images/background3.png"
    }
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="BlogSection" style={{
      width: '100%',
      height: 866,
      position: 'relative',
      background: 'white',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      {/* Left Section */}
      <div className="LeftSection" style={{
        width: '60%',
        position: 'relative',
        height: '100%'
      }}>
        <div className="OurBlog" style={{
          width: 192,
          left: 34,
          top: 333,
          position: 'absolute'
        }}>
          <span style={{
            color: '#3E3E3E',
            fontSize: 64,
            fontFamily: 'Bebas Neue',
            fontWeight: '400',
            wordWrap: 'break-word'
          }}>Our</span>
          <span style={{
            //color: '#F36E20',
            fontSize: 64,
            fontFamily: 'Bebas Neue',
            fontWeight: '400',
            wordWrap: 'break-word',
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}> Blog</span>
        </div>

        <img 
          className="BlogBanner"
          style={{
            width: 912.91,
            height: 252,
            left: 35.05,
            top: 31,
            position: 'absolute',
            borderRadius: 16
          }}
          src="/Testimonial/blog-banner.jpg"
          alt="Blog Banner"
        />

        <div className="BlogGrid" style={{
          width: 915,
          height: 350,
          left: 34,
          top: 424,
          position: 'absolute',
          overflow: 'hidden',
          display: 'flex',
          gap: '24px'
        }}>
          <AnimatePresence>
            {updatedBlogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="Article"
                style={{
                  width: 222,
                  padding: 16,
                  background: '#FFECCE',
                  borderRadius: 4,
                  display: 'inline-flex',
                  flexDirection: 'column',
                  gap: 16
                }}
              >
                <div className="Container">
                  <div className="Category" style={{
                    color: '#F36E20',
                    fontSize: 13,
                    fontFamily: 'Poppins',
                    fontWeight: '400'
                  }}>
                    {post.category}
                  </div>
                  
                  <div className="ContentContainer mt-4">
                    <img
                      style={{
                        width: '100%',
                        height: 125,
                        borderRadius: 4
                      }}
                      src={post.imageUrl}
                      alt={post.title}
                    />
                    
                    <div className="Content mt-4">
                      <div className="Length">
                        <div style={{
                          color: '#3E3E3E',
                          fontSize: 14,
                          fontFamily: 'Urbanist',
                          fontWeight: '400'
                        }}>
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div style={{
                        height: 50,
                        color: '#3E3E3E',
                        fontSize: 14,
                        fontFamily: 'Poppins',
                        fontWeight: '600'
                      }}>
                        {post.title}
                      </div>
                    </div>
                  
                  </div>
                </div>

                <div className="BottomContent mt-8" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  <div style={{
                    color: '#F77A40',
                    fontSize: 14,
                    fontFamily: 'Bebas Neue',
                    fontWeight: '400'
                  }}>
                    {post.source}
                  </div>
                  <div style={{
                    width: 12,
                    height: 0,
                    transform: 'rotate(90deg)',
                    outline: '1px #64748B solid'
                  }}></div>
                  <div style={{
                    flex: 1,
                    color: '#F77A40',
                    fontSize: 14,
                    fontFamily: 'Bebas Neue',
                    fontWeight: '400'
                  }}>
                    {post.timeAgo}
                  </div>
                </div>
              </motion.div> 
            ))} 
          </AnimatePresence>
        </div>

        <button
          className="ReadAllButton"
          style={{
            width: 136,
            height: 51,
            padding: 8,
            left: 35.05,
            top: 790,
            position: 'absolute',
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            boxShadow: '4px 5px 85.9px rgba(255, 255, 255, 0.55)',
            borderRadius: 16,
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontSize: 18,
            fontFamily: 'Poppins',
            fontWeight: '500'
          }}
          onClick={() => navigate('/blog')}
        >
          Read All
        </button>
      </div>

      {/* Right Section */}
      <div className="RightSection" style={{
        width: '35%',
        position: 'relative',
        height: '100%',
        marginTop: '30px',
      }}>
        <div className="ImageContainer" style={{
          position: 'relative',
          height: '100%',
          width: '100%'
        }}>
          <video
            src="/Yellow Organic Rajasthan Travel Instagram Story.mp4"
            autoPlay
            loop
            muted
            style={{
              width: '445px',
              height: '800px',
              objectFit: 'cover',
              borderRadius: '16px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 