'use client';

import React from 'react';
import { MarketData } from '@/types';
import { formatCurrency, formatPercentage, getChangeColor } from '@/lib/formatters';

interface MarketOverviewProps {
  marketData: MarketData;
}

export default function MarketOverview({ marketData }: MarketOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Market Indices */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Market Indices</h3>
        <div className="grid grid-cols-2 gap-4">
          {marketData.indices.map((index) => (
            <div key={index.symbol} className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-medium text-gray-900">{index.name}</div>
              <div className="text-lg font-bold text-gray-900">
                {formatCurrency(index.value, 'USD').replace('$', '')}
              </div>
              <div className={`text-sm ${getChangeColor(index.change)}`}>
                {index.change >= 0 ? '+' : ''}{index.change} 
                ({formatPercentage(index.changePercent)})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Movers */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Gainers */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Top Gainers</h3>
          <div className="space-y-2">
            {marketData.topGainers.slice(0, 3).map((stock) => (
              <div key={stock.symbol} className="flex justify-between items-center p-2 bg-green-50 rounded">
                <div>
                  <div className="text-sm font-medium">{stock.symbol}</div>
                  <div className="text-xs text-gray-600">{formatCurrency(stock.currentPrice)}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">
                    +{formatCurrency(stock.change)}
                  </div>
                  <div className="text-xs text-green-600">
                    {formatPercentage(stock.changePercent)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Losers */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Top Losers</h3>
          <div className="space-y-2">
            {marketData.topLosers.slice(0, 3).map((stock) => (
              <div key={stock.symbol} className="flex justify-between items-center p-2 bg-red-50 rounded">
                <div>
                  <div className="text-sm font-medium">{stock.symbol}</div>
                  <div className="text-xs text-gray-600">{formatCurrency(stock.currentPrice)}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-red-600">
                    {formatCurrency(stock.change)}
                  </div>
                  <div className="text-xs text-red-600">
                    {formatPercentage(stock.changePercent)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Performance */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Sector Performance</h3>
        <div className="space-y-2">
          {marketData.sectors.slice(0, 4).map((sector) => (
            <div key={sector.name} className="flex justify-between items-center p-2 rounded hover:bg-gray-50">
              <span className="text-sm text-gray-900">{sector.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">{sector.stocks} stocks</span>
                <span className={`text-sm font-medium ${getChangeColor(sector.change)}`}>
                  {formatPercentage(sector.changePercent)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}