// Financial Data Types for Nivesh OS

export interface Stock {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  sector: string;
  pe: number;
  dividend: number;
}

export interface Portfolio {
  id: string;
  name: string;
  totalValue: number;
  totalCost: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
  holdings: Holding[];
  lastUpdated: string;
}

export interface Holding {
  id: string;
  stockSymbol: string;
  stockName: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalValue: number;
  gainLoss: number;
  gainLossPercent: number;
  allocation: number;
}

export interface Transaction {
  id: string;
  type: 'BUY' | 'SELL' | 'DIVIDEND';
  stockSymbol: string;
  stockName: string;
  quantity: number;
  price: number;
  totalAmount: number;
  fees: number;
  date: string;
  status: 'COMPLETED' | 'PENDING' | 'CANCELLED';
}

export interface Order {
  id: string;
  type: 'BUY' | 'SELL';
  orderType: 'MARKET' | 'LIMIT' | 'STOP_LOSS';
  stockSymbol: string;
  quantity: number;
  price?: number;
  stopPrice?: number;
  status: 'PENDING' | 'EXECUTED' | 'CANCELLED';
  createdAt: string;
  executedAt?: string;
}

export interface MarketData {
  indices: MarketIndex[];
  topGainers: Stock[];
  topLosers: Stock[];
  mostActive: Stock[];
  sectors: SectorPerformance[];
}

export interface MarketIndex {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface SectorPerformance {
  name: string;
  change: number;
  changePercent: number;
  stocks: number;
}

export interface InvestmentGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  monthlyContribution: number;
  riskLevel: 'LOW' | 'MODERATE' | 'HIGH';
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  riskTolerance: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE';
  investmentExperience: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  annualIncome: number;
  age: number;
  preferences: {
    currency: string;
    notifications: boolean;
    darkMode: boolean;
    language: string;
  };
}

export interface PortfolioAnalytics {
  totalReturn: number;
  totalReturnPercent: number;
  dayChange: number;
  dayChangePercent: number;
  bestPerformer: {
    symbol: string;
    gainPercent: number;
  };
  worstPerformer: {
    symbol: string;
    lossPercent: number;
  };
  assetAllocation: AssetAllocation[];
  sectorAllocation: SectorAllocation[];
}

export interface AssetAllocation {
  category: string;
  value: number;
  percentage: number;
  color: string;
}

export interface SectorAllocation {
  sector: string;
  value: number;
  percentage: number;
  color: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  category: 'MARKET' | 'STOCK' | 'ECONOMIC' | 'COMPANY';
  relatedSymbols: string[];
}

export interface Watchlist {
  id: string;
  name: string;
  stocks: WatchlistItem[];
  createdAt: string;
}

export interface WatchlistItem {
  stockSymbol: string;
  stockName: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  addedAt: string;
}

export interface SIPPlan {
  id: string;
  name: string;
  stockSymbol: string;
  monthlyAmount: number;
  startDate: string;
  endDate?: string;
  status: 'ACTIVE' | 'PAUSED' | 'COMPLETED';
  totalInvested: number;
  currentValue: number;
  returns: number;
}