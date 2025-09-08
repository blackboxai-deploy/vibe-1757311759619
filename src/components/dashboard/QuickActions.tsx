'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const quickActions = [
  {
    title: 'Buy Stocks',
    description: 'Place a buy order',
    icon: '📈',
    href: '/trading',
    color: 'bg-green-50 text-green-700 hover:bg-green-100'
  },
  {
    title: 'Sell Holdings',
    description: 'Sell your positions',
    icon: '📉',
    href: '/portfolio',
    color: 'bg-red-50 text-red-700 hover:bg-red-100'
  },
  {
    title: 'Start SIP',
    description: 'Setup systematic investment',
    icon: '🔄',
    href: '/planning',
    color: 'bg-blue-50 text-blue-700 hover:bg-blue-100'
  },
  {
    title: 'View Reports',
    description: 'Download statements',
    icon: '📊',
    href: '/transactions',
    color: 'bg-purple-50 text-purple-700 hover:bg-purple-100'
  },
  {
    title: 'Add Funds',
    description: 'Deposit money',
    icon: '💰',
    href: '/settings',
    color: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
  },
  {
    title: 'Research',
    description: 'Market analysis',
    icon: '🔍',
    href: '/market',
    color: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
  }
];

export default function QuickActions() {
  return (
    <div className="space-y-4">
      {quickActions.map((action) => (
        <Link key={action.title} href={action.href}>
          <Button
            variant="ghost"
            className={`w-full justify-start p-4 h-auto ${action.color}`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{action.icon}</span>
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm opacity-70">{action.description}</div>
              </div>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
}