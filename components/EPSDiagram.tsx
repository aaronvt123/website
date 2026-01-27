import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Cpu, Activity, Zap, Wifi } from 'lucide-react';

const EPSDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-slate-900/50 rounded-xl border border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
      
      <h3 className="text-xl font-mono text-neon-blue mb-8 text-center">EPS Architecture Diagram</h3>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative z-10">
        
        {/* Power Generation Group */}
        <div className="flex flex-col gap-4 items-center">
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-24 bg-blue-900/40 border border-blue-500 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
                <Sun className="text-yellow-400 mb-1" size={20} />
                <span className="text-xs font-bold text-blue-200">Solar Array</span>
                <span className="text-[10px] text-gray-400">Triple Junction GaAs</span>
            </motion.div>
        </div>

        {/* Arrow Right */}
        <div className="hidden md:block h-0.5 w-12 bg-gradient-to-r from-blue-500 to-neon-blue animate-pulse" />
        <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-blue-500 to-neon-blue animate-pulse" />

        {/* Central PMIC & Storage Group */}
        <div className="flex flex-col gap-6 p-4 border-2 border-dashed border-slate-600 rounded-xl bg-slate-800/30">
            <span className="text-xs text-gray-400 font-mono absolute -mt-7 bg-slate-900 px-2">EPS MODULE</span>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
                 {/* MPPT & Charger */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-24 bg-purple-900/40 border border-purple-500 rounded-lg flex flex-col items-center justify-center p-2 text-center"
                >
                    <Cpu className="text-purple-300 mb-1" size={20} />
                    <span className="text-xs font-bold text-purple-200">MPPT & Charger</span>
                    <span className="text-[10px] text-gray-400">Power Mgmt IC</span>
                </motion.div>

                <Battery className="text-green-400 rotate-90 md:rotate-0" size={24} />

                 {/* Battery Pack */}
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-24 bg-green-900/40 border border-green-500 rounded-lg flex flex-col items-center justify-center p-2 text-center"
                >
                    <Zap className="text-green-300 mb-1" size={20} />
                    <span className="text-xs font-bold text-green-200">Battery Pack</span>
                    <span className="text-[10px] text-gray-400">2S Li-Ion</span>
                </motion.div>
            </div>
            
            {/* Regulators */}
            <div className="flex justify-between gap-2">
                 <motion.div className="flex-1 p-2 bg-slate-700/50 border border-slate-600 rounded text-center">
                    <span className="block text-xs font-mono text-neon-blue">5V REG</span>
                 </motion.div>
                 <motion.div className="flex-1 p-2 bg-slate-700/50 border border-slate-600 rounded text-center">
                    <span className="block text-xs font-mono text-neon-blue">3.3V REG</span>
                 </motion.div>
            </div>
        </div>

        {/* Arrow Right */}
        <div className="hidden md:block h-0.5 w-12 bg-gradient-to-r from-neon-blue to-white animate-pulse" />
        <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-neon-blue to-white animate-pulse" />

        {/* Loads */}
        <div className="grid grid-cols-1 gap-3">
             <div className="p-2 border border-white/20 rounded bg-white/5 flex items-center gap-2">
                <Wifi size={14} className="text-pink-400" />
                <span className="text-[10px] font-mono">PAYLOAD</span>
             </div>
        </div>

      </div>
    </div>
  );
};

export default EPSDiagram;