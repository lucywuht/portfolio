import React from 'react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Left Column: Heading */}
                <div className="flex-1">
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-black mb-8">
                        I'm Lucy. I design and build for <span className="italic font-light">users</span>.
                    </h1>
                    <p className="text-gray-600 max-w-md text-lg leading-relaxed">
                        I bridge the gap between design and code, creating seamless digital experiences with a focus on polished interactions.
                    </p>
                </div>

                {/* Right Column: Experience */}
                <div className="flex-1 md:max-w-sm pt-4">
                    <h2 className="text-xs font-bold font-sans tracking-widest text-gray-400 mb-6 uppercase">Currently</h2>
                    <div className="space-y-6">
                        <div className="group cursor-pointer">
                            <h3 className="tex-sm font-bold text-gray-900 group-hover:text-accent transition-colors">Product Designer</h3>
                            <p className="text-gray-500 text-sm">Linear</p>
                        </div>
                        <h2 className="text-xs font-bold font-sans tracking-widest text-gray-400 mt-10 mb-6 uppercase">Previously</h2>
                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <h3 className="tex-sm font-bold text-gray-900 group-hover:text-accent transition-colors">Product Design Intern</h3>
                                <p className="text-gray-500 text-sm">Discord</p>
                            </div>
                            <div className="group cursor-pointer">
                                <h3 className="tex-sm font-bold text-gray-900 group-hover:text-accent transition-colors">KPCB Engineering Fellow</h3>
                                <p className="text-gray-500 text-sm">Kleiner Perkins</p>
                            </div>
                            <div className="group cursor-pointer">
                                <h3 className="tex-sm font-bold text-gray-900 group-hover:text-accent transition-colors">Software Engineer Intern</h3>
                                <p className="text-gray-500 text-sm">Uber</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
