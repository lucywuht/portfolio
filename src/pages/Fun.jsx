import React from 'react';

const Fun = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-12 text-black">Fun & Experiments</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-gray-100 p-8 flex flex-col justify-end hover:bg-gray-200 transition-colors cursor-pointer">
                        <span className="font-serif text-xl">Experiment #{item}</span>
                        <span className="text-xs font-sans text-gray-500 mt-2 uppercase tracking-widest">Generative Art</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fun;
