import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/images/nav-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 glass">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-cente">
          <div className="md:col-span-2 flex flex-col">
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4 cursor-pointer">
                <img src={logo} alt="logo" className="w-60" />
              </div>
            </Link>
          </div>
          <div>
            <p className="text-[#4a4a4a] dark:text-gray-300 mb-6 max-w-md">
              Transforming ideas into exceptional digital experiences. We build custom software solutions that drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center hover:scale-110 hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center hover:scale-110 hover:opacity-90 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center hover:scale-110 hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center hover:scale-110 hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-[#4a4a4a] dark:text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-[#4a4a4a] dark:text-gray-300 hover:text-[#FF6B81] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-[#4a4a4a] dark:text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#4a4a4a] dark:text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF6B81] transition-colors">
                  ERP Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF6B81] transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF6B81] transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} XylonMark Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
