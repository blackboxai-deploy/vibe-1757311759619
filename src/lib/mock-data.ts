// Mock financial data for Nivesh OS

import { 
  Stock, Portfolio, Transaction, MarketIndex, SectorPerformance, 
  InvestmentGoal, User, NewsArticle, Watchlist, SIPPlan, MarketData 
} from '@/types';

// Mock stock data
export const mockStocks: Stock[] = [
  {
    id: '1',
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd',
    currentPrice: 2456.75,
    previousClose: 2440.30,
    change: 16.45,
    changePercent: 0.67,
    volume: 5420000,
    marketCap: 16600000000000,
    sector: 'Oil & Gas',
    pe: 28.5,
    dividend: 1.2
  },
  {
    id: '2',
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    currentPrice: 3845.20,
    previousClose: 3890.75,
    change: -45.55,
    changePercent: -1.17,
    volume: 1250000,
    marketCap: 14200000000000,
    sector: 'IT Services',
    pe: 25.8,
    dividend: 2.1
  },
  {
    id: '3',
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Ltd',
    currentPrice: 1620.85,
    previousClose: 1605.40,
    change: 15.45,
    changePercent: 0.96,
    volume: 3150000,
    marketCap: 12400000000000,
    sector: 'Banking',
    pe: 18.2,
    dividend: 1.8
  },
  {
    id: '4',
    symbol: 'INFY',
    name: 'Infosys Ltd',
    currentPrice: 1785.30,
    previousClose: 1798.65,
    change: -13.35,
    changePercent: -0.74,
    volume: 2890000,
    marketCap: 7350000000000,
    sector: 'IT Services',
    pe: 22.4,
    dividend: 2.5
  },
  {
    id: '5',
    symbol: 'ITC',
    name: 'ITC Ltd',
    currentPrice: 472.95,
    previousClose: 468.20,
    change: 4.75,
    changePercent: 1.01,
    volume: 8940000,
    marketCap: 5890000000000,
    sector: 'Consumer Goods',
    pe: 24.7,
    dividend: 5.8
  },
  {
    id: '6',
    symbol: 'HINDUNILVR',
    name: 'Hindustan Unilever Ltd',
    currentPrice: 2785.40,
    previousClose: 2760.15,
    change: 25.25,
    changePercent: 0.91,
    volume: 650000,
    marketCap: 6540000000000,
    sector: 'Consumer Goods',
    pe: 58.2,
    dividend: 1.4
  },
  {
    id: '7',
    symbol: 'BAJFINANCE',
    name: 'Bajaj Finance Ltd',
    currentPrice: 6890.75,
    previousClose: 6925.30,
    change: -34.55,
    changePercent: -0.50,
    volume: 425000,
    marketCap: 4250000000000,
    sector: 'Financial Services',
    pe: 31.8,
    dividend: 0.8
  },
  {
    id: '8',
    symbol: 'ASIANPAINT',
    name: 'Asian Paints Ltd',
    currentPrice: 2945.60,
    previousClose: 2980.85,
    change: -35.25,
    changePercent: -1.18,
    volume: 380000,
    marketCap: 2820000000000,
    sector: 'Consumer Goods',
    pe: 45.6,
    dividend: 1.6
  }
];

// Mock market indices
export const mockIndices: MarketIndex[] = [
  {
    name: 'SENSEX',
    symbol: 'BSE:SENSEX',
    value: 81520.45,
    change: 234.75,
    changePercent: 0.29
  },
  {
    name: 'NIFTY 50',
    symbol: 'NSE:NIFTY',
    value: 24890.30,
    change: 85.20,
    changePercent: 0.34
  },
  {
    name: 'NIFTY BANK',
    symbol: 'NSE:BANKNIFTY',
    value: 52340.75,
    change: -125.40,
    changePercent: -0.24
  },
  {
    name: 'NIFTY IT',
    symbol: 'NSE:CNXIT',
    value: 41250.85,
    change: -89.65,
    changePercent: -0.22
  }
];

