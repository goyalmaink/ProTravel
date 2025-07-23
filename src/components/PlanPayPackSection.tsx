import React, { useState } from 'react';

const packages = [
  {
    name: 'Twin Sharing',
    description: 'Perfect for couples & friends',
    price: 24999,
    icon: (
      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_531_3606)">
          <path d="M5.625 0.5C6.4538 0.5 7.24866 0.82924 7.83471 1.41529C8.42076 2.00134 8.75 2.7962 8.75 3.625C8.75 4.4538 8.42076 5.24866 7.83471 5.83471C7.24866 6.42076 6.4538 6.75 5.625 6.75C4.7962 6.75 4.00134 6.42076 3.41529 5.83471C2.82924 5.24866 2.5 4.4538 2.5 3.625C2.5 2.7962 2.82924 2.00134 3.41529 1.41529C4.00134 0.82924 4.7962 0.5 5.625 0.5ZM20 0.5C20.8288 0.5 21.6237 0.82924 22.2097 1.41529C22.7958 2.00134 23.125 2.7962 23.125 3.625C23.125 4.4538 22.7958 5.24866 22.2097 5.83471C21.6237 6.42076 20.8288 6.75 20 6.75C19.1712 6.75 18.3763 6.42076 17.7903 5.83471C17.2042 5.24866 16.875 4.4538 16.875 3.625C16.875 2.7962 17.2042 2.00134 17.7903 1.41529C18.3763 0.82924 19.1712 0.5 20 0.5ZM0 12.168C0 9.86719 1.86719 8 4.16797 8H5.83594C6.45703 8 7.04688 8.13672 7.57812 8.37891C7.52734 8.66016 7.50391 8.95312 7.50391 9.25C7.50391 10.7422 8.16016 12.082 9.19531 13C9.1875 13 9.17969 13 9.16797 13H0.832031C0.375 13 0 12.625 0 12.168ZM15.832 13C15.8242 13 15.8164 13 15.8047 13C16.8438 12.082 17.4961 10.7422 17.4961 9.25C17.4961 8.95312 17.4688 8.66406 17.4219 8.37891C17.9531 8.13281 18.543 8 19.1641 8H20.832C23.1328 8 25 9.86719 25 12.168C25 12.6289 24.625 13 24.168 13H15.832ZM8.75 9.25C8.75 8.25544 9.14509 7.30161 9.84835 6.59835C10.5516 5.89509 11.5054 5.5 12.5 5.5C13.4946 5.5 14.4484 5.89509 15.1517 6.59835C15.8549 7.30161 16.25 8.25544 16.25 9.25C16.25 10.2446 15.8549 11.1984 15.1517 11.9017C14.4484 12.6049 13.4946 13 12.5 13C11.5054 13 10.5516 12.6049 9.84835 11.9017C9.14509 11.1984 8.75 10.2446 8.75 9.25ZM5 19.457C5 16.582 7.33203 14.25 10.207 14.25H14.793C17.668 14.25 20 16.582 20 19.457C20 20.0312 19.5352 20.5 18.957 20.5H6.04297C5.46875 20.5 5 20.0352 5 19.457Z" fill="#F77A40"/>
        </g>
        <defs>
          <clipPath id="clip0_531_3606">
            <path d="M0 0.5H25V20.5H0V0.5Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
    badge: 'Most Popular',
    badgeColor: 'bg-[#F77A40] text-white',
  },
  {
    name: 'Triple Sharing',
    description: 'Budget-friendly option',
    price: 22499,
    icon: (
      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_531_3622)">
          <path d="M3.75 5.5C3.75 4.17392 4.27678 2.90215 5.21447 1.96447C6.15215 1.02678 7.42392 0.5 8.75 0.5C10.0761 0.5 11.3479 1.02678 12.2855 1.96447C13.2232 2.90215 13.75 4.17392 13.75 5.5C13.75 6.82608 13.2232 8.09785 12.2855 9.03553C11.3479 9.97322 10.0761 10.5 8.75 10.5C7.42392 10.5 6.15215 9.97322 5.21447 9.03553C4.27678 8.09785 3.75 6.82608 3.75 5.5ZM0 19.3398C0 15.4922 3.11719 12.375 6.96484 12.375H10.5352C14.3828 12.375 17.5 15.4922 17.5 19.3398C17.5 19.9805 16.9805 20.5 16.3398 20.5H1.16016C0.519531 20.5 0 19.9805 0 19.3398ZM23.8008 20.5H18.4141C18.625 20.1328 18.75 19.707 18.75 19.25V18.9375C18.75 16.5664 17.6914 14.4375 16.0234 13.0078C16.1172 13.0039 16.207 13 16.3008 13H18.6992C22.1797 13 25 15.8203 25 19.3008C25 19.9648 24.4609 20.5 23.8008 20.5ZM16.875 10.5C15.6641 10.5 14.5703 10.0078 13.7773 9.21484C14.5469 8.17578 15 6.89062 15 5.5C15 4.45312 14.7422 3.46484 14.2852 2.59766C15.0117 2.06641 15.9062 1.75 16.875 1.75C19.293 1.75 21.25 3.70703 21.25 6.125C21.25 8.54297 19.293 10.5 16.875 10.5Z" fill="#9CA3AF"/>
        </g>
        <defs>
          <clipPath id="clip0_531_3622">
            <path d="M0 0.5H25V20.5H0V0.5Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
    badge: '',
    badgeColor: '',
  },
  {
    name: 'Single Occupancy',
    description: 'For solo travelers',
    price: 31499,
    icon: (
      <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_531_3636)">
          <path d="M8.75 10.5C10.0761 10.5 11.3479 9.97322 12.2855 9.03553C13.2232 8.09785 13.75 6.82608 13.75 5.5C13.75 4.17392 13.2232 2.90215 12.2855 1.96447C11.3479 1.02678 10.0761 0.5 8.75 0.5C7.42392 0.5 6.15215 1.02678 5.21447 1.96447C4.27678 2.90215 3.75 4.17392 3.75 5.5C3.75 6.82608 4.27678 8.09785 5.21447 9.03553C6.15215 9.97322 7.42392 10.5 8.75 10.5ZM6.96484 12.375C3.11719 12.375 0 15.4922 0 19.3398C0 19.9805 0.519531 20.5 1.16016 20.5H16.3398C16.9805 20.5 17.5 19.9805 17.5 19.3398C17.5 15.4922 14.3828 12.375 10.5352 12.375H6.96484Z" fill="#9CA3AF"/>
        </g>
        <defs>
          <clipPath id="clip0_531_3636">
            <path d="M0 0.5H17.5V20.5H0V0.5Z" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
    badge: '',
    badgeColor: '',
  },
];

