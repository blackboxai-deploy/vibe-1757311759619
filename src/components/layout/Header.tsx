'use client';

import React from 'react';
import { formatCurrency } from '@/lib/formatters';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const currentTime = new Date().toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const marketStatus = {
    isOpen: true, // Mock market status
    nextAction: 'Market closes at 3:30 PM',
    indices: {
      sensex: { value: 81520.45, change: 234.75, changePercent: 0.29 },
      nifty: { value: 24890.30, change: 85.20, changePercent: 0.34 }
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Market Info & Time */}
        <div className="flex items-center space-x-6">
          {/* Market Indices */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-gray-500">SENSEX</div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-gray-900">
                  {formatCurrency(marketStatus.indices.sensex.value, 'USD').replace('$', '')}
                </span>
                <span className={`text-xs ${marketStatus.indices.sensex.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {marketStatus.indices.sensex.change >= 0 ? '+' : ''}{marketStatus.indices.sensex.change}
                  ({marketStatus.indices.sensex.changePercent}%)
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">NIFTY</div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-gray-900">
                  {formatCurrency(marketStatus.indices.nifty.value, 'USD').replace('$', '')}
                </span>
                <span className={`text-xs ${marketStatus.indices.nifty.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {marketStatus.indices.nifty.change >= 0 ? '+' : ''}{marketStatus.indices.nifty.change}
                  ({marketStatus.indices.nifty.changePercent}%)
                </span>
              </div>
            </div>
          </div>

          {/* Market Status */}
          <div className="flex items-center space-x-2">
            <div className={`h-3 w-3 rounded-full ${marketStatus.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <div className="text-right">
              <div className="text-xs text-gray-500">
                {marketStatus.isOpen ? 'Market Open' : 'Market Closed'}
              </div>
              <div className="text-xs text-gray-600">
                {marketStatus.nextAction}
              </div>
            </div>
          </div>

          {/* Current Time */}
          <div className="text-right border-l border-gray-200 pl-6">
            <div className="text-xs text-gray-500">Current Time</div>
            <div className="text-sm font-medium text-gray-900">
              {currentTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}