import React from 'react';

interface ImageFrameProps {
  imageUrl?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

const ImageFrame: React.FC<ImageFrameProps> = ({
  imageUrl = "/Whole section.jpg",
  width = 1440,
  height = 516,
  borderRadius = 50,
  backgroundColor = '#F6F8FA'
}) => {
  return (
    <div 
      data-layer="Frame 219" 
      className="Frame219" 
      style={{
        width: '100%',
        height: height,
        position: 'relative',
        background: backgroundColor,
        overflow: 'hidden'
      }}
    >
      <img 
        data-layer="Rectangle 190" 
        className="Rectangle190" 
        style={{
          width: 1080,
          height: 388,
          left: 180,
          top: 64,
          position: 'absolute',
          borderRadius: borderRadius
        }} 
        src={imageUrl}
        alt="Frame content"
      />
    </div>
  );
};

export default ImageFrame; 