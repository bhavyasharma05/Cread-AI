import React, { useEffect, useState } from 'react';

interface ScoreRingProps {
  score: number;
  maxScore: number;
  size?: number;
  strokeWidth?: number;
}

const ScoreRing: React.FC<ScoreRingProps> = ({ 
  score, 
  maxScore, 
  size = 200, 
  strokeWidth = 15 
}) => {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    // Animate to the score percentage
    const timer = setTimeout(() => {
      setProgress((score / maxScore) * 100);
    }, 300);
    return () => clearTimeout(timer);
  }, [score, maxScore]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background Ring */}
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#F0F0F2"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4251F5" />
            <stop offset="100%" stopColor="#6A5BE2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center Content */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-bold text-text-main tracking-tight animate-fade-in delay-300">
          {score}
        </span>
        <span className="text-xs font-medium text-text-muted mt-1 uppercase tracking-wide">
          Excellent
        </span>
      </div>
    </div>
  );
};

export default ScoreRing;
