import React, { useState, useEffect } from 'react';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import './App.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { Toaster } from './components/ui/toaster';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scrolling for all anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <div className="App relative min-h-screen bg-gradient-to-b from-[#050816] via-[#070B1D] to-[#0B1026] text-white overflow-x-hidden">
      {/* Background Elements */}
      <StarField />
      
      {/* UI Elements */}
      <ScrollProgress />
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Elements */}
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

export default App;
