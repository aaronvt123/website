import React from 'react';
import { motion } from 'framer-motion';

// A single face of the CubeSat
const CubeFace = ({ type = 'solar', content }: { type?: 'solar' | 'tech' | 'lens', content?: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-zinc-800 p-2 relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"> 
      {/* Aluminum Rails/Frame effect - Darker anodized aluminum look (Zinc-700 instead of Gray-300) */}
      <div className="absolute inset-0 border-[6px] border-zinc-700 z-10 pointer-events-none shadow-[inset_0_0_2px_rgba(0,0,0,0.8)]"></div>
      
      {/* Screws on corners (Rail standoffs) - Darkened */}
      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-zinc-600 rounded-full z-20 shadow-inner border border-zinc-800"></div>
      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-zinc-600 rounded-full z-20 shadow-inner border border-zinc-800"></div>
      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-zinc-600 rounded-full z-20 shadow-inner border border-zinc-800"></div>
      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-zinc-600 rounded-full z-20 shadow-inner border border-zinc-800"></div>

      {/* Inner Content Area */}
      <div className="w-full h-full bg-black overflow-hidden relative border border-zinc-900">
        
        {/* Body-Mounted Solar Panels */}
        {type === 'solar' && (
           <div className="w-full h-full flex flex-col gap-0.5 p-0.5 bg-zinc-900">
              {/* Top Cell */}
              <div className="flex-1 bg-gradient-to-br from-blue-950 via-zinc-900 to-black relative overflow-hidden group border border-white/5">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent"></div>
              </div>
              {/* Bottom Cell */}
              <div className="flex-1 bg-gradient-to-br from-blue-950 via-zinc-900 to-black relative overflow-hidden group border border-white/5">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
              </div>
           </div>
        )}
        
        {/* Top Face: Antennas & Sensors */}
        {type === 'tech' && (
           <div className="w-full h-full bg-zinc-900 p-3 grid grid-cols-2 gap-2 relative">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-50"></div>
               {/* GPS Patch Antenna - Darker */}
               <div className="bg-amber-900/30 border border-amber-900/40 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-amber-800/60 rounded-sm"></div>
               </div>
               {/* Sun Sensor */}
               <div className="bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                   <div className="w-2 h-2 bg-black border border-zinc-600 rounded-full"></div>
               </div>
               {/* Access Port */}
               <div className="col-span-2 bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-2">
                   <div className="w-1 h-3 bg-zinc-600"></div>
                   <div className="w-1 h-3 bg-zinc-600"></div>
                   <div className="w-1 h-3 bg-zinc-600"></div>
               </div>
           </div>
        )}

        {/* Bottom Face: Camera Lens / Payload */}
        {type === 'lens' && (
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-zinc-800 to-black"></div>
                <div className="w-24 h-24 rounded-full bg-black border-[6px] border-zinc-800 flex items-center justify-center relative shadow-xl">
                    {/* Aperture */}
                    <div className="w-16 h-16 rounded-full bg-black border border-zinc-700 flex items-center justify-center overflow-hidden">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-950 to-blue-950 opacity-60 shadow-[0_0_15px_rgba(59,130,246,0.2)]"></div>
                         <div className="absolute top-4 right-6 w-2 h-1 bg-white/20 rotate-45 blur-[1px]"></div>
                    </div>
                </div>
            </div>
        )}
        
        {content}
      </div>
    </div>
  );
};

const CubeSatModel: React.FC = () => {
  return (
    <div className="relative w-96 h-96 mx-auto perspective-1000 flex items-center justify-center animate-float">
        {/* Decorative Orbits - Made even more subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neon-blue/5 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[90%] border border-neon-purple/5 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>
        
        <motion.div 
            className="relative w-48 h-48 transform-style-3d"
            initial={{ rotateX: -25, rotateY: 25 }}
            animate={{ rotateY: 385, rotateX: -25 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
             {/* Antennas (Dipole) - Darker */}
             <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-zinc-500 origin-bottom opacity-70" style={{ transform: 'translateX(-50%) translateY(-100%) rotateX(90deg) translateZ(96px)' }}></div>
             <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-zinc-500 origin-bottom opacity-70" style={{ transform: 'translateX(-50%) translateY(-100%) rotateX(90deg) rotateZ(90deg) translateZ(96px)' }}></div>

             {/* Cube Faces */}
             {/* Front */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'translateZ(96px)' }}>
                <CubeFace type="solar" />
            </div>
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(96px)' }}>
                <CubeFace type="solar" />
            </div>
            {/* Right */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(90deg) translateZ(96px)' }}>
                 <CubeFace type="solar" />
            </div>
            {/* Left */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}>
                 <CubeFace type="solar" />
            </div>
            {/* Top */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(96px)' }}>
                <CubeFace type="tech" />
            </div>
            {/* Bottom */}
            <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}>
                <CubeFace type="lens" />
            </div>
        </motion.div>
    </div>
  );
};

export default CubeSatModel;