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
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };

  const variantStyles = {
    increase: 'bg-green-600 text-white hover:bg-green-700',
    decrease: 'bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:bg-gray-600',
  };

  return (
    <button
      className={`flex items-center justify-center rounded-lg disabled:cursor-not-allowed transition-colors font-semibold ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
