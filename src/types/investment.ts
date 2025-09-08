// Nivesh OS - Investment Data Types
// Core TypeScript interfaces for AI-powered investment ecosystem

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  riskProfile: RiskProfile;
  investmentGoals: InvestmentGoal[];
  kycStatus: 'pending' | 'verified' | 'rejected';
  tier: 'free' | 'premium' | 'enterprise';
  preferredLanguage: 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'gu';
}

export interface RiskProfile {
  score: number; // 1-10 scale
  category: 'conservative' | 'moderate' | 'aggressive' | 'very_aggressive';
  horizon: number; // years
  volatilityTolerance: number; // 1-10
  lastUpdated: string;
  factors: {
    age: number;
    income: number;
    experience: string;
    dependents: number;
  };
}

export interface InvestmentGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  timeHorizon: number; // years
  priority: 'high' | 'medium' | 'low';
  category: 'retirement' | 'education' | 'house' | 'vacation' | 'emergency' | 'wealth';
  status: 'on_track' | 'behind' | 'ahead' | 'completed';
  monthlyContribution: number;
  recommendedAllocation: AssetAllocation;
}

export interface Portfolio {
  id: string;
  userId: string;
  totalValue: number;
  totalInvested: number;
  totalGains: number;
  totalGainsPercent: number;
  dayChange: number;
  dayChangePercent: number;
  holdings: Holding[];
  assetAllocation: AssetAllocation;
  riskScore: number;
  sharpeRatio: number;
  lastRebalanced: string;
  aiRecommendations: AIRecommendation[];
}

export interface Holding {
  id: string;
  symbol: string;
  name: string;
  type: 'equity' | 'mutual_fund' | 'bond' | 'gold' | 'real_estate' | 'crypto';
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
  allocation: number; // percentage of portfolio
  sector: string;
  dividendYield?: number;
  expenseRatio?: number;
  rating?: number;
}

export interface AssetAllocation {
  equity: number;
  debt: number;
  gold: number;
  realEstate: number;
  international: number;
  cash: number;
  alternative: number;
}

export interface AIRecommendation {
  id: string;
  type: 'buy' | 'sell' | 'hold' | 'rebalance' | 'tax_harvest' | 'goal_adjust';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  reasoning: string;
  expectedImpact: string;
  confidence: number; // 0-100
  createdAt: string;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  symbol?: string;
  quantity?: number;
  targetPrice?: number;
}

export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  pe: number;
  sector: string;
  exchange: 'NSE' | 'BSE';
  lastUpdated: string;
}

export interface MutualFund {
  id: string;
  name: string;
  fundHouse: string;
  category: string;
  subcategory: string;
  nav: number;
  aum: number;
  expenseRatio: number;
  returns: {
    '1y': number;
    '3y': number;
    '5y': number;
    '10y': number;
  };
  rating: number;
  riskLevel: string;
  minInvestment: number;
  sipAvailable: boolean;
  taxSaver: boolean;
}

export interface Transaction {
  id: string;
  portfolioId: string;
  type: 'buy' | 'sell' | 'dividend' | 'bonus' | 'split' | 'sip';
  symbol: string;
  quantity: number;
  price: number;
  amount: number;
  fees: number;
  tax: number;
  date: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  source: 'manual' | 'ai_recommendation' | 'auto_rebalance' | 'sip';
}

export interface AIInsight {
  id: string;
  type: 'market_outlook' | 'portfolio_analysis' | 'goal_progress' | 'risk_alert' | 'opportunity';
  title: string;
  content: string;
  severity: 'info' | 'warning' | 'critical';
  actionRequired: boolean;
  createdAt: string;
  readAt?: string;
  tags: string[];
}

export interface EducationContent {
  id: string;
  title: string;
  content: string;
  type: 'article' | 'video' | 'quiz' | 'calculator';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  estimatedTime: number; // minutes
  language: string;
  completed: boolean;
  rating: number;
}

export interface NotificationSettings {
  portfolio: boolean;
  aiRecommendations: boolean;
  goalProgress: boolean;
  marketAlerts: boolean;
  educational: boolean;
  sms: boolean;
  email: boolean;
  push: boolean;
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Chart Data Types
export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface PerformanceData {
  portfolio: ChartDataPoint[];
  benchmark: ChartDataPoint[];
  period: '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | 'ALL';
}

// Indian Market Specific Types
export interface IndianMarketData {
  nifty50: number;
  sensex: number;
  niftyBank: number;
  niftyIT: number;
  goldPrice: number;
  usdInr: number;
  vix: number;
}

export interface TaxOptimization {
  section80C: number;
  section80CCD: number;
  ltcgTax: number;
  stcgTax: number;
  dividendTax: number;
  suggestions: string[];
}