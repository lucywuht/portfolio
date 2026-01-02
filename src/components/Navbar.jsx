import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-sm border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center text-sm font-medium tracking-wide">
            <Link to="/" className="flex items-center gap-2">
                <span className="font-bold tracking-wider text-black">RACHEL CHEN</span>
                <span className="text-gray-500 hidden sm:inline-block">PRODUCT DESIGNER + ENGINEER</span>
            </Link>
            <div className="flex items-center gap-6 sm:gap-8">
                <Link to="/" className="hover:text-accent transition-colors">WORK</Link>
                <Link to="/fun" className="hover:text-accent transition-colors">FUN</Link>
                <Link to="/about" className="hover:text-accent transition-colors">ABOUT</Link>
                <Link to="/resume" className="hover:text-accent transition-colors">RESUME</Link>
                <Link to="/rachellm">
                    <button className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-colors">
                        RacheLLM
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
