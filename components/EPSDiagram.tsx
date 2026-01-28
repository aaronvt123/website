import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Cpu, Zap, Wifi, Server, Eye, ArrowRight } from 'lucide-react';

const Box = ({ label, subtext, icon: Icon, color = "blue" }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`w-40 min-h-[7rem] bg-${color}-900/40 border border-${color}-500/50 rounded-lg flex flex-col items-center justify-center p-3 text-center shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-sm z-10`}
  >
    {Icon && <Icon className={`text-${color}-400 mb-2`} size={24} />}
    <span className={`text-sm font-bold text-${color}-100`}>{label}</span>
    {subtext && <span className="text-[11px] text-gray-400 mt-1 leading-tight">{subtext}</span>}
  </motion.div>
);

const Arrow = () => (
    <div className="hidden md:flex items-center mx-2 text-slate-600">
        <ArrowRight />
    </div>
);

const MobileArrow = () => (
    <div className="md:hidden text-slate-600 py-2">
        <ArrowRight className="rotate-90" />
    </div>
);

const EPSDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-slate-900/50 rounded-xl border border-slate-700 overflow-x-auto">
      <h3 className="text-xl font-mono text-neon-blue mb-8 text-center sticky left-0">EPS Architecture Diagram</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-center min-w-max md:min-w-0 gap-4 md:gap-0">
        
        {/* Stage 1: Generation & Storage */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
             <Box label="Solar panels" icon={Sun} color="yellow" />
             <Arrow /><MobileArrow />
             <Box label="MPPT" subtext="BQ24650" icon={Cpu} color="purple" />
             <Arrow /><MobileArrow />
             <Box label="Battery" subtext="2S Li-ion battery pack" icon={Battery} color="green" />
        </div>

        {/* Connector to Split (Desktop) */}
        <div className="hidden md:flex items-center w-16 h-full relative self-stretch">
            {/* Horizontal line from Battery */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-600"></div>
            {/* Vertical Bracket Line */}
            <div className="absolute left-8 top-[25%] bottom-[25%] w-0.5 bg-slate-600"></div>
             {/* Top Branch Connector */}
             <div className="absolute left-8 top-[25%] w-8 h-0.5 bg-slate-600"></div>
             {/* Bottom Branch Connector */}
             <div className="absolute left-8 bottom-[25%] w-8 h-0.5 bg-slate-600"></div>
        </div>
        
        <MobileArrow />

        {/* Stage 2: Branches */}
        <div className="flex flex-col gap-8 md:gap-12">
            {/* Top Branch */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                 <Box label="DC-DC" subtext="converters (3.3V and 5V)" icon={Zap} color="blue" />
                 <Arrow /><MobileArrow />
                 <Box label="Load" icon={Wifi} color="pink" />
            </div>

            {/* Bottom Branch */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                 <Box label="sensors" subtext="INA226" icon={Eye} color="cyan" />
                 <Arrow /><MobileArrow />
                 <Box label="MCU" subtext="STM32G474RE" icon={Server} color="indigo" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default EPSDiagram;