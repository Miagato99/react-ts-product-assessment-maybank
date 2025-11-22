import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' | 'increase' | 'decrease';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // Icon button specific sizing (circular buttons)
  const iconSizeStyles = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    ghost: 'bg-slate-700 text-white hover:bg-slate-600',
    increase: 'bg-green-600 text-white hover:bg-green-700',
    decrease: 'bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:bg-gray-600',
  };

  const isIconButton = icon && !children;
  const appliedSizeStyles = isIconButton ? iconSizeStyles[size] : sizeStyles[size];

  return (
    <button
      className={`${baseStyles} ${appliedSizeStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon || children}
    </button>
  );
};

export default Button;
