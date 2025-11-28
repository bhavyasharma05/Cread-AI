import React from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

interface OnboardingProps {
  onContinue: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onContinue }) => {
  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-bg to-white -z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>

      <div className="flex-1 flex flex-col items-center justify-center z-10 p-8 pt-20">
        
        {/* Simple Abstract Finance Illustration */}
        <div className="relative w-64 h-64 mb-12 animate-slide-up">
           <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="#F0F4FF" />
              <path d="M60 100H140" stroke="#E0E7FF" strokeWidth="2" />
              <path d="M100 60V140" stroke="#E0E7FF" strokeWidth="2" />
              
              {/* Card */}
              <rect x="50" y="75" width="100" height="60" rx="8" fill="url(#cardGrad)" transform="rotate(-5 100 105)" />
              <rect x="50" y="75" width="100" height="60" rx="8" fill="white" stroke="#Eef2ff" strokeWidth="2" transform="rotate(-5 100 105)" fillOpacity="0.2" />
              
              {/* Wallet/Phone Abstract */}
              <rect x="70" y="50" width="80" height="120" rx="12" fill="white" stroke="#4251F5" strokeWidth="2" className="drop-shadow-lg" />
              <circle cx="110" cy="155" r="4" fill="#4251F5" />
              
              {/* Shield/Safe Badge */}
              <circle cx="140" cy="60" r="16" fill="#10B981" />
              <path d="M135 60L138.5 63.5L145 56.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

              <defs>
                 <linearGradient id="cardGrad" x1="50" y1="75" x2="150" y2="135" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#4251F5"/>
                   <stop offset="1" stopColor="#6A5BE2"/>
                 </linearGradient>
              </defs>
           </svg>
        </div>

        <div className="text-center space-y-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-3xl font-bold text-text-main tracking-tight">
            Smart Financial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
          </h1>
          <p className="text-text-muted text-base leading-relaxed px-4">
            Track your UPI & bank transactions securely. Get real-time credit monitoring.
          </p>
        </div>
      </div>

      <div className="p-6 pb-10 z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <Button onClick={onContinue} fullWidth className="group">
          <span>Continue</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