// Mock sector performance
export const mockSectorPerformance: SectorPerformance[] = [
  { name: 'IT Services', change: 45.30, changePercent: 0.35, stocks: 125 },
  { name: 'Banking', change: -28.75, changePercent: -0.18, stocks: 89 },
  { name: 'Oil & Gas', change: 67.20, changePercent: 0.42, stocks: 45 },
  { name: 'Consumer Goods', change: 12.85, changePercent: 0.08, stocks: 156 },
  { name: 'Pharmaceuticals', change: 35.60, changePercent: 0.28, stocks: 78 },
  { name: 'Automobiles', change: -15.40, changePercent: -0.12, stocks: 92 },
  { name: 'Financial Services', change: 22.95, changePercent: 0.15, stocks: 234 },
  { name: 'Telecommunications', change: -8.75, changePercent: -0.05, stocks: 34 }
];

// Mock user data
export const mockUser: User = {
  id: '1',
  name: 'Rajesh Kumar',
  email: 'rajesh.kumar@email.com',
  phone: '+91 98765 43210',
  riskTolerance: 'MODERATE',
  investmentExperience: 'INTERMEDIATE',
  annualIncome: 1200000,
  age: 32,
  preferences: {
    currency: 'INR',
    notifications: true,
    darkMode: false,
    language: 'en'
  }
};

// Mock portfolio data
export const mockPortfolio: Portfolio = {
  id: '1',
  name: 'Main Portfolio',
  totalValue: 2485670,
  totalCost: 2250000,
  totalGainLoss: 235670,
  totalGainLossPercent: 10.47,
  lastUpdated: new Date().toISOString(),
  holdings: [
    {
      id: '1',
      stockSymbol: 'RELIANCE',
      stockName: 'Reliance Industries Ltd',
      quantity: 50,
      averagePrice: 2380.50,
      currentPrice: 2456.75,
      totalValue: 122837.50,
      gainLoss: 3812.50,
      gainLossPercent: 3.20,
      allocation: 4.94
    },
    {
      id: '2',
      stockSymbol: 'TCS',
      stockName: 'Tata Consultancy Services',
      quantity: 100,
      averagePrice: 3750.25,
      currentPrice: 3845.20,
      totalValue: 384520,
      gainLoss: 9495,
      gainLossPercent: 2.53,
      allocation: 15.47
    },
    {
      id: '3',
      stockSymbol: 'HDFCBANK',
      stockName: 'HDFC Bank Ltd',
      quantity: 200,
      averagePrice: 1580.75,
      currentPrice: 1620.85,
      totalValue: 324170,
      gainLoss: 8020,
      gainLossPercent: 2.54,
      allocation: 13.04
    },
    {
      id: '4',
      stockSymbol: 'INFY',
      stockName: 'Infosys Ltd',
      quantity: 150,
      averagePrice: 1820.40,
      currentPrice: 1785.30,
      totalValue: 267795,
      gainLoss: -5265,
      gainLossPercent: -1.93,
      allocation: 10.77
    },
    {
      id: '5',
      stockSymbol: 'ITC',
      stockName: 'ITC Ltd',
      quantity: 1000,
      averagePrice: 445.80,
      currentPrice: 472.95,
      totalValue: 472950,
      gainLoss: 27150,
      gainLossPercent: 6.09,
      allocation: 19.03
    }
  ]
};

// Mock transactions
export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'BUY',
    stockSymbol: 'RELIANCE',
    stockName: 'Reliance Industries Ltd',
    quantity: 50,
    price: 2380.50,
    totalAmount: 119025,
    fees: 238,
    date: '2024-01-15T10:30:00Z',
    status: 'COMPLETED'
  },
  {
    id: '2',
    type: 'BUY',
    stockSymbol: 'TCS',
    stockName: 'Tata Consultancy Services',
    quantity: 100,
    price: 3750.25,
    totalAmount: 375025,
    fees: 750,
    date: '2024-01-20T14:45:00Z',
    status: 'COMPLETED'
  },
  {
    id: '3',
    type: 'DIVIDEND',
    stockSymbol: 'ITC',
    stockName: 'ITC Ltd',
    quantity: 1000,
    price: 5.80,
    totalAmount: 5800,
    fees: 0,
    date: '2024-02-01T00:00:00Z',
    status: 'COMPLETED'
  },
  {
    id: '4',
    type: 'BUY',
    stockSymbol: 'HDFCBANK',
    stockName: 'HDFC Bank Ltd',
    quantity: 200,
    price: 1580.75,
    totalAmount: 316150,
    fees: 632,
    date: '2024-02-10T11:20:00Z',
    status: 'COMPLETED'
  },
  {
    id: '5',
    type: 'SELL',
    stockSymbol: 'INFY',
    stockName: 'Infosys Ltd',
    quantity: 50,
    price: 1798.65,
    totalAmount: 89932.50,
    fees: 180,
    date: '2024-02-25T15:10:00Z',
    status: 'COMPLETED'
  }
];

