'use client';
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewsletterSubscription: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
    setName('');
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' },
  };

  const { ref: containerRef, inView } = useInView({ triggerOnce: false, threshold: 0.8 });

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full dark:w-auto mx-auto bg-[#EDEFFF] dark:bg-[rgb(13,13,13)] mb-16 p-12 mt-10 rounded-lg"
    >
      <h2 className="text-3xl font-semibold text-center mb-2">
        Subscribe to our Events Newsletter
      </h2>
      <p className="text-center md:text-base text-sm font-normal md:mb-10 mb-7">
        Subscribe to our Newsletter so you don't miss new events, exclusive offers and premium discounts
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <motion.div variants={inputVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-[#DFE1FF] dark:bg-[#000000] border-blue-200 border"
            required
          />
        </motion.div>
        <motion.div variants={inputVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-[#DFE1FF] dark:bg-[#000000] border-blue-200 border"
            required
          />
        </motion.div>
        <div className='flex justify-center'>
          <motion.button
            type="submit"
            className="w-auto bg-gradient-to-r from-[#624CF5] to-[#624CF5] text-white py-3 px-10 rounded-md hover:bg-indigo-900 transition duration-300"
            whileHover="hover"
            variants={buttonVariants}
          >
            Subscribe
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default NewsletterSubscription;
