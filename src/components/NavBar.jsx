import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';


function WhatsAppIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.33-1.66a11.88 11.88 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.45-8.42ZM12.09 21.7h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.85 9.85 0 0 1-1.51-5.17c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.97c0 5.42-4.41 9.83-9.83 9.83Zm5.39-7.37c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.74.65.73.23 1.39.2 1.91.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.44-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function WhatsAppButton({ mobile = false, onClick }) {
  return (
    <button
      type="button"
      className={`navbar__cta ${mobile ? 'navbar__cta--mobile' : ''}`}
      onClick={onClick}
    >
      <span className="navbar__cta-default">
        <span>Let's talk</span>
        <ArrowUpRight size={17} strokeWidth={2} />
      </span>

      <span className="navbar__cta-whatsapp">
        <WhatsAppIcon size={18} />
        <span>WhatsApp</span>
      </span>
    </button>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContact = () => {
    closeMenu();

    // O modal do WhatsApp será ligado aqui posteriormente.
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          WAVE<span>®</span>
        </a>

        <nav
          className={`navbar__links ${
            menuOpen ? 'navbar__links--open' : ''
          }`}
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#projects" onClick={closeMenu}>
            Work
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <WhatsAppButton mobile onClick={handleContact} />
        </nav>

        <WhatsAppButton onClick={handleContact} />

        <button
          type="button"
          className="navbar__menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;