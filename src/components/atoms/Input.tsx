import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/15 text-white placeholder-gray-400 text-lg shadow-lg ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
