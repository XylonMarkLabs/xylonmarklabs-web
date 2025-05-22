import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter"; // import useLocation
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "./ui/theme-switch";
import logo from "../assets/images/nav-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation(); // get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
            <img src={logo} alt="logo" className="w-24" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <a
                className={`block px-3 py-1 rounded-full transition-colors duration-200 font-medium ${
                  location === link.href
                    ? "text-[#ff2d3b] text-lg "
                    : "text-slate-700 dark:text-white hover:underline hover:underline-offset-8 hover:text-[#ff2d3b] dark:hover:text-[#ff2d3b]"
                }`}
              >
                {link.label}
              </a>
            </Link>

          ))}

          <ThemeSwitch />
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full right-0 w-1/4 nav-card py-4 px-4 space-y-3 bg-white dark:bg-zinc-900 shadow-lg justify-center rounded-lg"
          >
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <a
                  onClick={closeMenu}
                  className={`block px-2 py-1 my-1 rounded-full transition-colors font-medium ${
                    location === link.href
                      ? "text-[#ff2d3b] text-lg "
                    : "text-slate-700 dark:text-white hover:underline hover:underline-offset-8 hover:text-[#ff2d3b] dark:hover:text-[#ff2d3b]"
                  }`}
                >
                  {link.label}
                </a>

              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
