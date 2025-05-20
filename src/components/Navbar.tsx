import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "./ui/theme-switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "glass"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="accent-text font-bold text-2xl">XylonMarks</span>
            <span className="text-white dark:text-white font-light text-xl">Labs</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 dark:text-white hover:text-[#FF6B81] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <ThemeSwitch />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="accent-gradient px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Log In
          </motion.button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeSwitch />
          
          <button
            onClick={toggleMenu}
            className="text-slate-700 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <>
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden absolute top-full left-0 w-full glass-card py-4 px-4 space-y-3"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="block text-slate-700 dark:text-white hover:text-[#FF6B81] py-2 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full accent-gradient px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Log In
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
</>

    </nav>
  );
};

export default Navbar;
