'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock portfolio performance data
const portfolioData = [
  { date: 'Jan', value: 2250000, change: 0 },
  { date: 'Feb', value: 2280000, change: 30000 },
  { date: 'Mar', value: 2310000, change: 60000 },
  { date: 'Apr', value: 2290000, change: 40000 },
  { date: 'May', value: 2350000, change: 100000 },
  { date: 'Jun', value: 2385000, change: 135000 },
  { date: 'Jul', value: 2420000, change: 170000 },
  { date: 'Aug', value: 2390000, change: 140000 },
  { date: 'Sep', value: 2445000, change: 195000 },
  { date: 'Oct', value: 2475000, change: 225000 },
  { date: 'Nov', value: 2465000, change: 215000 },
  { date: 'Dec', value: 2485670, change: 235670 },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const change = portfolioData.find(d => d.date === label)?.change || 0;
    
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="text-sm font-medium">{`${label} 2024`}</p>
        <p className="text-lg font-bold text-blue-600">
          ₹{value.toLocaleString('en-IN')}
        </p>
        <p className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}₹{change.toLocaleString('en-IN')} 
          ({((change / 2250000) * 100).toFixed(2)}%)
        </p>
      </div>
    );
  }
  return null;
};

export default function PortfolioChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={portfolioData}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickFormatter={(value) => `₹${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2, fill: '#ffffff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}