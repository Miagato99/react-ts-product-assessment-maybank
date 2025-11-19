import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'primary';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', className = '' }) => {
  const variantStyles = {
    success: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
    warning: 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse',
    info: 'bg-blue-500/20 text-blue-300 border border-blue-400/30',
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
  };

  return (
    <span className={`text-sm font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
