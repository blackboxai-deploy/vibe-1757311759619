// Formatting utilities for financial data

export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
  if (currency === 'INR') {
    // Indian numbering system with lakhs and crores
    if (amount >= 10000000) { // 1 crore
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) { // 1 lakh
      return `₹${(amount / 100000).toFixed(2)}L`;
    } else if (amount >= 1000) { // 1 thousand
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount.toFixed(2)}`;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(2)}Cr`;
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(2)}L`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toLocaleString('en-IN');
};

export const formatPercentage = (percentage: number, decimals: number = 2): string => {
  const sign = percentage >= 0 ? '+' : '';
  return `${sign}${percentage.toFixed(decimals)}%`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatVolume = (volume: number): string => {
  if (volume >= 10000000) {
    return `${(volume / 10000000).toFixed(2)}Cr`;
  } else if (volume >= 100000) {
    return `${(volume / 100000).toFixed(2)}L`;
  } else if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  }
  return volume.toString();
};

export const getChangeColor = (change: number): string => {
  if (change > 0) return 'text-green-600';
  if (change < 0) return 'text-red-600';
  return 'text-gray-600';
};

export const getChangeColorBg = (change: number): string => {
  if (change > 0) return 'bg-green-100 text-green-800';
  if (change < 0) return 'bg-red-100 text-red-800';
  return 'bg-gray-100 text-gray-800';
};

export const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1000000000000) { // 1 trillion
    return `₹${(marketCap / 1000000000000).toFixed(2)}T`;
  } else if (marketCap >= 10000000000) { // 1000 crores
    return `₹${(marketCap / 10000000).toFixed(0)}Cr`;
  } else if (marketCap >= 10000000) { // 1 crore
    return `₹${(marketCap / 10000000).toFixed(2)}Cr`;
  }
  return formatCurrency(marketCap);
};

export const formatPE = (pe: number): string => {
  if (pe <= 0 || !isFinite(pe)) return 'N/A';
  return pe.toFixed(2);
};

export const formatDividendYield = (dividend: number): string => {
  if (dividend <= 0) return 'N/A';
  return `${dividend.toFixed(2)}%`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
  const diffInDays = diffInHours / 24;

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hours ago`;
  } else if (diffInDays < 7) {
    return `${Math.floor(diffInDays)} days ago`;
  } else {
    return formatDate(dateString);
  }
};