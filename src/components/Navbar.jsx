import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/work', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-2xl">
                Ayo<span className="text-purple-500">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white hover:text-purple-500 transition-all duration-300 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="/contact"
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2 -mr-2 text-white focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-300 rotate-90 hover:rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-300 hover:rotate-180" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 min-h-screen w-full bg-black transition-all duration-500 md:hidden ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            display: isMenuOpen ? 'block' : 'none'
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
            <div className="w-full max-w-md space-y-6">
              {navLinks.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center justify-between w-full p-4 text-white text-2xl hover:text-purple-500 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <span>{label}</span>
                  <ChevronRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              ))}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="block w-full text-center px-8 py-4 bg-purple-600 text-white text-xl rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: 'slideIn 0.5s ease-out 0.3s both'
                  }}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;