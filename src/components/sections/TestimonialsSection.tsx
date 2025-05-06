
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Jasmin Constructions transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations.",
    name: "Sarah Johnson",
    project: "Residential Home",
    rating: 5
  },
  {
    quote: "Working with Jasmin Constructions was a seamless experience. From planning to execution, their team demonstrated professionalism and expertise at every step.",
    name: "Michael Roberts",
    project: "Commercial Office",
    rating: 5
  },
  {
    quote: "The team at Jasmin Constructions delivered our project on time and within budget. Their communication was exceptional throughout the entire process.",
    name: "Emily Thompson",
    project: "Home Renovation",
    rating: 5
  },
  {
    quote: "We were impressed by the quality of work and dedication shown by Jasmin Constructions. They handled our complex project with ease and precision.",
    name: "David Wilson",
    project: "Retail Space",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    // Auto-scroll testimonials
    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding bg-secondary py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with Jasmin Constructions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <footer className="text-center">
                    <div className="font-bold text-lg text-primary">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentIndex].project}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${currentIndex === index ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
