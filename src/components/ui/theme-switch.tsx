import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    // On mount, read the preferred theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Update state
    setTheme(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update DOM
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="rounded-full p-2 bg-[#dfdfdf] dark:bg-white/10 hover:bg-[#a4a4a4] dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-[#ff2d3b]" />
      ) : (
        <Moon className="h-5 w-5 text-[#631015]" />
      )}
    </motion.button>
  );
};

export default ThemeSwitch;