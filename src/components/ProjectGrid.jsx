import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: "EcoSmart Home",
        category: "Product Design",
        tech: "Figma • React Native",
        year: "2023",
        color: "bg-blue-100" // Placeholder for image
    },
    {
        id: 2,
        title: "Financial Dashboard",
        category: "UX Research",
        tech: "UserTesting • Tableau",
        year: "2022",
        color: "bg-green-100"
    },
    {
        id: 3,
        title: "HealthTrack App",
        category: "Full Stack",
        tech: "Next.js • Tailwind",
        year: "2023",
        color: "bg-orange-100"
    },
    {
        id: 4,
        title: "Creative Portfolio",
        category: "Web Design",
        tech: "Webflow • GSAP",
        year: "2021",
        color: "bg-purple-100"
    }
];

const ProjectGrid = () => {
    return (
        <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer block">
                        <div className={`w-full aspect-[4/3] ${project.color} mb-6 overflow-hidden rounded-sm relative`}>
                            {/* Placeholder for project thumbnail */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                                <span className="text-black/50 font-medium">View Case Study</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-serif text-gray-900 mb-2 group-hover:underline decoration-1 underline-offset-4">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 text-xs font-bold font-sans tracking-widest text-gray-400 uppercase">
                            <span>{project.category}</span>
                            <span>•</span>
                            <span>{project.tech}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