// Mock investment goals
export const mockInvestmentGoals: InvestmentGoal[] = [
  {
    id: '1',
    name: 'House Down Payment',
    targetAmount: 5000000,
    currentAmount: 1250000,
    targetDate: '2027-12-31',
    monthlyContribution: 75000,
    riskLevel: 'MODERATE',
    status: 'ACTIVE'
  },
  {
    id: '2',
    name: 'Retirement Fund',
    targetAmount: 50000000,
    currentAmount: 2485670,
    targetDate: '2054-12-31',
    monthlyContribution: 50000,
    riskLevel: 'HIGH',
    status: 'ACTIVE'
  },
  {
    id: '3',
    name: 'Emergency Fund',
    targetAmount: 1000000,
    currentAmount: 950000,
    targetDate: '2024-06-30',
    monthlyContribution: 25000,
    riskLevel: 'LOW',
    status: 'ACTIVE'
  }
];

// Mock news articles
export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Indian Stock Markets Hit New All-Time Highs Amid Strong Q4 Results',
    summary: 'BSE Sensex crosses 82,000 mark for the first time as IT and banking sectors show strong performance...',
    source: 'Economic Times',
    publishedAt: '2024-12-17T08:30:00Z',
    category: 'MARKET',
    relatedSymbols: ['SENSEX', 'NIFTY']
  },
  {
    id: '2',
    title: 'Reliance Industries Announces Major Expansion in Renewable Energy',
    summary: 'RIL plans to invest ₹75,000 crores in green hydrogen and solar manufacturing over next 5 years...',
    source: 'Business Standard',
    publishedAt: '2024-12-17T07:15:00Z',
    category: 'COMPANY',
    relatedSymbols: ['RELIANCE']
  },
  {
    id: '3',
    title: 'RBI Maintains Repo Rate at 6.5%, Focus on Inflation Control',
    summary: 'Reserve Bank of India keeps key policy rates unchanged, citing need to monitor inflation trends...',
    source: 'Mint',
    publishedAt: '2024-12-16T16:20:00Z',
    category: 'ECONOMIC',
    relatedSymbols: []
  }
];

// Mock watchlist
export const mockWatchlist: Watchlist = {
  id: '1',
  name: 'My Watchlist',
  createdAt: '2024-01-01T00:00:00Z',
  stocks: [
    {
      stockSymbol: 'BAJFINANCE',
      stockName: 'Bajaj Finance Ltd',
      currentPrice: 6890.75,
      change: -34.55,
      changePercent: -0.50,
      addedAt: '2024-01-15T10:00:00Z'
    },
    {
      stockSymbol: 'ASIANPAINT',
      stockName: 'Asian Paints Ltd',
      currentPrice: 2945.60,
      change: -35.25,
      changePercent: -1.18,
      addedAt: '2024-01-20T14:30:00Z'
    },
    {
      stockSymbol: 'HINDUNILVR',
      stockName: 'Hindustan Unilever Ltd',
      currentPrice: 2785.40,
      change: 25.25,
      changePercent: 0.91,
      addedAt: '2024-02-01T09:15:00Z'
    }
  ]
};

// Mock SIP plans
export const mockSIPPlans: SIPPlan[] = [
  {
    id: '1',
    name: 'Monthly SIP - TCS',
    stockSymbol: 'TCS',
    monthlyAmount: 25000,
    startDate: '2024-01-01T00:00:00Z',
    status: 'ACTIVE',
    totalInvested: 300000,
    currentValue: 317500,
    returns: 17500
  },
  {
    id: '2',
    name: 'Monthly SIP - HDFCBANK',
    stockSymbol: 'HDFCBANK',
    monthlyAmount: 15000,
    startDate: '2024-01-01T00:00:00Z',
    status: 'ACTIVE',
    totalInvested: 180000,
    currentValue: 185200,
    returns: 5200
  }
];

// Aggregate market data
export const mockMarketData: MarketData = {
  indices: mockIndices,
  topGainers: mockStocks.filter(stock => stock.change > 0).slice(0, 5),
  topLosers: mockStocks.filter(stock => stock.change < 0).slice(0, 5),
  mostActive: mockStocks.sort((a, b) => b.volume - a.volume).slice(0, 5),
  sectors: mockSectorPerformance
};