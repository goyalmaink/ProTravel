import React from 'react';

const GiveUsACall: React.FC = () => {
  return (
    <div className="relative w-full h-[345px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg 3.png")' }}>
      <div className="absolute w-full top-[95px] text-center">
        <h2 className="text-[100px] font-bebas-neue leading-[40px]">
          <span className="text-black">Give us a</span>
          <span className="text-white"> Call</span>
        </h2>
      </div>

      <div className="absolute w-full top-[181px] text-center">
        <p className="text-xl font-poppins font-semibold">
          <span className="text-black">Get personalized recommendations, let our </span>
          <span className="text-white">PROFESSORS</span>
          <span className="text-black"> help you plan out the travel of your dreams!</span>
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[228px]">
        <button className="px-6 py-3 bg-[#F6F8FA] shadow-[4px_5px_85.9px_rgba(255,255,255,0.55)] rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg active:scale-95">
          <span className="text-primary text-lg font-poppins font-medium">Get In Touch</span>
        </button>
      </div>
    </div>
  );
};

// Add text shadow utility class
const styles = document.createElement('style');
styles.innerHTML = `
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
document.head.appendChild(styles);

export default GiveUsACall; 