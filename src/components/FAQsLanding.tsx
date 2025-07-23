import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "What's the cancellation policy?",
    answer: "You can cancel your booking up to 7 days before departure for a full refund. Cancellations between 7-3 days receive a 50% refund. No refunds for cancellations within 3 days of departure.",
    category: "payment"
  },
  {
    id: 2,
    question: "Is this trip safe for solo travelers?",
    answer: "Absolutely! Our trips are designed to be safe and welcoming for solo travelers. You'll be part of a small group with experienced guides, and we ensure all accommodations and activities meet our safety standards.",
    category: "safety"
  },
  {
    id: 3,
    question: "Are there any hidden charges?",
    answer: "No hidden charges! Our pricing is completely transparent. The package includes all accommodations, meals, transportation, and activities as listed. Only personal expenses like shopping and tips are additional.",
    category: "payment"
  },
  {
    id: 4,
    question: "What if I miss the departure bus?",
    answer: "We recommend arriving 30 minutes before departure. If you miss the bus, contact our emergency number immediately. We'll help arrange alternative transportation, though additional costs may apply.",
    category: "accommodation"
  }
];

const categories = [
  { id: 'payment', label: 'Payment', icon: '💰' },
  { id: 'safety', label: 'Safety', icon: '🛡️' },
  { id: 'food', label: 'Food', icon: '🍽️' },
  { id: 'accommodation', label: 'Accommodation', icon: '🏨' }
];

const FAQsLanding: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('payment');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => 
    faq.category === activeCategory &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="relative w-full bg-[#E5E7EB] flex justify-center py-16">
      <div className="max-w-4xl w-full px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#111827] mb-2 font-inter">
            Still Have Questions?
          </h2>
          <p className="text-[#4B5563] text-lg font-inter">
            Find answers to the most commonly asked questions
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F77A40] focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_531_3827)">
                  <path d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z" fill="#9CA3AF"/>
                </g>
                <defs>
                  <clipPath id="clip0_531_3827">
                    <path d="M0 0H16V16H0V0Z" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'border border-[#F77A40] text-[#F77A40]'
                  : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
              }`}
            >
              <span className="text-base">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-[#111827] font-semibold text-base">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedItems.includes(faq.id) ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16H0V0H14V16Z" stroke="#E5E7EB"/>
                    <path d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z" fill="#F97316"/>
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-[#4B5563] text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[#6B7280] text-lg">
              No questions found matching your search. Try a different keyword or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQsLanding;
