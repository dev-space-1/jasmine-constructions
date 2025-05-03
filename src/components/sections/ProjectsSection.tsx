
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CPM from "../../assets/Faith school/WhatsApp Image 2025-05-01 at 10.44.56 AM.jpeg";
import HICasual from "../../assets/Hi Casual/Screenshot 2025-05-01 105126.png";
import Srimathi from "../../assets/Srimathi Dissanayake/P7230054.jpg";
import Chathula from "../../assets/Chathula Wickramasinghe/482032109_1055132659970069_4863005184763021652_n.jpg";

const projects = [
  {
    id: 1,
    title: "CPM Faith School - Wattala",
    category: "Institution",
    image: CPM
  },
  {
    id: 2,
    title: "Clothing Store",
    category: "Commercial Building",
    image: HICasual
  },
  {
    id: 3,
    title: "Luxury Residentail Home - Mattegoda",
    category: "Residential",
    image: Srimathi
  },
  {
    id: 4,
    title: "Luxury Residentail Home - pannipitiya",
    category: "Residential",
    image: Chathula
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful construction projects that showcase our expertise, quality craftsmanship, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group cursor-pointer bg-white">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white py-2 px-4 rounded-md">
                    <span className="font-medium text-primary">View Details</span>
                  </div>
                </div>
                <span className="absolute top-4 right-4 bg-secondary text-white text-sm py-1 px-3 rounded">
                  {project.category}
                </span>
              </div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold font-heading">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="cta-button">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
