import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PowerData, ComparisonData } from '../types';

const POWER_DISTRIBUTION: PowerData[] = [
  { subsystem: 'OBC', consumption: 0, color: '#EF4444' },
  { subsystem: 'ADCS', consumption: 0, color: '#14B8A6' },
  { subsystem: 'Comms (Tx)', consumption: 0, color: '#F97316' },
  { subsystem: 'Payload', consumption: 0, color: '#EC4899' },
  { subsystem: 'Heater', consumption: 0, color: '#EAB308' },
];

const COMPARISON: ComparisonData[] = [
  { name: 'Orbit Average', power: 0 },
  { name: 'Peak Load', power: 0 },
  { name: 'Max Generation', power: 0 },
];

const PowerCharts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Distribution Chart */}
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-lg font-mono text-neon-blue mb-4 text-center">Power Consumption by Subsystem</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={POWER_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="consumption"
                >
                  {POWER_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#151932', border: '1px solid #1F294F', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => [`${value} W`, 'Power']}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Generation vs Consumption */}
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-lg font-mono text-neon-blue mb-4 text-center">Generation vs. Load Analysis</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPARISON} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" unit="W" />
                <YAxis dataKey="name" type="category" stroke="#fff" width={100} style={{ fontSize: '12px', fontFamily: 'monospace' }} />
                <Tooltip 
                   cursor={{fill: 'rgba(255,255,255,0.05)'}}
                   contentStyle={{ backgroundColor: '#151932', border: '1px solid #1F294F', borderRadius: '8px' }}
                   itemStyle={{ color: '#00F0FF' }}
                />
                <Bar dataKey="power" fill="#00F0FF" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Power Budget Table */}
      <div className="glass-panel p-6 rounded-xl overflow-hidden">
        <h3 className="text-lg font-mono text-neon-blue mb-4 text-center">Detailed Power Budget Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-300">
            <thead className="text-xs text-gray-400 uppercase bg-white/5 font-mono">
              <tr>
                <th scope="col" className="px-6 py-3">Subsystem</th>
                <th scope="col" className="px-6 py-3 text-right">Power (W)</th>
                <th scope="col" className="px-6 py-3 text-right">Duty Cycle</th>
                <th scope="col" className="px-6 py-3 text-right">Avg Consumption (Wh/Orbit)</th>
              </tr>
            </thead>
            <tbody>
              {POWER_DISTRIBUTION.map((item, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.subsystem}
                  </td>
                  <td className="px-6 py-4 text-right">{item.consumption.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">0%</td>
                  <td className="px-6 py-4 text-right">{(item.consumption * 1.5).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-white/10 font-bold text-white border-t-2 border-neon-blue">
                <td className="px-6 py-4">TOTAL PEAK LOAD</td>
                <td className="px-6 py-4 text-right">0.00</td>
                <td className="px-6 py-4 text-right">-</td>
                <td className="px-6 py-4 text-right">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PowerCharts;