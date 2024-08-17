"use client"
import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<string>(typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light');
  const [icon, setIcon] = useState<string>(typeof window !== 'undefined' ? localStorage.getItem('icon') || 'IoSunny' : 'IoSunny');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIcon('IoSunny');
      localStorage.setItem('icon', 'IoSunny');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIcon('IoMoon');
      localStorage.setItem('icon', 'IoMoon');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, icon };
};

export default useTheme;
