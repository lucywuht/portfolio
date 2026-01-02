import React from 'react';
import { useParams, Link } from 'react-router-dom';

// In a real app, this data would ideally come from a central store or API
// For now, duplicating it here or extracting it to a shared constant is fine
const projects = [
    {
        id: 1,
        title: "EcoSmart Home",
        category: "Product Design",
        tech: "Figma • React Native",
        year: "2023",
        color: "bg-blue-100",
        description: "A smart home application designed to help users monitor and reduce their energy consumption. Features include real-time usage tracking, smart device control, and personalized energy-saving tips."
    },
    {
        id: 2,
        title: "Financial Dashboard",
        category: "UX Research",
        tech: "UserTesting • Tableau",
        year: "2022",
        color: "bg-green-100",
        description: "A comprehensive financial visualization tool for enterprise clients. The project involved extensive user research to understand the needs of financial analysts and resulted in a dashboard that improved data retrieval speed by 40%."
    },
    {
        id: 3,
        title: "HealthTrack App",
        category: "Full Stack",
        tech: "Next.js • Tailwind",
        year: "2023",
        color: "bg-orange-100",
        description: "A cross-platform health tracking application. Users can log workouts, monitor vital signs from connected devices, and set fitness goals. Built with a focus on accessibility and performance."
    },
    {
        id: 4,
        title: "Creative Portfolio",
        category: "Web Design",
        tech: "Webflow • GSAP",
        year: "2021",
        color: "bg-purple-100",
        description: "A highly interactive portfolio website for a graphic designer. Utilized GSAP for complex animations and Webflow for ease of content management."
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="pt-32 px-12 text-center text-xl">Project not found</div>;
    }

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-black mb-8 transition-colors">
                ← BACK TO HOME
            </Link>

            <div className={`w-full aspect-video ${project.color} rounded-sm mb-12`}></div>

            <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold font-sans tracking-widest text-gray-400 uppercase mb-12">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.tech}</span>
                <span>•</span>
                <span>{project.year}</span>
            </div>

            <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-4">About the Project</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                    {project.description}
                </p>

                {/* Dummy content for specialized sections */}
                <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                    Defining the problem space and understanding the core user needs was the primary challenge.
                    We conducted over 20 user interviews to narrow down the feature set.
                </p>

                <h3 className="text-xl font-bold mb-4">The Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                    The final solution focuses on simplicity and clarity. By removing visual clutter and focusing on key metrics,
                    we achieved a 95% user satisfaction rate during beta testing.
                </p>
            </div>
        </div>
    );
};

export default ProjectDetail;
