import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header Section */}
      <div className="relative w-full pt-20 pb-8">
        <div className="text-center">
          <h1 className="font-['Bebas_Neue'] text-[120px] leading-[99px]">
            <span className="text-[#2E2E2E]">Professor's </span>
            <span style={{ 
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Gallery</span>
          </h1>
        </div>
        <div className="text-center mt-8">
          <p className="font-poppins text-[32px] leading-[30px]">
            <span className="text-black">Explore the </span>
            <span style={{ 
              background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>#Unexplored</span>
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4">
        <div className="relative w-full h-[1828px]">
          {/* Large Images (500x441) */}
          <div className="absolute left-[64px] top-[341px] w-[500px] h-[441px] bg-[#D9D9D9] rounded-[50px]">
            {/* Download and add gallery image 1 here */}
          </div>
          
          <div className="absolute left-[876px] top-[1323px] w-[500px] h-[441px] bg-[#D9D9D9] rounded-[50px]">
            {/* Download and add gallery image 2 here */}
          </div>
          
          <div className="absolute left-[470px] top-[832px] w-[500px] h-[441px] bg-[#D9D9D9] rounded-[50px]">
            {/* Download and add gallery image 3 here */}
          </div>

          {/* Medium Images (380x441) with opacity */}
          <div className="absolute left-[996px] top-[341px] w-[380px] h-[441px] bg-[rgba(217,217,217,0.40)] rounded-[30px]">
            {/* Download and add gallery image 4 here */}
          </div>
          
          <div className="absolute left-[470px] top-[1323px] w-[380px] h-[441px] bg-[rgba(217,217,217,0.40)] rounded-[30px]">
            {/* Download and add gallery image 5 here */}
          </div>
          
          <div className="absolute left-[996px] top-[832px] w-[380px] h-[441px] bg-[rgba(217,217,217,0.40)] rounded-[30px]">
            {/* Download and add gallery image 6 here */}
          </div>

          {/* Medium Images (380x441) with different opacity */}
          <div className="absolute left-[590px] top-[341px] w-[380px] h-[441px] bg-[rgba(217,217,217,0.30)] rounded-[30px]">
            {/* Download and add gallery image 7 here */}
          </div>
          
          <div className="absolute left-[64px] top-[1323px] w-[380px] h-[441px] bg-[rgba(217,217,217,0.30)] rounded-[30px]">
            {/* Download and add gallery image 8 here */}
          </div>
          
          <div className="absolute left-[64px] top-[832px] w-[380px] h-[441px] bg-[rgba(217,217,217,0.30)] rounded-[30px]">
            {/* Download and add gallery image 9 here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 