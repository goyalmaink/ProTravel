import React from 'react';

interface TestimonialProps {
  authorName?: string;
  authorTitle?: string;
  avatarImage?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  authorName = "Happy Traveler",
  authorTitle = "Verified Customer",
  avatarImage = "/Testimonial/avatar.jpg"
}) => {
  return (
    <div 
      className="testimonial-container"
      style={{
        width: '100%',
        height: '571px',
        position: 'relative',
        background: '#FFECCE',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        className="container"
        style={{
          width: '100%',
          maxWidth: '1280px',
          height: '380px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px'
        }}
      >
        <div 
          className="component"
          style={{
            width: '100%',
            maxWidth: '768px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px'
          }}
        >
          {/* Testimonials Title */}
          <div 
            data-layer="Testimonials" 
            className="Testimonials" 
            style={{
              width: '284px',
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
            Testimonials
          </div>

          {/* Quote */}
          <div 
            className="quote"
            style={{
              width: '100%',
              maxWidth: '768px',
              textAlign: 'center',
              color: '#232323',
              fontSize: '20px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              lineHeight: '28px',
              wordWrap: 'break-word'
            }}
          >
            "travel Professor completely changed how I see travel. Instead of rushing through sights, I learned to savor every moment and connect with the places I visit."
          </div>

          {/* Avatar Section */}
          <div 
            className="avatar"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <div 
              className="avatar-image"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#E0E0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#666'
              }}
            >
              {/* Download avatar image here */}
              {avatarImage ? (
                <img 
                  src={avatarImage}
                  alt={authorName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                'AVATAR'
              )}
            </div>
            
            {/* Author Info */}
            <div 
              className="author-info"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <div 
                className="author-name"
                style={{
                  color: '#232323',
                  fontSize: '16px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}
              >
                {authorName}
              </div>
              <div 
                className="author-title"
                style={{
                  color: '#666666',
                  fontSize: '14px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '400',
                  lineHeight: '18px'
                }}
              >
                {authorTitle}
              </div>
            </div>
          </div>

          {/* Read All Testimonials Button */}
          <div 
            data-layer="Button" 
            className="Button" 
            style={{
              height: '48px',
              paddingLeft: 20, 
              paddingRight: 20, 
              paddingTop: 12, 
              paddingBottom: 12, 
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)', 
              borderRadius: 16, 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 2, 
              display: 'inline-flex',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div 
              data-layer="Button" 
              className="Button" 
              style={{
                color: '#F6F8FA', 
                fontSize: 16, 
                fontFamily: 'Poppins', 
                fontWeight: '500', 
                lineHeight: 24, 
                wordWrap: 'break-word'
              }}
            >
              Read All Testimonials
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 