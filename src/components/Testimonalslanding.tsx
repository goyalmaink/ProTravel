import React from 'react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    location: 'Delhi, India',
    text: 'An unforgettable experience! The Ladakh Adventure Retreat was perfectly organized, and the guides were amazing. Highly recommended for anyone seeking adventure and tranquility.',
    avatar: '/Landing/testi1.jpg',
  },
  {
    name: 'Meera Patel',
    location: 'Mumbai, India',
    text: 'The landscapes were breathtaking and the itinerary was well-balanced. Loved the group vibe and the attention to detail. Will cherish these memories forever!',
    avatar: '/Landing/testi2.jpg',
  },
  {
    name: 'Rahul Verma',
    location: 'Bangalore, India',
    text: 'From the food to the activities, everything exceeded my expectations. The team made sure everyone felt included and safe. Can\'t wait to join again!',
    avatar: '/Landing/testi3.jpg',
  },
];

const Testimonalslanding: React.FC = () => {
  return (
    <section className="relative w-full bg-[#E5E7EB] flex justify-center">
      <div className="max-w-7xl w-full px-4">
        {/* Heading & Rating */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl mt-3 font-bold text-[#111827] mb-2 font-inter">What Our Travelers Say</h2>
          <div className="flex items-center space-x-4 mt-2">
            {/* Stars */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="17" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9397 1.20312C12.7327 0.773438 12.2952 0.5 11.8147 0.5C11.3342 0.5 10.9006 0.773438 10.6897 1.20312L8.17799 6.37109L2.56861 7.19922C2.09986 7.26953 1.70924 7.59766 1.5647 8.04688C1.42017 8.49609 1.53736 8.99219 1.8733 9.32422L5.94361 13.3516L4.98267 19.043C4.90455 19.5117 5.09986 19.9883 5.48658 20.2656C5.8733 20.543 6.38502 20.5781 6.80689 20.3555L11.8186 17.6797L16.8303 20.3555C17.2522 20.5781 17.7639 20.5469 18.1506 20.2656C18.5374 19.9844 18.7327 19.5117 18.6545 19.043L17.6897 13.3516L21.76 9.32422C22.096 8.99219 22.217 8.49609 22.0686 8.04688C21.9202 7.59766 21.5335 7.26953 21.0647 7.19922L15.4514 6.37109L12.9397 1.20312Z" fill="#F77A40"/>
                </svg>
              ))}
            </div>
            <span className="text-[18px] font-semibold text-[#111827]">4.8</span>
            <span className="text-[18px] text-[#4B5563]">based on 1,420 reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white mb-6 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#F77A40] mb-4">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[15px] text-[#374151] font-medium mb-4">"{t.text}"</p>
              <div className="font-bold text-[#F77A40] text-[18px]">{t.name}</div>
              <div className="text-[#6B7280] text-[16px]">{t.location}</div>
              {/* Decorative quote icon */}
              <svg className="absolute top-6 right-6 opacity-10" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0ZM15.5 28.5C8.04416 28.5 2 22.4558 2 15C2 7.54416 8.04416 1.5 15.5 1.5C22.9558 1.5 29 7.54416 29 15C29 22.4558 22.9558 28.5 15.5 28.5Z" fill="#F77A40"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonalslanding;
