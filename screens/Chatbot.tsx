
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Mic, Sparkles, Bot } from 'lucide-react';
import { CHAT_SUGGESTIONS } from '../constants';
import { ChatMessage } from '../types';

interface ChatbotProps {
  onBack: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello Bhavya! I'm your Cred AI Assistant 🤖. Ask me anything about your finances, transactions, or score.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateMockResponse(text),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Simple mock logic for demonstration
  const generateMockResponse = (input: string): string => {
    const lower = input.toLowerCase();
    if (lower.includes('score')) return "Your current CredScore is 720, which is considered excellent! You're in the top 15% of users.";
    if (lower.includes('risk')) return "You have a high impact risk alert due to 80% credit utilization on your HDFC card. I recommend paying off ₹15,000 to improve this.";
    if (lower.includes('transaction')) return "Your last transaction was ₹350 at Starbucks Coffee today at 10:23 AM.";
    if (lower.includes('save')) return "Based on your spending, you could save approximately ₹2,000 more per month by reducing dining out expenses.";
    return "I can help you analyze that. Could you be more specific about which financial aspect you'd like to check?";
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F5FF] animate-slide-up relative">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md px-6 pt-12 pb-4 border-b border-purple-100 flex items-center gap-4 sticky top-0 z-20 shadow-sm">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-text-main">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
            <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
                Cred AI Assistant <Bot className="w-5 h-5 text-primary" />
            </h2>
            <p className="text-xs text-text-muted">Online • Powered by Gemini</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm relative ${
                msg.sender === 'user'
                  ? 'bg-primary text-white rounded-tr-sm'
                  : 'bg-white text-text-main rounded-tl-sm border border-purple-50'
              }`}
            >
                {msg.text}
                <span className={`text-[10px] absolute bottom-1 ${msg.sender === 'user' ? 'left-2 text-blue-200' : 'right-2 text-gray-300'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-purple-50 shadow-sm flex items-center gap-1.5 h-12">
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/90 backdrop-blur-md border-t border-purple-100 sticky bottom-0 z-20 pb-8">
        {/* Suggestion Chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-3 pb-1">
            {CHAT_SUGGESTIONS.map((suggestion) => (
                <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="whitespace-nowrap px-4 py-2 bg-[#F5F5FF] border border-primary/10 rounded-full text-xs font-medium text-primary hover:bg-primary/5 active:scale-95 transition-all"
                >
                    {suggestion}
                </button>
            ))}
        </div>

        {/* Text Input */}
        <div className="relative flex items-center gap-2">
            <div className="flex-1 relative">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend(inputText)}
                    placeholder="Ask about your finances..."
                    className="w-full pl-5 pr-12 py-4 bg-[#F9F9FB] rounded-full text-sm font-medium text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 border border-transparent transition-all shadow-inner"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-text-muted hover:text-primary transition-colors">
                    <Mic className="w-5 h-5" />
                </button>
            </div>
            
            <button 
                onClick={() => handleSend(inputText)}
                disabled={!inputText.trim() && !isTyping}
                className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-glow hover:shadow-lg active:scale-95 transition-all disabled:opacity-50 disabled:shadow-none"
            >
                <Send className="w-5 h-5 ml-0.5" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
