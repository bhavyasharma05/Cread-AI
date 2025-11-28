
import React from 'react';
import { Send, History, Sparkles, CreditCard, ChevronRight, TrendingUp, Bot } from 'lucide-react';
import ScoreRing from '../components/ScoreRing';
import { CRED_SCORE, MAX_SCORE, USER_NAME, TRANSACTIONS } from '../constants';
import { Transaction } from '../types';

interface DashboardProps {
  onViewInsights: () => void;
  onOpenChat: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewInsights, onOpenChat }) => {
  return (
    <div className="min-h-full bg-bg pb-20 animate-fade-in relative">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 rounded-b-[30px] shadow-sm mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-text-muted text-sm font-medium">Welcome back,</p>
            <h2 className="text-2xl font-bold text-text-main">Hello {USER_NAME} 👋</h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
             <span className="text-sm font-bold text-text-muted">BP</span>
          </div>
        </div>

        {/* Main Score Card */}
        <div 
          onClick={onViewInsights}
          className="bg-white rounded-[24px] p-6 shadow-soft border border-gray-50 flex flex-col items-center relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
        >
            <div className="absolute top-0 right-0 p-4">
                <ChevronRight className="text-gray-300 w-5 h-5" />
            </div>
            
            <div className="mb-2">
                <ScoreRing score={CRED_SCORE} maxScore={MAX_SCORE} size={160} strokeWidth={12} />
            </div>
            
            <div className="text-center mt-2">
                <h3 className="text-lg font-semibold text-text-main">Your CredScore</h3>
                <p className="text-xs text-text-muted flex items-center justify-center gap-1 mt-1">
                    <Sparkles className="w-3 h-3 text-secondary" />
                    Based on SMS analytics
                </p>
            </div>
            
            {/* Subtle background glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-primary/5 blur-2xl rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <div className="flex justify-between gap-4">
            <QuickAction icon={<Send size={20} />} label="Send" />
            <QuickAction icon={<History size={20} />} label="History" />
            <QuickAction icon={<TrendingUp size={20} />} label="Insights" active onClick={onViewInsights} />
        </div>
      </div>

      {/* AI Insights Card */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-[24px] p-6 shadow-soft border border-gray-50">
            <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI-Powered Insights
            </h3>
            
            <ul className="space-y-4 mb-6">
                <li className="flex gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>
                        You consistently receive your monthly salary, demonstrating a strong and reliable income source.
                    </span>
                </li>
                 <li className="flex gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>
                       Your prompt payment of bills like electricity, broadband, and gas highlights excellent financial responsibility.
                    </span>
                </li>
                 <li className="flex gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>
                        Your spending habits appear well-managed, with thoughtful allocation towards daily needs and occasional leisure.
                    </span>
                </li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-primary">
                <h4 className="text-primary font-bold text-sm mb-1">Pro Tip:</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                    To further strengthen your financial foundation, consider allocating a small portion of your consistent income towards a dedicated savings fund each month.
                </p>
            </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-6 pb-20">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-text-main">Recent Activity</h3>
            <button className="text-sm font-medium text-primary">See All</button>
        </div>
        
        <div className="space-y-4">
            {TRANSACTIONS.map((tx) => (
                <TransactionItem key={tx.id} transaction={tx} />
            ))}
        </div>
      </div>

      {/* Floating Action Button for Chatbot */}
      <div className="absolute bottom-6 right-6 z-10">
        <button 
          onClick={onOpenChat}
          className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all"
        >
          <Bot className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

const QuickAction: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }> = ({ icon, label, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all ${
            active 
            ? 'bg-primary text-white border-primary shadow-glow' 
            : 'bg-white text-text-muted border-gray-100 shadow-soft hover:border-primary/20 hover:text-primary'
        }`}
    >
        <div className={`p-2 rounded-full ${active ? 'bg-white/20' : 'bg-gray-50'}`}>
            {icon}
        </div>
        <span className="text-xs font-medium">{label}</span>
    </button>
);

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
    const isCredit = transaction.type === 'credit';
    const isUPI = transaction.category === 'upi';

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 shadow-sm">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCredit ? 'bg-green-50' : 'bg-blue-50'}`}>
                    {isCredit ? (
                        <TrendingUp className="w-5 h-5 text-success" />
                    ) : (
                        <CreditCard className="w-5 h-5 text-primary" />
                    )}
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-text-main">{transaction.merchant}</h4>
                    <p className="text-xs text-text-muted mt-0.5">{transaction.date} • {isUPI ? 'UPI' : 'Bank'}</p>
                </div>
            </div>
            <div className="text-right">
                <span className={`block text-sm font-bold ${isCredit ? 'text-success' : 'text-text-main'}`}>
                    {isCredit ? '+' : '-'}₹{transaction.amount}
                </span>
            </div>
        </div>
    );
};

export default Dashboard;
