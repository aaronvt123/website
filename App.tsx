import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Cpu, Activity, CheckCircle, ArrowRight, Satellite, Mail, User } from 'lucide-react';
import StarBackground from './components/StarBackground';
import Navigation from './components/Navigation';
import CubeSatModel from './components/CubeSatModel';
import EPSDiagram from './components/EPSDiagram';
import PowerCharts from './components/PowerCharts';
import { NavItem } from './types';

const SECTIONS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'intro', label: 'About' },
  { id: 'theory', label: 'EPS Theory' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'budget', label: 'Power Budget' },
  { id: 'contact', label: 'Contact Us' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-200 font-sans">
      <StarBackground />
      <Navigation sections={SECTIONS} activeSection={activeSection} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* 1. Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight">
                CubeSat EPS <br/>
                <span className="text-neon-blue">Project</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Our project focuses on the development of an Electrical Power System (EPS) of a CubeSat which is responsible for the power generation, storage, and distribution in real satellites. This model will serve as a realistic educational model of a CubeSat’s power subsystem, showcasing the complete energy flow and power management principles used in small satellite missions.
              </p>
              
              <div className="mt-8">
                <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Our Team</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass-panel p-4 rounded-lg border-t-2 border-neon-blue text-center">
                    <User className="mx-auto mb-2 text-neon-blue" size={20}/>
                    <p className="text-sm font-bold text-white">Aaron Vinod Thomas</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border-t-2 border-neon-purple text-center">
                    <User className="mx-auto mb-2 text-neon-purple" size={20}/>
                    <p className="text-sm font-bold text-white">Ali Fawzi Mohamed</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border-t-2 border-neon-green text-center">
                    <User className="mx-auto mb-2 text-neon-green" size={20}/>
                    <p className="text-sm font-bold text-white">Gleb Matcegora</p>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 px-8 py-3 bg-neon-blue text-space-900 font-bold rounded hover:bg-white transition-colors flex items-center gap-2"
              >
                Explore System <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
               <CubeSatModel />
               <div className="absolute inset-0 bg-neon-blue/5 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          </div>
        </section>

        {/* 2. Introduction */}
        <section id="intro" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="max-w-4xl mx-auto text-center space-y-12"
          >
            <h2 className="text-4xl font-bold font-mono text-white">About The CubeSat</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-8 rounded-xl hover:border-neon-blue transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto text-neon-blue">
                  <Activity />
                </div>
                <h3 className="text-xl font-bold mb-3">What is it?</h3>
                <p className="text-sm text-gray-400">A CubeSat is a nanosatellite that is an affordable way to space research. they are primarily used for research and Earth observation missions.</p>
              </div>
              
              <div className="glass-panel p-8 rounded-xl hover:border-neon-purple transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto text-neon-purple">
                  <CheckCircle />
                </div>
                <h3 className="text-xl font-bold mb-3">Importance</h3>
                <p className="text-sm text-gray-400">they are of low cost and their small size allows for faster development which enables educational institutions and private companies to launch them for missions.</p>
              </div>

              <div className="glass-panel p-8 rounded-xl hover:border-neon-green transition-colors duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto text-neon-green">
                  <Zap />
                </div>
                <h3 className="text-xl font-bold mb-3">EPS Role</h3>
                <p className="text-sm text-gray-400">It's the Heart of the sattelite which is responsible for the generation, storage, regulation, and distribution of electrical energy to all the other components.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. EPS Theory */}
        <section id="theory" className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-mono text-white mb-16 text-center"><span className="text-neon-blue">02.</span> What is the EPS?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1">
                     <div className="w-10 h-10 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-400"><Zap size={20}/></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Power Generation</h3>
                    <p className="text-gray-400 mt-2">Converting solar energy into electrical power using Photovoltaic (PV) cells on the satellite's exterior faces.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                     <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center text-green-400"><Battery size={20}/></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Energy Storage</h3>
                    <p className="text-gray-400 mt-2">Storing energy in Lithium-Ion batteries to power the satellite when power can't be generated through solar energy.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                     <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><Cpu size={20}/></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Power Regulation</h3>
                    <p className="text-gray-400 mt-2">Using DC-DC (AP63203WU-7)converters to regulate voltage to 5 V and 3.3 V for different subsystems.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                     <div className="w-10 h-10 rounded bg-red-500/20 flex items-center justify-center text-red-400"><Activity size={20}/></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Distribution & Protection</h3>
                    <p className="text-gray-400 mt-2">Routing power safely with over-current protection (OCP) and monitoring voltage/current telemetry.</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-2 rounded-xl">
                 <img src="https://picsum.photos/600/400?grayscale&blur=2" alt="EPS Conceptual Diagram" className="rounded-lg w-full h-auto opacity-50 mix-blend-overlay hidden" /> 
                 <div className="bg-space-800 p-8 rounded-lg h-full flex flex-col justify-center items-center text-center border border-slate-700">
                    <p className="text-sm font-mono text-neon-blue mb-4">BLOCK DIAGRAM CONCEPT</p>
                    <div className="flex flex-col gap-2 w-full max-w-xs">
                        <div className="border border-yellow-500/50 p-3 rounded bg-yellow-500/10 text-yellow-200">Solar Panels</div>
                        <div className="h-4 w-0.5 bg-gray-500 mx-auto"></div>
                        <div className="border border-white/50 p-4 rounded bg-white/5 text-white font-bold">EPS CONTROL UNIT</div>
                        <div className="h-4 w-full flex justify-between">
                            <div className="w-0.5 h-full bg-gray-500 ml-8"></div>
                            <div className="w-0.5 h-full bg-gray-500 mr-8"></div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div className="border border-green-500/50 p-3 rounded bg-green-500/10 text-green-200 w-full text-xs">Battery</div>
                            <div className="border border-red-500/50 p-3 rounded bg-red-500/10 text-red-200 w-full text-xs">Loads</div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Architecture / Design */}
        <section id="architecture" className="min-h-screen py-20 bg-space-800/30">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-mono text-white mb-4"><span className="text-neon-green">03.</span> System Architecture</h2>
                <p className="text-gray-400">Detailed component selection and topology.</p>
             </div>

             <div className="mb-16">
                 <EPSDiagram />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div whileHover={{y:-5}} className="glass-panel p-6 rounded-lg border-t-2 border-yellow-400 text-center">
                    <h4 className="font-bold text-lg mb-2">Solar Cells</h4>
                </motion.div>

                <motion.div whileHover={{y:-5}} className="glass-panel p-6 rounded-lg border-t-2 border-green-400 text-center">
                    <h4 className="font-bold text-lg mb-2">Battery</h4>
                </motion.div>

                <motion.div whileHover={{y:-5}} className="glass-panel p-6 rounded-lg border-t-2 border-blue-400 text-center">
                    <h4 className="font-bold text-lg mb-2">Regulation</h4>
                </motion.div>

                <motion.div whileHover={{y:-5}} className="glass-panel p-6 rounded-lg border-t-2 border-purple-400 text-center">
                    <h4 className="font-bold text-lg mb-2">Control</h4>
                </motion.div>
             </div>
          </div>
        </section>

        {/* 5. Power Budget */}
        <section id="budget" className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-mono text-white mb-4">Power Budget Analysis</h2>
             </div>
             
             <PowerCharts />
          </div>
        </section>

        {/* 6. Contact Us */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 text-center">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="max-w-4xl mx-auto"
            >
                <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Mail size={40} className="text-neon-blue" />
                </div>
                
                <h2 className="text-5xl font-bold font-mono text-white mb-8">Contact Us</h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Have questions about our project? Feel free to reach out to the team.
                </p>

                <div className="glass-panel p-8 rounded-xl max-w-lg mx-auto">
                    <form className="space-y-4 text-left">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Name</label>
                            <input type="text" className="w-full bg-space-900 border border-slate-700 rounded p-2 text-white focus:border-neon-blue outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <input type="email" className="w-full bg-space-900 border border-slate-700 rounded p-2 text-white focus:border-neon-blue outline-none" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Message</label>
                            <textarea className="w-full bg-space-900 border border-slate-700 rounded p-2 text-white focus:border-neon-blue outline-none h-32" placeholder="Your message..."></textarea>
                        </div>
                        <button type="button" className="w-full bg-neon-blue text-space-900 font-bold py-2 rounded hover:bg-white transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                <footer className="mt-20 text-gray-500 text-sm">
                    <p>© 2025 CubeSat EPS Project.</p>
                </footer>
            </motion.div>
        </section>

      </main>
    </div>
  );
};

export default App;