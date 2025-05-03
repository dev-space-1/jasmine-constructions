
import React from 'react';
import { Link } from 'react-router-dom';
import constructionImg from "../../assets/house-construction.jpg";

const CtaSection = () => {
  return (
    <section className="relative py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{
          backgroundImage: `url(${constructionImg})`
        }}
        
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today for a free consultation and quote. Our team is ready to help bring your vision to life with expert craftsmanship and dedicated project management.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-light transition-colors duration-300 font-semibold py-3 px-8 rounded-md"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
