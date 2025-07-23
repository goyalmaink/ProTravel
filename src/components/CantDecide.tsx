import React from 'react';

const CantDecide: React.FC = () => {
  return (
    <div className="relative w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg 2.png")' }}>
      {/* Main heading */}
      <div className="absolute w-full top-[20px] text-center">
        <p className="max-w-[1312px] mx-auto text-white text-2xl font-poppins font-normal leading-[40px] drop-shadow-lg text-shadow">
          Can't decide? Let our travel experts help you choose the perfect destination based on your interests, budget, and travel dates.
        </p>
      </div>

      {/* Personalized Recommendations heading */}
      <div className="absolute w-full top-[110px] text-center">
        <h2 className="w-[420px] mx-auto text-white text-2xl font-oswald font-semibold text-shadow">
          Get Personalized Recommendations
        </h2>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[160px]">
        <a
          href="/Landing/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[136px] h-[51px] px-2 py-2 bg-[#F6F8FA] shadow-[4px_5px_85.9px_rgba(255,255,255,0.55)] rounded-2xl flex justify-center items-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-lg active:scale-95"
        >
          <span className="text-primary text-lg font-poppins font-medium">Get In Touch</span>
        </a>
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

export default CantDecide; 