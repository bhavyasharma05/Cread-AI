import React from 'react';
import { ArrowLeft, AlertTriangle, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CRED_SCORE, MAX_SCORE, SCORE_METRICS, RISK_ALERTS, SPENDING_DATA } from '../constants';

interface InsightsProps {
  onBack: () => void;
}

const Insights: React.FC<InsightsProps> = ({ onBack }) => {
  return (
    <div className="min-h-full bg-bg animate-slide-up">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md px-6 pt-12 pb-4 border-b border-gray-100 flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-6 h-6 text-text-main" />
        </button>
        <h2 className="text-xl font-bold text-text-main">Score Insights</h2>
      </div>

      <div className="p-6 pb-20 space-y-6">
        
        {/* Top Score Card */}
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
            
            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Current CredScore</p>
                    <h1 className="text-5xl font-bold tracking-tight">{CRED_SCORE}</h1>
                    <p className="text-sm text-gray-400 mt-2">out of {MAX_SCORE}</p>
                </div>
                <div className="bg-success/20 text-success px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <ShieldCheck size={12} />
                    GOOD
                </div>
            </div>

            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary" 
                    style={{ width: `${(CRED_SCORE / MAX_SCORE) * 100}%` }}
                ></div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-right">Updated today</p>
        </div>

        {/* AI-Powered Insights Section */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
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

        {/* Score Breakdown */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
            <h3 className="text-lg font-bold text-text-main mb-5">Score Factors</h3>
            <div className="space-y-5">
                {SCORE_METRICS.map((metric) => (
                    <div key={metric.label}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-text-muted">{metric.label}</span>
                            <span className="text-sm font-bold text-text-main">{metric.score}/100</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div 
                                className="h-full rounded-full transition-all duration-1000"
                                style={{ width: `${metric.score}%`, backgroundColor: metric.color }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Spending Trend Chart */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
             <h3 className="text-lg font-bold text-text-main mb-1">Spending Trend</h3>
             <p className="text-xs text-text-muted mb-6">Last 7 days activity</p>
             
             <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={SPENDING_DATA}>
                        <defs>
                            <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4251F5" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#4251F5" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            cursor={{ stroke: '#E5E7EB', strokeWidth: 1 }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="amount" 
                            stroke="#4251F5" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorSpend)" 
                        />
                         <XAxis 
                            dataKey="day" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#9CA3AF', fontSize: 10 }} 
                            dy={10}
                        />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
        </div>

        {/* Risk Alerts */}
        <div>
            <h3 className="text-lg font-bold text-text-main mb-4 px-1">Risk Alerts</h3>
            <div className="grid grid-cols-1 gap-4">
                {RISK_ALERTS.map((alert) => (
                    <div key={alert.id} className="bg-white p-5 rounded-[22px] border border-gray-50 shadow-sm flex items-start gap-4">
                        <div className={`p-3 rounded-full shrink-0 ${
                            alert.impact === 'High' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-primary'
                        }`}>
                            {alert.iconType === 'warning' ? <AlertTriangle size={20} /> : <Info size={20} />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="text-sm font-bold text-text-main">{alert.title}</h4>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                                    alert.impact === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {alert.impact} Impact
                                </span>
                            </div>
                            <p className="text-xs text-text-muted mt-1 leading-relaxed">
                                {alert.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Insights;