import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fun from './pages/Fun';
import Resume from './pages/Resume';
import RacheLLM from './pages/RacheLLM';

function App() {
    return (
        <Router basename="/portfolio"> {/* Important for GitHub Pages deployment */}
            <div className="min-h-screen bg-background flex flex-col justify-between">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/fun" element={<Fun />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/rachellm" element={<RacheLLM />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
