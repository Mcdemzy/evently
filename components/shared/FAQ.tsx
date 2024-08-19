'use client';
import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from './useOutsideClick/useOutsideClick';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Evently?',
    answer: 'Evently is your trusted partner in crafting unforgettable events, whether you’re planning an intimate gathering or a large-scale celebration. At Evently, we specialize in bringing your unique vision to life with meticulous attention to detail, creative flair, and expert coordination.',
  },
  {
    question: 'What types of events does Evently specialize in?',
    answer: '[Answer goes here]',
  },
  {
    question: "What happens if there's a last-minute change or emergency on the day of the event?",
    answer: '[Answer goes here]',
  },
  {
    question: "How far in advance should I book Evently's services?",
    answer: '[Answer goes here]',
  },
  {
    question: 'What is the process of working with Evently from start to finish?',
    answer: '[Answer goes here]',
  },
];

const FAQItem: React.FC<{
  item: FAQItem;
  index: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}> = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  const ref = useOutsideClick(() => {
    if (isOpen) setOpenIndex(null);
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<string | number>(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={`mb-4 rounded-2xl ${isOpen ? 'bg-[#624CF5] text-white' : 'bg-[#EDEFFF] dark:bg-[#624CF5]'}`}
    >
      <button
        className="w-full text-left font-normal md:text-xl text-base p-4 bg-lavender-50 hover:bg-lavender-100 rounded-lg flex justify-between items-center"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span>{item.question}</span>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={`faq-answer transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        <div className="px-4 pb-4 bg-[#624CF5] text-white font-normal text-sm rounded-lg">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="md:max-w-7xl w-full mx-auto p-6">
      <h2 className="text-[30px] lg:text-[40px] font-bold text-center text-[#1C1C1C] dark:text-[#EDEFFF] leading-[60px] mb-2 uppercase">
        FAQ
      </h2>
      <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] border-[#1C1C1C] dark:border-[#EDEFFF] mx-auto"></div>
      <p className="text-center font-normal text-base md:text-xl mb-5 leading-5 md:leading-[60px]">
        Our most frequently asked questions and answers
      </p>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default FAQ;
