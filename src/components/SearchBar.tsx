import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="w-[750px] h-[80px] relative mx-auto">
      <div className="w-full h-full mt-6 absolute bg-[#F6F8FA] shadow-[0px_0px_100px_rgba(0,0,0,0.35)] rounded-[20px]">
        {/* Search Input Container */}
        <div className="flex items-center h-full px-[20px] gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="w-[380px] h-[50px] bg-[rgba(217,217,217,0.60)] rounded-[16px] border border-[#F77A40] flex items-center pl-[40px]">
              {/* Search Icon */}
              <div className="absolute left-[20px] w-8 h-8 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 21.5L17 17M19.5 10.5C19.5 15.1944 15.6944 19 11 19C6.30558 19 2.5 15.1944 2.5 10.5C2.5 5.80558 6.30558 2 11 2C15.6944 2 19.5 5.80558 19.5 10.5Z" stroke="#F77A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search Articles by Keyword or Destination"
                className="w-full h-full bg-transparent pl-2 text-[15px] font-poppins placeholder-black/50 focus:outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <button 
              //onClick={() => navigate('/packages')}
              className="w-[120px] h-[50px] rounded-[16px] text-white transition-all duration-300 text-[15px] font-poppins font-medium"
              style={{
                background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
                fontWeight: '500'
              }}
            >
              Search
            </button>

          {/* Categories */}
          <div className="flex items-center gap-8">
            <span className="text-black text-[15px] font-poppins font-medium">
              Categories
            </span>
            {/* Filter Icon */}
            <div className="w-12 h-12 relative">
              <div className="absolute left-1 top-[8.5px] flex items-center">
                <div className="w-[25px] h-[3px] bg-[#3E3E3E]" />
                <div className="w-[9px] h-[3px] bg-[#D9D9D9] ml-1" />
                <div className="w-[3px] h-[11px] bg-[#F77A40] absolute left-[22px] -top-1" />
              </div>
              <div className="absolute left-[20px] top-[22.5px] flex items-center">
                <div className="w-[25px] h-[3px] bg-[#3E3E3E]" />
                <div className="w-[11px] h-[3px] bg-[#D9D9D9] -ml-[31px]" />
                <div className="w-[3px] h-[11px] bg-[#F77A40] absolute left-0 -top-1" />
              </div>
              <div className="absolute left-1 top-[36.5px] flex items-center">
                <div className="w-[25px] h-[3px] bg-[#3E3E3E]" />
                <div className="w-[9px] h-[3px] bg-[#D9D9D9] ml-1" />
                <div className="w-[3px] h-[11px] bg-[#F77A40] absolute left-[22px] -top-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar; 