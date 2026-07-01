import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Programs', href: '#3ipp' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Clients', href: '#clients' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Smooth scroll-progress bar (0 → 1 across the whole page)
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 30);

      // Auto-hide on scroll-down, reveal on scroll-up (ignore tiny jitters + top of page)
      const delta = y - lastScrollY.current;
      if (y < 120 || isMobileMenuOpen) {
        setIsHidden(false);
      } else if (Math.abs(delta) > 6) {
        setIsHidden(delta > 0);
      }
      lastScrollY.current = y;

      // Simple active link calculation based on scroll offset
      const scrollPosition = y + 160;

      // Special case: bottom of the page highlights Contact
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 100) {
        setActiveLink('contact');
        return;
      }

      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveLink(targetId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,padding,box-shadow] duration-300 ${isScrolled ? 'py-3 bg-brand-darkBg/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10' : 'py-5 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center bg-brand-orange rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-200">
            <Cpu className="text-white w-5 h-5 animate-pulse-slow" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white leading-none font-heading">
              i3 <span className="text-brand-orange">Labs</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5 leading-none">
              Innovations Unleashed
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeLink === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-250 ${isActive ? 'text-brand-orange' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-5 py-2.5 bg-brand-orange text-white text-sm font-bold rounded-full hover:bg-brand-orangeLight transition-all duration-200 shadow-md glow-orange hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/5 bg-brand-darkBg/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeLink === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, id)}
                    className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${isActive ? 'bg-brand-orange/10 text-brand-orange' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="w-full py-3 bg-brand-orange text-white text-center font-bold rounded-xl hover:bg-brand-orangeLight transition-all duration-200 block shadow-md glow-orange"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange origin-left"
        style={{ scaleX: progressScaleX, opacity: isScrolled ? 1 : 0 }}
      />
    </motion.nav>
  );
};
