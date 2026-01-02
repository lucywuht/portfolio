import React from 'react';

const About = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-black">About Me</h1>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    {/* Placeholder for image */}
                    <div className="w-full aspect-[3/4] bg-gray-200 rounded-sm mb-6"></div>
                </div>
                <div className="flex-1 text-lg text-gray-600 space-y-6 leading-relaxed">
                    <p>
                        Hi! I'm Rachel. I'm a product designer and engineer based in New York City.
                        I love building things that are both beautiful and functional.
                    </p>
                    <p>
                        With a background in Computer Science and Design, I thrive in the intersection
                        where creativity meets technical constraints. I believe the best products
                        are built when design and engineering work closely together.
                    </p>
                    <p>
                        When I'm not coding or designing, you can find me exploring coffee shops,
                        taking photos, or tinkering with new AI tools.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
