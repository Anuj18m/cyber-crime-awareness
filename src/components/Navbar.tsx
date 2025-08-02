import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, AlertTriangle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/learn', label: 'Learn' },
    { path: '/report', label: 'Report Scam' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/team', label: 'Team' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
            <span className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
              CyberShield
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-green-400'
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Report Button */}
          <div className="hidden md:block">
            <Link
              to="/report"
              className="cyber-button bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Report Threat</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-green-400 bg-green-400/10'
                  : 'text-gray-300 hover:text-green-400 hover:bg-green-400/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/report"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-base font-medium transition-all duration-300"
          >
            Report Threat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;