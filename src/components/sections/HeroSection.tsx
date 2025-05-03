
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary" style={{ opacity: 0.7 }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
            Building Excellence, Delivering Results
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Jasmine Constructions provides top-quality construction services with precision, 
            reliability, and unmatched craftsmanship for residential and commercial projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="cta-button">
              Get a Free Quote
            </Link>
            <Link to="/projects" className="btn-outline text-white">
              View Our Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 diagonal-divider"></div>
    </section>
  );
};

export default HeroSection;
