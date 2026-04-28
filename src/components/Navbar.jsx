import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = ({ onContactClick }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isImpactPage = location.pathname === '/impacto-ambiental';
  const navLinkClass = `text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 relative group drop-shadow-md ${
    scrolled ? 'text-white/80 hover:text-white' : 'text-white'
  }`;

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 pointer-events-none ${
        scrolled
          ? 'bg-stone-950 py-3 md:py-4 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 to-transparent py-4 md:py-8'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between gap-3 pointer-events-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group min-w-0">
          <img
            src="/images/logo.webp"
            alt="RSB Green Tech Logo"
            className={`w-auto transition-all duration-500 group-hover:scale-105 ${
              scrolled ? 'h-14 md:h-[72px]' : 'h-16 md:h-24'
            }`}
          />
        </Link>

        {/* Links Section */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/"
            className={navLinkClass}
          >
            {t('nav_home')}
            <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full ${location.pathname === '/' ? 'w-full' : ''}`}></span>
          </Link>
          <Link
            to="/impacto-ambiental"
            className={navLinkClass}
          >
            {t('nav_impact')}
            <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full ${isImpactPage ? 'w-full' : ''}`}></span>
          </Link>
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
              scrolled 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <Globe size={14} className="text-brand-green" />
            {language === 'en' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            className={`hidden sm:inline-flex px-5 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-500 shadow-xl ${
              scrolled
                ? 'bg-brand-green text-white shadow-brand-green/30'
                : 'bg-white text-stone-900 shadow-white/10 hover:bg-brand-green hover:text-white'
            } hover:scale-105 active:scale-95`}
          >
            {t('nav_contact')}
          </button>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-stone-950/70 text-white shadow-xl backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute left-4 right-4 top-[calc(100%+0.75rem)] md:hidden overflow-hidden rounded-2xl border border-white/10 bg-stone-950/95 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col p-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-4 text-sm font-black uppercase tracking-[0.2em] transition-colors ${
                  location.pathname === '/' ? 'bg-white/10 text-brand-green' : 'text-white hover:bg-white/10'
                }`}
              >
                {t('nav_home')}
              </Link>
              <Link
                to="/impacto-ambiental"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-4 text-sm font-black uppercase tracking-[0.2em] transition-colors ${
                  isImpactPage ? 'bg-white/10 text-brand-green' : 'text-white hover:bg-white/10'
                }`}
              >
                {t('nav_impact')}
              </Link>
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-left text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Globe size={16} className="text-brand-green" />
                  {t('nav_language')}
                </span>
                <span>{language === 'en' ? 'EN' : 'ES'}</span>
              </button>
              <button
                type="button"
                onClick={handleContactClick}
                className="mt-2 rounded-xl bg-brand-green px-4 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-brand-green/20 transition-transform active:scale-95 sm:hidden"
              >
                {t('nav_contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
