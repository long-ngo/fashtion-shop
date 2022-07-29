import { useEffect, useState } from 'react';

function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}

export { useDarkMode };
