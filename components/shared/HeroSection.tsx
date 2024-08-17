import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 mt-10 mb-20">
      <h1 className="text-[40px] leading-[48px] lg:leading-[100px]  md:text-6xl md:leading-[80px] lg:text-[80px] font-bold text-[#25194D] dark:text-[#DFE1FF] mb-8">
        Turning Dreams into<br />Extraordinary Events
      </h1>
      
      <p className="text-[#25194D] dark:text-[#DFE1FF] max-w-2xl mb-14">
        Evently is your trusted partner in creating unforgettable events, from intimate
        gatherings to large celebrations. We bring your vision to life with meticulous
        detail, creative flair, and expert coordination, ensuring a seamless, stress-free
        experience.
      </p>
      
      <div className="flex flex-col sm:flex-row sm:gap-10 gap-4">
        <button className="px-20 py-4  border border-[#624CF5] dark:border-[#DFE1FF] text-[#6440EB] dark:text-[#DFE1FF] rounded-md hover:bg-indigo-50 transition-colors">
          Find Event
        </button>
        <button className="px-20 py-4 bg-gradient-to-r from-[#624CF5] to-[#6440EB] text-white rounded-md hover:bg-indigo-700 transition-colors">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default HeroSection;