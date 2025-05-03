
import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CtaSection from '../components/sections/CtaSection';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Index = () => {
  // Scroll to section if URL contains hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offsetPosition = element.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
