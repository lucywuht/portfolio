import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-sm border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center text-sm font-medium tracking-wide">
            <div className="flex items-center gap-2">
                <span className="font-bold tracking-wider text-black">RACHEL CHEN</span>
                <span className="text-gray-500 hidden sm:inline-block">PRODUCT DESIGNER + ENGINEER</span>
            </div>
            <div className="flex items-center gap-6 sm:gap-8">
                <a href="#work" className="hover:text-accent transition-colors">WORK</a>
                <a href="#fun" className="hover:text-accent transition-colors">FUN</a>
                <a href="#about" className="hover:text-accent transition-colors">ABOUT</a>
                <a href="#resume" className="hover:text-accent transition-colors">RESUME</a>
                <button className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-colors">
                    RacheLLM
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
