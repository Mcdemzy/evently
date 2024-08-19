"use client"
import React, { useState, FormEvent } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="w-full dark:w-auto mx-auto bg-[#EDEFFF] dark:bg-[rgb(13,13,13)] mb-16 p-12 mt-10 rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Subscribe to our Events Newsletter
      </h2>
      <p className="text-center text-base font-normal mb-10">
        Subscribe to our Newsletter so you don't miss new<br /> events, exclusive offers and premium discounts
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-[#DFE1FF] dark:bg-[#000000] border-blue-200 border"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-[#DFE1FF] dark:bg-[#000000] border-blue-200 border"
            required
          />
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="w-auto bg-gradient-to-r from-[#624CF5] to-[#624CF5] text-white py-3 px-10 rounded-md hover:bg-indigo-900 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSubscription;