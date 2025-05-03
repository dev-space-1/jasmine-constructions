
import React from 'react';
import { Building, Construction, Home, Briefcase, Wrench, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Home className="w-10 h-10 text-secondary" />,
    title: "Residential Construction",
    description: "Custom homes, townhouses, and multi-family residential projects built to the highest standards of quality and craftsmanship.",
    link: "/services/residential"
  },
  {
    icon: <Building className="w-10 h-10 text-secondary" />,
    title: "Commercial Building",
    description: "Office buildings, retail spaces, and industrial facilities designed for functionality, efficiency and lasting value.",
    link: "/services/commercial"
  },
  {
    icon: <Construction className="w-10 h-10 text-secondary" />,
    title: "Renovation & Remodeling",
    description: "Transform your existing property with our expert renovation and remodeling services for both residential and commercial spaces.",
    link: "/services/renovation"
  },
  {
    icon: <Wrench className="w-10 h-10 text-secondary" />,
    title: "Maintenance & Repairs",
    description: "Keep your property in top condition with our comprehensive maintenance services and timely repairs.",
    link: "/services/maintenance"
  },
  {
    icon: <Users className="w-10 h-10 text-secondary" />,
    title: "Consultation & Design",
    description: "Expert advice and innovative design solutions tailored to your specific construction project needs.",
    link: "/services/consultation"
  },
  {
    icon: <Briefcase className="w-10 h-10 text-secondary" />,
    title: "Project Management",
    description: "End-to-end project management ensuring your construction project is delivered on time, within budget, and to specification.",
    link: "/services/management"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Construction Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of construction services to meet your needs, from new builds and renovations to specialized commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
