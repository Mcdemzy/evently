"use client"
import React from 'react';
import useTheme from './hooks/useTheme';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, icon } = useTheme();

  const renderIcon = () => {
    if (icon === 'IoSunny') {
      return <IoSunny size={24} className='rounded-full p-1 h-9 w-9 text-[#4F81EC]' />;
    } else {
      return <IoMoon size={24} className='bg-[#F6F6F6] rounded-full p-2 h-9 w-9' />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {renderIcon()}
    </button>
  );
};

export default ThemeToggle;
