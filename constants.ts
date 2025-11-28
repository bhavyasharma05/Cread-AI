
import { RiskAlert, ScoreMetric, SpendingPoint, Transaction, ChatMessage } from './types';

export const USER_NAME = "Bhavya";
export const CRED_SCORE = 720;
export const MAX_SCORE = 900;

export const TRANSACTIONS: Transaction[] = [
  { id: '1', merchant: 'Starbucks Coffee', date: 'Today, 10:23 AM', amount: 350, type: 'debit', category: 'upi' },
  { id: '2', merchant: 'Salary Credited', date: 'Yesterday', amount: 45000, type: 'credit', category: 'bank' },
  { id: '3', merchant: 'Uber Ride', date: 'Yesterday', amount: 420, type: 'debit', category: 'upi' },
  { id: '4', merchant: 'Netflix Subscription', date: '22 Oct', amount: 649, type: 'debit', category: 'bank' },
  { id: '5', merchant: 'Zomato', date: '21 Oct', amount: 850, type: 'debit', category: 'upi' },
];

export const SCORE_METRICS: ScoreMetric[] = [
  { label: 'Income Stability', score: 85, color: '#4251F5' }, // Primary
  { label: 'Spending Behaviour', score: 62, color: '#F59E0B' }, // Warning
  { label: 'Payment Discipline', score: 90, color: '#10B981' }, // Success
  { label: 'Risk Behaviour', score: 78, color: '#6A5BE2' }, // Secondary
  { label: 'Savings Strength', score: 45, color: '#EF4444' }, // Danger
];

export const RISK_ALERTS: RiskAlert[] = [
  { 
    id: '1', 
    title: 'High Credit Utilization', 
    description: 'You used 80% of your limit on HDFC Card.', 
    impact: 'High', 
    iconType: 'warning' 
  },
  { 
    id: '2', 
    title: 'New Loan Inquiry', 
    description: 'A hard inquiry was reported 2 days ago.', 
    impact: 'Medium', 
    iconType: 'info' 
  },
];

export const SPENDING_DATA: SpendingPoint[] = [
  { day: 'Mon', amount: 1200 },
  { day: 'Tue', amount: 900 },
  { day: 'Wed', amount: 200 },
  { day: 'Thu', amount: 3500 },
  { day: 'Fri', amount: 1800 },
  { day: 'Sat', amount: 4200 },
  { day: 'Sun', amount: 2100 },
];

export const CHAT_SUGGESTIONS = [
  "Show my score",
  "Explain risk alerts",
  "My last transactions",
  "How to save more?",
  "Analyze spending"
];
