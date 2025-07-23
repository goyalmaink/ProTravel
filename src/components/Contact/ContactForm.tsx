import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    departureDate: '',
    travelers: '',
    returnDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    departureDate: '',
    travelers: '',
    returnDate: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      destination: '',
      departureDate: '',
      travelers: '',
      returnDate: '',
      message: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z\s]{2,30}$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Destination validation
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
      isValid = false;
    }

    // Departure date validation
    if (!formData.departureDate) {
      newErrors.departureDate = 'Departure date is required';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.departureDate);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.departureDate = 'Departure date cannot be in the past';
        isValid = false;
      }
    }

    // Return date validation
    if (!formData.returnDate) {
      newErrors.returnDate = 'Return date is required';
      isValid = false;
    } else {
      const returnDate = new Date(formData.returnDate);
      const departureDate = new Date(formData.departureDate);
      if (returnDate < departureDate) {
        newErrors.returnDate = 'Return date must be after departure date';
        isValid = false;
      }
    }

    // Travelers validation
    if (!formData.travelers) {
      newErrors.travelers = 'Number of travelers is required';
      isValid = false;
    } else if (parseInt(formData.travelers) < 1) {
      newErrors.travelers = 'At least 1 traveler is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        destination: '',
        departureDate: '',
        travelers: '',
        returnDate: '',
        message: ''
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0 0 20px rgba(247, 122, 64, 0.3)"
    }
  };

  return (
    <motion.div 
      className="w-[450px] bg-white rounded-[20px] border-2 border-[#F77A40] p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-[36px] font-oswald text-center"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-black">Tell Us About </span>
        <span
        style={{
          background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Your Dream Trip</span>
      </motion.h2>

      <motion.form 
        onSubmit={handleSubmit} 
        className="mt-8 space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex gap-3"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name..."
              className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.name ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins placeholder:text-black/50`}
              variants={inputVariants}
              whileFocus="focus"
              transition={{ duration: 0.2 }}
            />
            {errors.name && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.name}
              </motion.p>
            )}
          </div>
          <div className="flex-1">
            <motion.input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number..."
              className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.phone ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins placeholder:text-black/50`}
              variants={inputVariants}
              whileFocus="focus"
              transition={{ duration: 0.2 }}
            />
            {errors.phone && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.phone}
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address..."
            className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.email ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins placeholder:text-black/50`}
            variants={inputVariants}
            whileFocus="focus"
            transition={{ duration: 0.2 }}
          />
          {errors.email && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.email}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          className="flex gap-3"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <motion.input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Destination..."
              className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.destination ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins placeholder:text-black/50`}
              variants={inputVariants}
              whileFocus="focus"
              transition={{ duration: 0.2 }}
            />
            {errors.destination && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.destination}
              </motion.p>
            )}
          </div>
          <div className="flex-1">
            <motion.input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.departureDate ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins`}
              variants={inputVariants}
              whileFocus="focus"
              transition={{ duration: 0.2 }}
            />
            {errors.departureDate && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.departureDate}
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div 
          className="flex gap-3"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <motion.input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              placeholder="Number of Travelers..."
              className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.travelers ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins placeholder:text-black/50`}
              variants={inputVariants}
              whileFocus="focus"
              transition={{ duration: 0.2 }}
            />
            {errors.travelers && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.travelers}
              </motion.p>
            )}
          </div>
          <div className="flex-1">
            <motion.input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className={`w-full h-[50px] bg-[#D9D9D9]/60 rounded-[16px] border ${errors.returnDate ? 'border-red-500' : 'border-[#F77A40]'} px-5 text-[12px] font-poppins`}
              variants={inputVariants}
              whileFocus="focus"
              transition={{ duration: 0.2 }}
            />
            {errors.returnDate && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.returnDate}
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your dream trip..."
            rows={4}
            className={`w-full bg-[#D9D9D9]/60 rounded-[16px] border ${errors.message ? 'border-red-500' : 'border-[#F77A40]'} px-5 py-3 text-[12px] font-poppins placeholder:text-black/50 resize-none`}
            variants={inputVariants}
            whileFocus="focus"
            transition={{ duration: 0.2 }}
          />
          {errors.message && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        <motion.button
          type="submit"
          className="w-full h-[50px] text-white rounded-[16px] font-semibold transition-colors"
          style={{
            background: 'linear-gradient(135deg, #F36E20 0%, #FDAF16 100%)',
            fontWeight: '500'
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(247, 122, 64, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Submit Inquiry
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm; 