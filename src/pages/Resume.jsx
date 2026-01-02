import React from 'react';

const Resume = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-black">Resume</h1>
            <p className="text-gray-600 mb-12">
                My resume is available for download below. It details my experience in product design,
                frontend development, and prototyping.
            </p>

            <div className="border border-gray-200 p-12 bg-white shadow-sm mb-12 text-left">
                <h2 className="text-2xl font-serif mb-2">Rachel Chen</h2>
                <p className="text-sm text-gray-500 mb-8 lowercase">product designer + engineer</p>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Experience</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between font-bold text-sm"><span>Linear</span><span>2023 - Present</span></div>
                                <div className="text-sm text-gray-600">Product Designer</div>
                            </div>
                            <div>
                                <div className="flex justify-between font-bold text-sm"><span>Discord</span><span>2022</span></div>
                                <div className="text-sm text-gray-600">Product Design Intern</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">
                Download PDF
            </button>
        </div>
    );
};

export default Resume;
