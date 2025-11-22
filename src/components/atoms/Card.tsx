import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover
    ? 'hover:bg-slate-700/50'
    : '';

  return (
    <div className={`bg-slate-800 rounded-lg shadow-lg border border-slate-700 transition-colors ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
