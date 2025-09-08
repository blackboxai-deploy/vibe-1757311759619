'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Holding } from '@/types';
import { formatCurrency, formatPercentage } from '@/lib/formatters';

interface AssetAllocationProps {
  holdings: Holding[];
}

// Colors for the pie chart
const COLORS = [
  '#2563eb', // blue-600
  '#dc2626', // red-600
  '#16a34a', // green-600
  '#ca8a04', // yellow-600
  '#9333ea', // violet-600
  '#c2410c', // orange-600
  '#0891b2', // cyan-600
  '#be185d', // pink-600
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    payload: {
      name: string;
      value: number;
      percentage: number;
    };
  }>;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="font-medium">{data.name}</p>
        <p className="text-blue-600">{formatCurrency(data.value)}</p>
        <p className="text-gray-600">{formatPercentage(data.percentage)}</p>
      </div>
    );
  }
  return null;
};

export default function AssetAllocation({ holdings }: AssetAllocationProps) {
  // Calculate allocation data
  const totalValue = holdings.reduce((sum, holding) => sum + holding.totalValue, 0);
  
  const allocationData = holdings.map((holding, index) => ({
    name: holding.stockSymbol,
    value: holding.totalValue,
    percentage: (holding.totalValue / totalValue) * 100,
    color: COLORS[index % COLORS.length]
  }));

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={allocationData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name} ${percentage.toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {allocationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {allocationData.map((entry, index) => (
          <div key={entry.name} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm text-gray-700">
              {entry.name}: {formatPercentage(entry.percentage)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}