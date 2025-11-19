import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover 
    ? 'hover:bg-white/15 hover:scale-[1.02] hover:shadow-purple-500/30' 
    : 'hover:bg-white/15';

  return (
    <div className={`backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
