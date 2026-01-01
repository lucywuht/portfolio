import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-20 py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs font-bold font-sans tracking-widest text-gray-400 uppercase">
                Designed + Coded with <span className="text-red-500">♥</span> by Rachel
            </div>
            <div className="flex gap-6 text-sm font-medium text-gray-900">
                <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-accent transition-colors">Email</a>
                <a href="#" className="hover:text-accent transition-colors">X / Twitter</a>
                <a href="#" className="hover:text-accent transition-colors">Github</a>
            </div>
        </footer>
    );
};

export default Footer;
