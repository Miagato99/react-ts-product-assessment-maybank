import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'increase' | 'decrease';
  icon: string;
  size?: 'sm' | 'md' | 'lg';
}

const IconButton: React.FC<IconButtonProps> = ({ 
  variant = 'increase', 
  icon,
  size = 'md',
  disabled,
  className = '',
  ...props 
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-14 h-14 text-2xl',
  };

  const variantStyles = {
    increase: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50',
    decrease: 'bg-gradient-to-br from-red-500 to-pink-600 text-white hover:shadow-lg hover:shadow-red-500/50 disabled:opacity-30 disabled:from-gray-600 disabled:to-gray-700',
  };

  return (
    <button
      className={`flex items-center justify-center rounded-full disabled:cursor-not-allowed transform hover:scale-125 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-xl font-bold border-2 border-white/20 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
