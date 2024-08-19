import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <div className="text-center bg-[#EDEFFF] dark:bg-[rgb(13,13,13)] mb-16 p-12 mt-10 rounded-lg flex flex-col justify-center">
      <h1 className="text-3xl font-semibold text-center mb-5">Pricing</h1>
      <p className="text-center text-base font-normal mb-10">
        Check all the pricing and features it comes with to know which suits you
        best.
      </p>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-[#624CF5] to-[#624CF5] text-white py-3 px-10 rounded-md hover:bg-indigo-900 transition duration-300 max-w-[177px]">
          View Pricing
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
