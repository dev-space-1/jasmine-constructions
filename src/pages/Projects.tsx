
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import dissanayakeImg from '../assets/Srimathi Dissanayake/P7230054.jpg';
import wickramasingheImg from '../assets/Chathula Wickramasinghe/482032109_1055132659970069_4863005184763021652_n.jpg';
import cpmFaithImg from '../assets/Faith school/WhatsApp Image 2025-05-01 at 10.44.56 AM.jpeg';
import hiCasualImg from '../assets/Hi Casual/Screenshot 2025-05-01 105126.png';
import channaImg from '../assets/KMLP Channa/484151307_1056935546456447_3220347954127496795_n.jpg';
import hettiarachchiImg from '../assets/Mr. AS Hettiarachchi/186551832_2533376373637858_8914516926541508037_n.jpg';
import dahanayakeImg from '../assets/Mr. TTS Dahanayake/DSC_0395.jpg';
import amanthiImg from '../assets/Sukitha Amanthi/P7300104.jpg';


const projectsData = [
  {
    id: 1,
    title: "Elegant Private Residence",
    category: "Residential",
    location: "Mattegoda",
    client: "Mrs. Shrimathi Dissanayake",
    completion: "2012",
    description: "This elegant private residence in Mattegoda blends contemporary living with traditional architectural elements, reflected in its finely detailed woodwork, ornate pillars, and open verandahs. The two-storey home is characterized by white-washed walls, a terracotta-toned roof, and carefully landscaped gardens that include a tranquil water feature.",
    image: dissanayakeImg,
  },
  {
    id: 2,
    title: "Modern Two-Story Residence",
    category: "Residential",
    location: "Pannipitiya",
    client: "Chathula Wickramasinghe",
    completion: "May 2022",
    description: "This two-story modern residence is designed with a minimalist and contemporary aesthetic, showcasing clean lines, a flat roof, and a bright white exterior accented by sleek black railings. Inside, the home features a polished tile floor finish, an open stairway with black metal handrails, and large windows that allow ample natural light.",
    image: wickramasingheImg,
  },
  {
    id: 3,
    title: "CPM Faith School",
    category: "Institutional",
    location: "Wattala", 
    client: "Pastor Simon",
    completion: "March 2025",
    description: "A modern educational facility comprising a three-story academic block and supporting infrastructure. The project includes purpose-built classrooms, administrative offices, and landscaped outdoor spaces designed to foster a vibrant and accessible learning environment.",
    image: cpmFaithImg,
  },
  {
    id: 4,
    title: "Hi-Casual Clothing Store",
    category: "Commercial",
    location: "Battaramulla",
    client: "Mr. Priyantha",
    completion: "12th May 2012",
    description: "This commercial clothing store features a striking modern facade with full-height glass windows and a bold signage element, maximizing retail visibility. The interior layout supports flexible merchandising while maintaining a clean, contemporary aesthetic suitable for fashion retail.",
    image: hiCasualImg,
  },
  {
    id: 5,
    title: "Three-Story Residence",
    category: "Residential",
    location: "Pannipitiya",
    client: "KMLP Channa",
    completion: "2024",
    description: "A contemporary three-story residential building designed to blend functionality with modern aesthetics. The project features spacious living areas, a fully fitted kitchen, and private balconies for each level. With clean lines, generous glazing, and high-quality finishes, the residence offers a refined lifestyle experience.",
    image: channaImg,
  },
  {
    id: 6,
    title: "Private Residence - Negombo",
    category: "Residential",
    location: "Negombo",
    client: "Mr. A.S. Hettiarachchi",
    completion: "2018",
    description: "A contemporary three-story residence designed to accommodate modern urban living within a compact site. The house features clean lines, open interior spaces, and large glazed openings that enhance natural light and ventilation. Thoughtfully integrated circulation areas and a private courtyard foster a seamless indoor-outdoor connection.",
    image: hettiarachchiImg,
  },
  {
    id: 7,
    title: "Contemporary Brick Residence",
    category: "Residential",
    location: "Marawila",
    client: "Mr. T.T.S. Dahanayake",
    completion: "2017",
    description: "This contemporary residence reflects a harmonious blend of modern design principles and contextual materiality. The two-storey home features a striking red brick façade that anchors the central vertical volume, contrasting with clean white rendered walls. A unique highlight is the use of vibrant stained-glass windows.",
    image: dahanayakeImg,
  },
  {
    id: 8,
    title: "Two-Story Home in Homagama",
    category: "Residential",
    location: "Homagama",
    client: "Ms. Sukitha Amanthi",
    completion: "December 15, 2014",
    description: "A custom-designed two-story residence nestled in the quiet suburbs of Colombo, this home features a crisp white exterior, durable green roofing, and abundant natural light through thoughtfully placed windows. Designed for functionality and everyday comfort, the layout supports easy circulation.",
    image: amanthiImg,
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];

  const filteredProjects = selectedCategory && selectedCategory !== "All"
    ? projectsData.filter(project => project.category === selectedCategory)
    : projectsData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Banner */}
      <div className="pt-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">Our Projects</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Explore a selection of our completed construction projects, showcasing the quality and craftsmanship we bring to every build.
          </p>

        </div>
      </div>

      <main className="flex-grow bg-light">
        <div className="container mx-auto px-4 md:px-8 py-12">
          {/* Category filters */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${selectedCategory === category || (category === "All" && !selectedCategory) ? 'bg-secondary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    <span className="font-semibold">Location:</span> {project.location}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>
                  <button className="text-secondary hover:text-secondary-light font-semibold flex items-center">
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {projectsData.filter(p => p.id === selectedProject).map(project => (
                  <div key={project.id} className="relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                      aria-label="Close modal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="h-64 md:h-96 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="mb-4">
                        <span className="inline-block bg-secondary/10 text-secondary text-sm px-3 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">{project.title}</h2>
                      <div className="mb-6">
                        <p className="text-gray-600 mb-2">
                          <span className="font-semibold">Location:</span> {project.location}
                        </p>
                        <p className="text-gray-600 mb-4">
                          <span className="font-semibold">Completion:</span> January 2023
                        </p>
                        <p className="text-gray-700">{project.description}</p>
                        <p className="text-gray-700 mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                          to="/contact"
                          className="cta-button"
                        >
                          Inquire About Similar Projects
                        </Link>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="btn-outline"
                        >
                          Close Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
