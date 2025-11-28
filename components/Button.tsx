import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-6 rounded-full font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-glow",
    secondary: "bg-white text-primary border border-primary/10",
    outline: "border-2 border-gray-200 text-text-muted hover:border-primary hover:text-primary bg-transparent shadow-none hover:shadow-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
