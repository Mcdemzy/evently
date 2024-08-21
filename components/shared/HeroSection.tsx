"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center px-4 mt-10 md:mb-20 mb-8">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-[30px] leading-[38px] lg:leading-[100px] md:text-6xl md:leading-[80px] lg:text-[80px] font-bold text-[#25194D] dark:text-[#DFE1FF] mb-8"
      >
        Turning Dreams into<br />Extraordinary Events
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="text-[#25194D] font-normal text-sm md:text-xl dark:text-[#DFE1FF] max-w-2xl md:mb-14 mb-8"
      >
        Evently is your trusted partner in creating unforgettable events, from intimate
        gatherings to large celebrations. We bring your vision to life with meticulous
        detail, creative flair, and expert coordination, ensuring a seamless, stress-free
        experience.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        className="flex flex-col sm:flex-row sm:gap-10 gap-4"
      >
        <button className="md:px-20 px-8 py-4 border border-[#624CF5] dark:border-[#DFE1FF] text-[#6440EB] dark:text-[#DFE1FF] rounded-md dark:hover:bg-gray-900 hover:bg-gray-200 transition-colors">
          Find Event
        </button>
        <button className="md:px-20 px-8 py-4 bg-gradient-to-r from-[#624CF5] to-[#6440EB] text-white rounded-md hover:bg-indigo-700 transition-colors">
          Create Event
        </button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
