import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'primary';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', className = '' }) => {
  const variantStyles = {
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-gray-900',
    danger: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
    primary: 'bg-blue-600 text-white',
  };

  return (
    <span className={`text-sm font-semibold px-3 py-1 rounded ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
