export enum Screen {
  ONBOARDING = 'ONBOARDING',
  DASHBOARD = 'DASHBOARD',
  INSIGHTS = 'INSIGHTS'
}

export interface Transaction {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  category: 'upi' | 'bank';
  icon?: string;
}

export interface ScoreMetric {
  label: string;
  score: number; // 0 to 100
  color: string;
}

export interface RiskAlert {
  id: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  iconType: 'warning' | 'info';
}

export interface SpendingPoint {
  day: string;
  amount: number;
}
