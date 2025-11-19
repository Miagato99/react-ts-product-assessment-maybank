import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-2xl transform transition-all duration-300 shadow-xl flex items-center justify-center gap-2 border-2 border-white/20 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] relative overflow-hidden group',
    secondary: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98]',
    danger: 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-lg hover:shadow-red-500/50 hover:scale-110 hover:-translate-y-1 active:scale-95',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50 hover:scale-110 hover:-translate-y-1 active:scale-95',
    ghost: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 hover:-translate-y-1 active:scale-95',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {variant === 'primary' && (
        <>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
      {variant !== 'primary' && children}
    </button>
  );
};

export default Button;
