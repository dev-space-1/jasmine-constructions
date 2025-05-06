
import React from 'react';

const AboutSection = () => {
  const stats = [
    { value: "19+", label: "Years of Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "45+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Jasmin Constructions building"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white py-3 px-6">
                <p className="font-heading font-bold">Excellence since 2006</p>
              </div>
            </div>
            {/* Decorative element */}
            {/* <div className="hidden lg:block absolute -bottom-10 -right-10 w-64 h-64 bg-light rounded-lg z-0"></div> */}
          </div>

          {/* Content column */}
          <div className="z-10">
            <h2 className="section-title !mb-6 !text-left">About Jasmin Constructions</h2>
            <p className="text-gray-700 mb-6">
              Jasmin Constructions is a trusted, family-run construction company based in Sri Lanka, specializing in residential and small-scale commercial projects. Since 2006, we have been committed to delivering dependable, detail-oriented construction services rooted in craftsmanship, transparency, and lasting client relationships.
            </p>

            <p className="text-gray-700 mb-6">
              Founded by Mr. Udara Kapugamage, Jasmin Constructions began with a vision to offer personalized, hands-on services that reflect care, commitment, and a deep understanding of the local construction landscape. With years of prior experience across diverse projects, Mr. Udara laid a strong foundation for the company’s growth and reputation for quality.
            </p>

            <p className="text-gray-700 mb-6">
              Officially registered on August 29, 2006 (BR No: W81904) and later certified under CIDA Registration No: C-18843 with a Grade 07 classification in 2018, our company continues to grow steadily—focusing on structural excellence, client satisfaction, and enduring values.
            </p>
            <p className="text-gray-700 mb-8">
              At Jasmin Constructions, we don’t just build structures—we build relationships. Our hands-on approach, transparency, and attention to detail make us a reliable partner in your construction journey.
            </p>


            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-primary font-heading mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
