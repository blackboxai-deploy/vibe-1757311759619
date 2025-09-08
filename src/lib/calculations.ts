// Financial calculation utilities for Nivesh OS

export const calculateGainLoss = (currentValue: number, costBasis: number): number => {
  return currentValue - costBasis;
};

export const calculateGainLossPercent = (currentValue: number, costBasis: number): number => {
  if (costBasis === 0) return 0;
  return ((currentValue - costBasis) / costBasis) * 100;
};

export const calculatePortfolioValue = (holdings: Array<{ quantity: number; currentPrice: number }>): number => {
  return holdings.reduce((total, holding) => total + (holding.quantity * holding.currentPrice), 0);
};

export const calculatePortfolioCost = (holdings: Array<{ quantity: number; averagePrice: number }>): number => {
  return holdings.reduce((total, holding) => total + (holding.quantity * holding.averagePrice), 0);
};

export const calculateAllocation = (value: number, totalValue: number): number => {
  if (totalValue === 0) return 0;
  return (value / totalValue) * 100;
};

export const calculateSIPReturns = (
  monthlyAmount: number,
  annualReturn: number,
  years: number
): { totalInvested: number; maturityValue: number; totalReturns: number } => {
  const monthlyReturn = annualReturn / 12 / 100;
  const months = years * 12;
  
  const totalInvested = monthlyAmount * months;
  
  // SIP maturity calculation using compound interest formula
  const maturityValue = monthlyAmount * 
    ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * 
    (1 + monthlyReturn);
  
  const totalReturns = maturityValue - totalInvested;
  
  return {
    totalInvested: Math.round(totalInvested),
    maturityValue: Math.round(maturityValue),
    totalReturns: Math.round(totalReturns)
  };
};

export const calculateLumpSumReturns = (
  principal: number,
  annualReturn: number,
  years: number
): { principal: number; maturityValue: number; totalReturns: number } => {
  const maturityValue = principal * Math.pow(1 + (annualReturn / 100), years);
  const totalReturns = maturityValue - principal;
  
  return {
    principal: Math.round(principal),
    maturityValue: Math.round(maturityValue),
    totalReturns: Math.round(totalReturns)
  };
};

export const calculateRequiredSIP = (
  targetAmount: number,
  years: number,
  expectedReturn: number
): number => {
  const monthlyReturn = expectedReturn / 12 / 100;
  const months = years * 12;
  
  // Calculate required monthly SIP amount
  const requiredSIP = targetAmount * monthlyReturn / 
    ((Math.pow(1 + monthlyReturn, months) - 1) * (1 + monthlyReturn));
  
  return Math.round(requiredSIP);
};

export const calculateBreakevenPrice = (
  averagePrice: number,
  quantity: number,
  fees: number
): number => {
  return averagePrice + (fees / quantity);
};

export const calculateTotalFees = (amount: number, feePercent: number = 0.1): number => {
  return (amount * feePercent) / 100;
};

export const calculateDayChange = (currentPrice: number, previousClose: number): {
  change: number;
  changePercent: number;
} => {
  const change = currentPrice - previousClose;
  const changePercent = previousClose !== 0 ? (change / previousClose) * 100 : 0;
  
  return {
    change: Number(change.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2))
  };
};

export const calculateAveragePrice = (trades: Array<{ quantity: number; price: number }>): number => {
  const totalQuantity = trades.reduce((sum, trade) => sum + trade.quantity, 0);
  const totalCost = trades.reduce((sum, trade) => sum + (trade.quantity * trade.price), 0);
  
  return totalQuantity !== 0 ? totalCost / totalQuantity : 0;
};

export const calculateRiskScore = (
  age: number,
  income: number,
  experience: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED',
  riskTolerance: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE'
): number => {
  let score = 0;
  
  // Age factor (younger = higher risk capacity)
  if (age <= 30) score += 40;
  else if (age <= 40) score += 30;
  else if (age <= 50) score += 20;
  else score += 10;
  
  // Income factor
  if (income >= 1000000) score += 30; // 10L+
  else if (income >= 500000) score += 20; // 5L+
  else score += 10;
  
  // Experience factor
  if (experience === 'ADVANCED') score += 20;
  else if (experience === 'INTERMEDIATE') score += 15;
  else score += 10;
  
  // Risk tolerance factor
  if (riskTolerance === 'AGGRESSIVE') score += 10;
  else if (riskTolerance === 'MODERATE') score += 5;
  // Conservative adds 0
  
  return Math.min(score, 100); // Cap at 100
};

export const calculatePortfolioMetrics = (holdings: Array<{
  quantity: number;
  averagePrice: number;
  currentPrice: number;
}>) => {
  let totalCost = 0;
  let totalValue = 0;
  
  holdings.forEach(holding => {
    totalCost += holding.quantity * holding.averagePrice;
    totalValue += holding.quantity * holding.currentPrice;
  });
  
  const totalGainLoss = totalValue - totalCost;
  const totalGainLossPercent = totalCost !== 0 ? (totalGainLoss / totalCost) * 100 : 0;
  
  return {
    totalCost: Number(totalCost.toFixed(2)),
    totalValue: Number(totalValue.toFixed(2)),
    totalGainLoss: Number(totalGainLoss.toFixed(2)),
    totalGainLossPercent: Number(totalGainLossPercent.toFixed(2))
  };
};

export const calculatePE = (currentPrice: number, annualEPS: number): number => {
  return annualEPS !== 0 ? currentPrice / annualEPS : 0;
};

export const calculateDividendYield = (annualDividend: number, currentPrice: number): number => {
  return currentPrice !== 0 ? (annualDividend / currentPrice) * 100 : 0;
};

export const calculateMarketCap = (currentPrice: number, sharesOutstanding: number): number => {
  return currentPrice * sharesOutstanding;
};