const departureDates = [
  '10 July 2025',
  '22 July 2025',
  '5 August 2025',
];

const PlanPayPackSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [travelers, setTravelers] = useState(1);

  const totalPrice = packages[selectedPackage].price * travelers;

  return (
    <section className="relative w-full bg-[#E5E7EB] py-8 flex justify-center" id="plan-pay-pack-section">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Main Column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Package Selection */}
          <div className="bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-poppins font-bold text-[20px] text-[#1E293B]">Choose Your Package</h3>
              <div className="flex bg-[#F3F4F6] rounded-lg overflow-hidden">
                <button className="px-4 py-1 bg-[#F77A40] text-white rounded-md text-[12px] font-poppins font-medium">INR</button>
                <button className="px-4 py-1 text-[#4B5563] text-[12px] font-poppins font-medium">USD</button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.name}
                  className={`relative flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                    idx === selectedPackage
                      ? 'bg-[#FFF7ED] border-[#F77A40] outline outline-2 outline-[#F77A40]' : 'border-[#E5E7EB] bg-white'
                  }`}
                  onClick={() => setSelectedPackage(idx)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">{pkg.icon}</div>
                    <div>
                      <div className="font-poppins font-semibold text-[18px] text-[#1E293B]">{pkg.name}</div>
                      <div className="font-poppins text-[15px] text-[#4B5563]">{pkg.description}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="font-poppins font-bold text-[18px] text-[#F77A40]">₹{pkg.price.toLocaleString()}</div>
                    <div className="font-poppins text-[15px] text-[#6B7280]">per person</div>
                  </div>
                  {pkg.badge && (
                    <div className={`absolute -top-4 left-4 px-4 py-1 rounded-full text-xs font-poppins font-medium ${pkg.badgeColor}`}>{pkg.badge}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-8 flex flex-col gap-3">
            <div className="flex items-center mb-4">
              <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M27 24H0V0H27V24Z" stroke="#E5E7EB"/>
                <path d="M3 1.5C1.34531 1.5 0 2.84531 0 4.5V6H27V4.5C27 2.84531 25.6547 1.5 24 1.5H3ZM27 10.5H0V19.5C0 21.1547 1.34531 22.5 3 22.5H24C25.6547 22.5 27 21.1547 27 19.5V10.5ZM5.25 16.5H8.25C8.6625 16.5 9 16.8375 9 17.25C9 17.6625 8.6625 18 8.25 18H5.25C4.8375 18 4.5 17.6625 4.5 17.25C4.5 16.8375 4.8375 16.5 5.25 16.5ZM10.5 17.25C10.5 16.8375 10.8375 16.5 11.25 16.5H17.25C17.6625 16.5 18 16.8375 18 17.25C18 17.6625 17.6625 18 17.25 18H11.25C10.8375 18 10.5 17.6625 10.5 17.25Z" fill="#F77A40"/>
              </svg>
              <span className="font-poppins font-bold text-xl text-[#1E293B]">Payment Terms</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3656)"><path d="M0 2C0 1.44687 0.446875 1 1 1H3.5C5.98438 1 8 3.01562 8 5.5C8 7.3375 6.9 8.91563 5.32188 9.61563L6.92812 13.6281C7.13438 14.1406 6.88437 14.7219 6.37187 14.9281C5.85938 15.1344 5.27813 14.8844 5.07188 14.3719L3.32188 10H2V14C2 14.5531 1.55313 15 1 15C0.446875 15 0 14.5531 0 14V9V2ZM2 8H3.5C4.88125 8 6 6.88125 6 5.5C6 4.11875 4.88125 3 3.5 3H2V8ZM10.0156 8.5125C9.9875 8.7 10.0156 8.78438 10.0281 8.81875C10.0406 8.85313 10.0719 8.9 10.1594 8.97188C10.3844 9.15 10.7437 9.28438 11.3438 9.49687L11.3844 9.5125C11.8844 9.6875 12.5938 9.9375 13.125 10.3906C13.4219 10.6438 13.6844 10.9719 13.8469 11.4C14.0063 11.8281 14.0375 12.2906 13.9656 12.775C13.8344 13.6531 13.325 14.3156 12.5969 14.6781C11.9062 15.0219 11.0938 15.0688 10.3094 14.9281H10.3031C10.0125 14.8719 9.6625 14.75 9.3875 14.6469C9.2 14.575 8.99375 14.4937 8.83438 14.4312C8.75625 14.4 8.69063 14.375 8.6375 14.3531C8.12187 14.1531 7.86875 13.5719 8.06875 13.0594C8.26875 12.5469 8.84688 12.2906 9.3625 12.4906C9.44375 12.5219 9.525 12.5531 9.60938 12.5875C9.75937 12.6469 9.91562 12.7094 10.0906 12.775C10.3656 12.8781 10.5688 12.9437 10.675 12.9625C11.1656 13.05 11.5094 12.9875 11.7031 12.8906C11.8594 12.8125 11.9531 12.7031 11.9875 12.4844C12.0188 12.2688 11.9938 12.1562 11.9719 12.1C11.9531 12.0469 11.9156 11.9875 11.8313 11.9156C11.6156 11.7344 11.2625 11.5906 10.6781 11.3844L10.5844 11.35C10.1 11.1813 9.42812 10.9437 8.91875 10.5406C8.62187 10.3062 8.34688 9.99062 8.17813 9.57187C8.00625 9.15312 7.97187 8.69688 8.04062 8.22188C8.30312 6.4375 10.1344 5.78437 11.6938 6.06875C11.9094 6.10938 12.5469 6.25 12.8 6.33125C13.3281 6.49375 13.6219 7.05625 13.4594 7.58437C13.2969 8.1125 12.7344 8.40625 12.2063 8.24375C12.0594 8.2 11.5094 8.07187 11.3344 8.04062C10.8781 7.95625 10.5281 8.02812 10.3156 8.14062C10.1188 8.24375 10.0375 8.37813 10.0188 8.51562L10.0156 8.5125Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3656"><path d="M0 0H14V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">Deposit</div>
                  <div className="font-poppins text-sm text-[#4B5563]">₹5,000 to confirm your spot</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3663)"><path d="M4 0C4.55312 0 5 0.446875 5 1V2H9V1C9 0.446875 9.44687 0 10 0C10.5531 0 11 0.446875 11 1V2H12.5C13.3281 2 14 2.67188 14 3.5V5H0V3.5C0 2.67188 0.671875 2 1.5 2H3V1C3 0.446875 3.44688 0 4 0ZM0 6H14V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V6ZM2 8.5V9.5C2 9.775 2.225 10 2.5 10H3.5C3.775 10 4 9.775 4 9.5V8.5C4 8.225 3.775 8 3.5 8H2.5C2.225 8 2 8.225 2 8.5ZM6 8.5V9.5C6 9.775 6.225 10 6.5 10H7.5C7.775 10 8 9.775 8 9.5V8.5C8 8.225 7.775 8 7.5 8H6.5C6.225 8 6 8.225 6 8.5ZM10.5 8C10.225 8 10 8.225 10 8.5V9.5C10 9.775 10.225 10 10.5 10H11.5C11.775 10 12 9.775 12 9.5V8.5C12 8.225 11.775 8 11.5 8H10.5ZM2 12.5V13.5C2 13.775 2.225 14 2.5 14H3.5C3.775 14 4 13.775 4 13.5V12.5C4 12.225 3.775 12 3.5 12H2.5C2.225 12 2 12.225 2 12.5ZM6.5 12C6.225 12 6 12.225 6 12.5V13.5C6 13.775 6.225 14 6.5 14H7.5C7.775 14 8 13.775 8 13.5V12.5C8 12.225 7.775 12 7.5 12H6.5ZM10 12.5V13.5C10 13.775 10.225 14 10.5 14H11.5C11.775 14 12 13.775 12 13.5V12.5C12 12.225 11.775 12 11.5 12H10.5C10.225 12 10 12.225 10 12.5Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3663"><path d="M0 0H14V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">Full Payment Due</div>
                  <div className="font-poppins text-sm text-[#4B5563]">10 days before departure</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3671)"><path d="M0.5 2C0.5 0.896875 1.39688 0 2.5 0H9.5C10.6031 0 11.5 0.896875 11.5 2V14C11.5 15.1031 10.6031 16 9.5 16H2.5C1.39688 16 0.5 15.1031 0.5 14V2ZM7 14C7 13.7348 6.89464 13.4804 6.70711 13.2929C6.51957 13.1054 6.26522 13 6 13C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15C6.26522 15 6.51957 14.8946 6.70711 14.7071C6.89464 14.5196 7 14.2652 7 14ZM9.5 2H2.5V12H9.5V2Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3671"><path d="M0 0H12V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">EMI Available</div>
                  <div className="font-poppins text-sm text-[#4B5563]">UPI, Credit/Debit Card, Razorpay</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3678)"><path d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3678"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">Secure Checkout</div>
                  <div className="font-poppins text-sm text-[#4B5563]">256-bit SSL encryption</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#FFF8EF] rounded-lg px-3 py-2">
                <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3686)"><path d="M7 14.75C8.85652 14.75 10.637 14.0125 11.9497 12.6997C13.2625 11.387 14 9.60652 14 7.75C14 5.89348 13.2625 4.11301 11.9497 2.80025C10.637 1.4875 8.85652 0.75 7 0.75C5.14348 0.75 3.36301 1.4875 2.05025 2.80025C0.737498 4.11301 0 5.89348 0 7.75C0 9.60652 0.737498 11.387 2.05025 12.6997C3.36301 14.0125 5.14348 14.75 7 14.75ZM5.90625 9.9375H6.5625V8.1875H5.90625C5.54258 8.1875 5.25 7.89492 5.25 7.53125C5.25 7.16758 5.54258 6.875 5.90625 6.875H7.21875C7.58242 6.875 7.875 7.16758 7.875 7.53125V9.9375H8.09375C8.45742 9.9375 8.75 10.2301 8.75 10.5938C8.75 10.9574 8.45742 11.25 8.09375 11.25H5.90625C5.54258 11.25 5.25 10.9574 5.25 10.5938C5.25 10.2301 5.54258 9.9375 5.90625 9.9375ZM7 4.25C7.23206 4.25 7.45462 4.34219 7.61872 4.50628C7.78281 4.67038 7.875 4.89294 7.875 5.125C7.875 5.35706 7.78281 5.57962 7.61872 5.74372C7.45462 5.90781 7.23206 6 7 6C6.76794 6 6.54538 5.90781 6.38128 5.74372C6.21719 5.57962 6.125 5.35706 6.125 5.125C6.125 4.89294 6.21719 4.67038 6.38128 4.50628C6.54538 4.34219 6.76794 4.25 7 4.25Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3686"><path d="M0 0.75H14V14.75H0V0.75Z" fill="white"/></clipPath></defs></svg>
                <div className="font-poppins text-sm text-[#F77A40]">Flexible payment plans available on request</div>
              </div>
            </div>
          </div>

          {/* Cancellation & Refund Policy */}
          <div className="bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-8 flex flex-col gap-6">
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3"><g clipPath="url(#clip0_531_3692)"><path d="M17.2125 19.3359L4.66406 6.7875C3.61406 8.25469 3 10.0547 3 12C3 16.9688 7.03125 21 12 21C13.9453 21 15.7453 20.3859 17.2125 19.3359ZM19.3359 17.2125C20.3859 15.7453 21 13.9453 21 12C21 7.03125 16.9688 3 12 3C10.0547 3 8.25469 3.61406 6.7875 4.66406L19.3359 17.2125ZM0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3692"><path d="M0 0H24V24H0V0Z" fill="white"/></clipPath></defs></svg>
              <span className="font-poppins font-bold text-xl text-[#1E293B]">Cancellation & Refund Policy</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3699)"><path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" fill="#22C55E"/></g><defs><clipPath id="clip0_531_3699"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">100% Refund</div>
                  <div className="font-poppins text-sm text-[#4B5563]">Cancellations 14+ days in advance</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3706)"><path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM8 4C8.41562 4 8.75 4.33437 8.75 4.75V8.25C8.75 8.66562 8.41562 9 8 9C7.58437 9 7.25 8.66562 7.25 8.25V4.75C7.25 4.33437 7.58437 4 8 4ZM7 11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12C7.73478 12 7.48043 11.8946 7.29289 11.7071C7.10536 11.5196 7 11.2652 7 11Z" fill="#EAB308"/></g><defs><clipPath id="clip0_531_3706"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">50% Refund</div>
                  <div className="font-poppins text-sm text-[#4B5563]">Cancellations 7-13 days prior</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3714)"><path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM5.46875 5.46875C5.7625 5.175 6.2375 5.175 6.52812 5.46875L7.99687 6.9375L9.46562 5.46875C9.75937 5.175 10.2344 5.175 10.525 5.46875C10.8156 5.7625 10.8187 6.2375 10.525 6.52812L9.05625 7.99687L10.525 9.46562C10.8187 9.75937 10.8187 10.2344 10.525 10.525C10.2312 10.8156 9.75625 10.8187 9.46562 10.525L7.99687 9.05625L6.52812 10.525C6.23438 10.8187 5.75938 10.8187 5.46875 10.525C5.17812 10.2312 5.175 9.75625 5.46875 9.46562L6.9375 7.99687L5.46875 6.52812C5.175 6.23438 5.175 5.75938 5.46875 5.46875Z" fill="#EF4444"/></g><defs><clipPath id="clip0_531_3714"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">No Refund</div>
                  <div className="font-poppins text-sm text-[#4B5563]">Cancellations under 7 days</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3721)"><path d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z" fill="#3B82F6"/></g><defs><clipPath id="clip0_531_3721"><path d="M0 0H16V16H0V0Z" fill="white"/></clipPath></defs></svg>
                <div>
                  <div className="font-poppins font-semibold text-base text-[#1E293B]">Full Refund</div>
                  <div className="font-poppins text-sm text-[#4B5563]">If trip canceled by company</div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#F77A40] font-poppins font-medium text-base mt-2 hover:underline">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16H0V0H16V16Z" stroke="#E5E7EB"/><path d="M7.29219 12.7066C7.68281 13.0973 8.31719 13.0973 8.70781 12.7066L14.7078 6.70664C15.0984 6.31602 15.0984 5.68164 14.7078 5.29102C14.3172 4.90039 13.6828 4.90039 13.2922 5.29102L7.99844 10.5848L2.70469 5.29414C2.31406 4.90352 1.67969 4.90352 1.28906 5.29414C0.898438 5.68477 0.898438 6.31914 1.28906 6.70977L7.28906 12.7098L7.29219 12.7066Z" fill="#F77A40"/></svg>
                Read Full Policy
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-[384px] flex-shrink-0 bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-8 h-fit mt-8 md:mt-0">
          <h3 className="font-poppins font-bold text-xl text-[#1E293B] mb-6">Book Your Trip</h3>
          <form className="flex flex-col gap-6">
            {/* Departure Date */}
            <div>
              <label className="block font-poppins text-sm font-medium text-[#374151] mb-1">Departure Date</label>
              <select
                className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-base font-poppins text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F77A40]"
                value={selectedDate}
                onChange={e => setSelectedDate(Number(e.target.value))}
              >
                {departureDates.map((date, idx) => (
                  <option value={idx} key={date}>{date}</option>
                ))}
              </select>
            </div>
            {/* Room Type */}
            <div>
              <label className="block font-poppins text-sm font-medium text-[#374151] mb-1">Room Type</label>
              <select
                className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-base font-poppins text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F77A40]"
                value={selectedPackage}
                onChange={e => setSelectedPackage(Number(e.target.value))}
              >
                {packages.map((pkg, idx) => (
                  <option value={idx} key={pkg.name}>{pkg.name} - ₹{pkg.price.toLocaleString()}</option>
                ))}
              </select>
            </div>
            {/* Travelers */}
            <div>
              <label className="block font-poppins text-sm font-medium text-[#374151] mb-1">Travelers</label>
              <select
                className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-base font-poppins text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F77A40]"
                value={travelers}
                onChange={e => setTravelers(Number(e.target.value))}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option value={num} key={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
            {/* Total Price */}
            <div className="flex items-center justify-between mt-2">
              <span className="font-poppins font-semibold text-base text-[#1E293B]">Total Price</span>
              <span className="font-poppins font-bold text-2xl text-[#F77A40]">₹{totalPrice.toLocaleString()}</span>
            </div>
            {/* Buttons */}
            <button type="button" className="w-full bg-[#F77A40] text-white font-poppins font-semibold text-lg py-3 rounded-lg mt-2 hover:bg-[#e05e1b] transition-colors flex items-center justify-center gap-2">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3766)"><path d="M2.32812 1C1.225 1 0.328125 1.89688 0.328125 3V4H18.3281V3C18.3281 1.89688 17.4312 1 16.3281 1H2.32812ZM18.3281 7H0.328125V13C0.328125 14.1031 1.225 15 2.32812 15H16.3281C17.4312 15 18.3281 14.1031 18.3281 13V7ZM3.82812 11H5.82812C6.10313 11 6.32812 11.225 6.32812 11.5C6.32812 11.775 6.10313 12 5.82812 12H3.82812C3.55312 12 3.32812 11.775 3.32812 11.5C3.32812 11.225 3.55312 11 3.82812 11ZM7.32812 11.5C7.32812 11.225 7.55312 11 7.82812 11H11.8281C12.1031 11 12.3281 11.225 12.3281 11.5C12.3281 11.775 12.1031 12 11.8281 12H7.82812C7.55312 12 7.32812 11.775 7.32812 11.5Z" fill="white"/></g><defs><clipPath id="clip0_531_3766"><path d="M0.328125 0H18.3281V16H0.328125V0Z" fill="white"/></clipPath></defs></svg>
              Book Now
            </button>
            <button type="button" className="w-full border border-[#F77A40] text-[#F77A40] font-poppins font-semibold text-lg py-3 rounded-lg mt-2 hover:bg-[#FFF7ED] transition-colors flex items-center justify-center gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3771)"><path d="M5.49687 0.769455C5.25625 0.188205 4.62187 -0.12117 4.01562 0.0444546L1.26562 0.794455C0.721875 0.944455 0.34375 1.4382 0.34375 2.0007C0.34375 9.73195 6.6125 16.0007 14.3438 16.0007C14.9062 16.0007 15.4 15.6226 15.55 15.0788L16.3 12.3288C16.4656 11.7226 16.1562 11.0882 15.575 10.8476L12.575 9.59758C12.0656 9.38508 11.475 9.53195 11.1281 9.96008L9.86563 11.5007C7.66563 10.4601 5.88438 8.67883 4.84375 6.47883L6.38438 5.21945C6.8125 4.86945 6.95937 4.28195 6.74687 3.77258L5.49687 0.77258V0.769455Z" fill="#F77A40"/></g><defs><clipPath id="clip0_531_3771"><path d="M0.34375 0H16.3438V16H0.34375V0Z" fill="white"/></clipPath></defs></svg>
              Enquire
            </button>
            <button type="button" className="w-full border border-[#D1D5DB] text-[#374151] font-poppins font-semibold text-lg py-3 rounded-lg mt-2 hover:bg-[#F3F4F6] transition-colors flex items-center justify-center gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_531_3776)"><path d="M9.98438 1C9.98438 0.446875 9.5375 0 8.98438 0C8.43125 0 7.98438 0.446875 7.98438 1V8.58438L5.69063 6.29063C5.3 5.9 4.66563 5.9 4.275 6.29063C3.88438 6.68125 3.88438 7.31563 4.275 7.70625L8.275 11.7063C8.66563 12.0969 9.3 12.0969 9.69063 11.7063L13.6906 7.70625C14.0813 7.31563 14.0813 6.68125 13.6906 6.29063C13.3 5.9 12.6656 5.9 12.275 6.29063L9.98438 8.58438V1ZM2.98438 11C1.88125 11 0.984375 11.8969 0.984375 13V14C0.984375 15.1031 1.88125 16 2.98438 16H14.9844C16.0875 16 16.9844 15.1031 16.9844 14V13C16.9844 11.8969 16.0875 11 14.9844 11H11.8125L10.3969 12.4156C9.61563 13.1969 8.35 13.1969 7.56875 12.4156L6.15625 11H2.98438ZM14.4844 12.75C14.6833 12.75 14.8741 12.829 15.0147 12.9697C15.1554 13.1103 15.2344 13.3011 15.2344 13.5C15.2344 13.6989 15.1554 13.8897 15.0147 14.0303C14.8741 14.171 14.6833 14.25 14.4844 14.25C14.2855 14.25 14.0947 14.171 13.954 14.0303C13.8134 13.8897 13.7344 13.6989 13.7344 13.5C13.7344 13.3011 13.8134 13.1103 13.954 12.9697C14.0947 12.829 14.2855 12.75 14.4844 12.75Z" fill="#374151"/></g><defs><clipPath id="clip0_531_3776"><path d="M0.984375 0H16.9844V16H0.984375V0Z" fill="white"/></clipPath></defs></svg>
              Download Brochure
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PlanPayPackSection; 