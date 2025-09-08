'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency, formatPercentage, getChangeColor } from '@/lib/formatters';
import { mockPortfolio, mockMarketData, mockUser } from '@/lib/mock-data';
import PortfolioChart from '@/components/dashboard/PortfolioChart';
import AssetAllocation from '@/components/dashboard/AssetAllocation';
import MarketOverview from '@/components/dashboard/MarketOverview';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import QuickActions from '@/components/dashboard/QuickActions';

export default function Dashboard() {
  const portfolio = mockPortfolio;
  const marketData = mockMarketData;
  
  // Calculate day's change (mock calculation)
  const dayChange = 12450;
  const dayChangePercent = 0.52;

  return (
    <Layout 
      title="Dashboard" 
      subtitle={`Welcome back, ${mockUser.name}! Here's your investment overview.`}
    >
      <div className="space-y-6">
        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Portfolio Value
              </CardTitle>
              <span className="text-2xl">💰</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(portfolio.totalValue)}
              </div>
              <div className={`text-sm ${getChangeColor(dayChange)}`}>
                {dayChange >= 0 ? '+' : ''}{formatCurrency(dayChange)} ({formatPercentage(dayChangePercent)}) today
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Invested
              </CardTitle>
              <span className="text-2xl">📊</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(portfolio.totalCost)}
              </div>
              <div className="text-sm text-gray-600">
                Cost basis of investments
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Returns
              </CardTitle>
              <span className="text-2xl">📈</span>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getChangeColor(portfolio.totalGainLoss)}`}>
                {portfolio.totalGainLoss >= 0 ? '+' : ''}{formatCurrency(portfolio.totalGainLoss)}
              </div>
              <div className={`text-sm ${getChangeColor(portfolio.totalGainLoss)}`}>
                {formatPercentage(portfolio.totalGainLossPercent)} return
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Holdings
              </CardTitle>
              <span className="text-2xl">🏢</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {portfolio.holdings.length}
              </div>
              <div className="text-sm text-gray-600">
                Active positions
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <PortfolioChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <AssetAllocation holdings={portfolio.holdings} />
            </CardContent>
          </Card>
        </div>

        {/* Market Overview and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <MarketOverview marketData={marketData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <QuickActions />
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}