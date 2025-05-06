import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/jasmine-constructions-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check for hash in URL when location changes
    if (location.hash) {
      // Remove the # symbol
      const id = location.hash.substring(1);
      scrollToSection(id);
    }
  }, [location]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Add a small delay to ensure any state changes complete
      setTimeout(() => {
        const offsetPosition = element.offsetTop - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  const handleNavLinkClick = (e, id) => {
    // Only handle scroll if we're on the home page
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Jasmin Constructions Logo"
            className="h-8 md:h-10 w-auto"
          />
          <div className="text-xl md:text-2xl font-bold font-heading">
            <span className={`${scrolled ? 'text-primary' : 'text-white'}`}>Jasmine</span>
            <span className={`${scrolled ? 'text-secondary' : 'text-white'}`}> Constructions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/home" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}>Home</Link>
          <Link 
            to="/home#services" 
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}
            onClick={(e) => handleNavLinkClick(e, 'services')}
          >
            Services
          </Link>
          <Link 
            to="/home#about" 
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}
            onClick={(e) => handleNavLinkClick(e, 'about')}
          >
            About
          </Link>
          <Link to="/projects" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}>Projects</Link>
          <Link to="/contact" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}>Contact</Link>
          <Link to="/contact" className="cta-button ml-4">Get Quote</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className={`${scrolled ? 'text-primary' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/home" className="text-gray-800 hover:text-secondary py-2" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link 
              to="/home#services" 
              className="text-gray-800 hover:text-secondary py-2 text-left"
              onClick={(e) => handleNavLinkClick(e, 'services')}
            >
              Services
            </Link>
            <Link 
              to="/home#about" 
              className="text-gray-800 hover:text-secondary py-2 text-left"
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              About
            </Link>
            <Link to="/projects" className="text-gray-800 hover:text-secondary py-2" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" className="text-gray-800 hover:text-secondary py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/contact" className="cta-button text-center" onClick={() => setMenuOpen(false)}>Get Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;