import React, { useState } from 'react';
import Onboarding from './screens/Onboarding';
import Dashboard from './screens/Dashboard';
import Insights from './screens/Insights';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.ONBOARDING);

  // Simple router based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.ONBOARDING:
        return <Onboarding onContinue={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.DASHBOARD:
        return <Dashboard onViewInsights={() => setCurrentScreen(Screen.INSIGHTS)} />;
      case Screen.INSIGHTS:
        return <Insights onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      default:
        return <Onboarding onContinue={() => setCurrentScreen(Screen.DASHBOARD)} />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
        {/* 
            Mobile Frame Container:
            On large screens, this looks like a mobile phone.
            On small screens, it takes full width/height.
        */}
      <div className="w-full h-full sm:h-[844px] sm:w-[390px] bg-bg sm:rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-gray-900 sm:border-gray-900 box-border">
         {/* Status Bar Imitation (only for aesthetics inside the frame) */}
         <div className="absolute top-0 left-0 w-full h-12 z-50 flex justify-between items-end px-6 pb-2 pointer-events-none">
            <span className="text-xs font-semibold text-text-main">9:41</span>
            <div className="flex gap-1.5 items-center">
                <div className="w-4 h-4 bg-text-main rounded-full opacity-20"></div>
                <div className="w-4 h-4 bg-text-main rounded-full opacity-20"></div>
                <div className="w-6 h-3 border border-gray-300 rounded-[4px] relative">
                    <div className="absolute top-0.5 left-0.5 bottom-0.5 right-1 bg-text-main rounded-[2px]"></div>
                </div>
            </div>
         </div>
         
         {/* Dynamic Content */}
         <main className="h-full w-full overflow-y-auto scrollbar-hide pt-10">
            {renderScreen()}
         </main>
         
         {/* Bottom Navigation Indicator */}
         <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full z-50 mb-2"></div>
      </div>
    </div>
  );
};

export default App;
