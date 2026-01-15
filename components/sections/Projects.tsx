"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin, Calendar, ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  specs?: string[];
};

const categories = [
  "All",
  "Structural",
  "Warehouses",
  "Staircases",
  "Custom",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Limassol Industrial Complex",
    category: "Warehouses",
    location: "Limassol, Cyprus",
    year: "2024",
    description:
      "A 2,500m² warehouse facility featuring heavy-duty steel framing, insulated cladding, and loading bay infrastructure.",
    image: "/images and videos/project1.png",
    specs: ["2,500m² floor area", "12m clear height", "4 loading bays"],
  },
  {
    id: 2,
    title: "Nicosia Office Tower",
    category: "Structural",
    location: "Nicosia, Cyprus",
    year: "2024",
    description:
      "Structural steel framework for a 6-story commercial building, including mezzanine floors and rooftop support structures.",
    image: "/images and videos/project2.png",
    specs: ["6 floors", "Steel frame structure", "Seismic-rated design"],
  },
  {
    id: 3,
    title: "Luxury Villa Staircase",
    category: "Staircases",
    location: "Paphos, Cyprus",
    year: "2023",
    description:
      "Custom-designed floating steel staircase with glass balustrades and LED-integrated handrails for a private residence.",
    image: "/images and videos/project3.png",
    specs: ["Floating design", "Glass balustrades", "LED lighting"],
  },
  {
    id: 4,
    title: "Agricultural Storage Facility",
    category: "Warehouses",
    location: "Larnaca, Cyprus",
    year: "2023",
    description:
      "Climate-controlled storage warehouse with reinforced steel structure designed for agricultural equipment and produce.",
    image:
      "https://images.unsplash.com/photo-1553522991-71439aa62779?w=800&q=80",
    specs: ["1,800m² area", "Climate controlled", "Heavy load capacity"],
  },
  {
    id: 5,
    title: "Industrial Spiral Staircase",
    category: "Staircases",
    location: "Limassol, Cyprus",
    year: "2023",
    description:
      "Heavy-duty industrial spiral staircase connecting three levels of a manufacturing facility with anti-slip treads.",
    image:
      "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=800&q=80",
    specs: ["3-level span", "Anti-slip treads", "Industrial grade"],
  },
  {
    id: 6,
    title: "Residential Steel Frame",
    category: "Structural",
    location: "Ayia Napa, Cyprus",
    year: "2022",
    description:
      "Complete steel skeleton for a modern 4-bedroom villa, designed for rapid construction and earthquake resistance.",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
    specs: ["4-bedroom villa", "Rapid assembly", "Seismic-resistant"],
  },
  {
    id: 7,
    title: "Custom Gate & Railing System",
    category: "Custom",
    location: "Protaras, Cyprus",
    year: "2024",
    description:
      "Bespoke entrance gate and perimeter railing system with automated sliding mechanism and decorative metalwork.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    specs: ["Automated gate", "Decorative panels", "Powder-coated finish"],
  },
  {
    id: 8,
    title: "Logistics Center Extension",
    category: "Warehouses",
    location: "Nicosia, Cyprus",
    year: "2022",
    description:
      "3,200m² extension to existing logistics facility with integrated conveyor supports and overhead crane rails.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    specs: ["3,200m² extension", "Crane rails", "Conveyor integration"],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl bg-white overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-10 h-10 bg-white/90 backdrop-blur flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-80 lg:h-96">
          {project.image.startsWith("http") ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <img
              src={project.image.replace(/\s/g, "%20")}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-steel text-white text-xs font-medium mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-steel" />
              {project.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-steel" />
              {project.year}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Specs */}
          {project.specs && (
            <div>
              <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                Project Specifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-silver-light py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-steel" />
            <span className="text-xs text-gray-400 tracking-widest uppercase">
              Our Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.1] mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            A selection of our completed works across industrial, commercial,
            and residential applications.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-steel text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  {project.image.startsWith("http") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.image.replace(/\s/g, "%20")}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        console.error("Image failed to load:", project.image);
                        setImageErrors(prev => new Set(prev).add(project.id));
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={18} className="text-steel" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-steel font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-steel transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={12} />
                    {project.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

