import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Button from '../../ui/Button'; 
import { BRAND, NAV_LINKS, HERO_CONTENT } from '../../../constants';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../../component/context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ''}`}>
      
      {/* Logo */}
      <div className={styles.logoBox} onClick={scrollToTop}>
        <div className={styles.logoIcon}>
          <div className="w-3 h-3 bg-current rounded-sm rotate-45"></div> 
        </div>
        <span className={styles.brandName}>{BRAND.name}</span>
      </div>

      {/* Desktop Links */}
      <div className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className={styles.linkItem}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Desktop CTA */}
        <Button variant="secondary" className="hidden md:block px-5 py-2 text-sm rounded-lg">
          {HERO_CONTENT.ctaSecondary}
        </Button>

        {/* Mobile Menu Icon with Background */}
        <button 
          className={styles.menuIconBtn} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.menuActive : ''}`}>
        <div className={styles.mobileContent}>
          {NAV_LINKS.map((link, index) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={styles.mobileLink}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.linkNumber}>0{index + 1}</span>
              {link.label}
            </a>
          ))}
          
          <div className={styles.mobileFooter}>
             <Button variant="secondary" className="w-full py-4 text-sm rounded-xl">
                {HERO_CONTENT.ctaSecondary}
             </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;