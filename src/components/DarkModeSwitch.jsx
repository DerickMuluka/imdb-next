'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode 
          className='text-2xl cursor-pointer hover:text-amber-500' 
          onClick={() => setTheme('light')} 
        />
      ) : (
        <MdDarkMode 
          className='text-2xl cursor-pointer hover:text-amber-500' 
          onClick={() => setTheme('dark')} 
        />
      )}
    </div>
  );
}
