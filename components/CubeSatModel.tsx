import React from 'react';
import { motion } from 'framer-motion';

const CubeSatModel: React.FC = () => {
  return (
    // Applied animate-float to the container instead of the motion.div to avoid transform conflicts
    <div className="relative w-64 h-64 mx-auto perspective-1000 flex items-center justify-center animate-float">
        {/* Orbits */}
        <div className="absolute w-[120%] h-[120%] border border-neon-blue/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute w-[150%] h-[150%] border border-neon-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        <motion.div 
            className="relative w-32 h-32 transform-style-3d"
            animate={{ rotateY: 360, rotateX: 20 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            {/* Front Face */}
            <div className="absolute w-full h-full bg-slate-800 border-2 border-neon-blue opacity-90 flex flex-col justify-center items-center gap-1 shadow-[0_0_15px_rgba(0,240,255,0.3)] backface-hidden" style={{ transform: 'translateZ(64px)' }}>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <span className="text-[8px] text-neon-blue font-mono mt-2">SOLAR ARRAY +X</span>
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-slate-800 border-2 border-neon-blue opacity-90 flex flex-col justify-center items-center gap-1 backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(64px)' }}>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <span className="text-[8px] text-neon-blue font-mono mt-2">SOLAR ARRAY -X</span>
            </div>
            {/* Right Face */}
            <div className="absolute w-full h-full bg-slate-800 border-2 border-neon-blue opacity-90 flex flex-col justify-center items-center gap-1 backface-hidden" style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
                <div className="w-20 h-20 rounded-full border border-gray-500 bg-gray-900 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse"></div>
                </div>
                <span className="text-[8px] text-neon-blue font-mono mt-2">PAYLOAD</span>
            </div>
            {/* Left Face */}
            <div className="absolute w-full h-full bg-slate-800 border-2 border-neon-blue opacity-90 flex flex-col justify-center items-center gap-1 backface-hidden" style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <div className="w-24 h-6 bg-blue-900/50 border border-blue-400/30"></div>
                <span className="text-[8px] text-neon-blue font-mono mt-2">SOLAR ARRAY -Y</span>
            </div>
            {/* Top Face */}
            <div className="absolute w-full h-full bg-slate-800 border-2 border-neon-blue opacity-90 flex flex-col justify-center items-center gap-2 backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(64px)' }}>
                <div className="w-2 h-16 bg-white absolute top-0 right-4 -translate-y-8"></div>
                <span className="text-[8px] text-neon-blue font-mono">ANTENNA</span>
            </div>
            {/* Bottom Face */}
            <div className="absolute w-full h-full bg-slate-800 border-2 border-neon-blue opacity-90 flex flex-col justify-center items-center gap-1 backface-hidden" style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}>
                 <span className="text-[8px] text-neon-blue font-mono">THRUSTER</span>
            </div>
        </motion.div>
    </div>
  );
};

export default CubeSatModel;