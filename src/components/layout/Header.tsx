
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/jasmine-constructions-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // const scrollToSection = (id: string) => {
  //   setMenuOpen(false);
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const offsetPosition = element.offsetTop - 80;
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
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
          <Link to="/" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}>Home</Link>
          <Link to="/#services" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}>Services</Link>
          <Link to="/#services" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-secondary transition-colors`}>About</Link>
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
            <Link to="/" className="text-gray-800 hover:text-secondary py-2" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/#services" className="text-gray-800 hover:text-secondary py-2 text-left">Services</Link>
            <Link to="/#services" className="text-gray-800 hover:text-secondary py-2 text-left">About</Link>
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
