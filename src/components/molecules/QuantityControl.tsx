import React from 'react';
import IconButton from '../atoms/IconButton';

interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ 
  quantity, 
  onIncrement, 
  onDecrement 
}) => {
  return (
    <div className="flex items-center gap-4">
      <IconButton
        variant="decrease"
        icon="−"
        onClick={onDecrement}
        disabled={quantity === 0}
      />
      <div className="w-20 text-center">
        <div className="text-3xl font-bold text-white">{quantity}</div>
        <div className="text-xs text-gray-400 mt-1">units</div>
      </div>
      <IconButton
        variant="increase"
        icon="+"
        onClick={onIncrement}
      />
    </div>
  );
};

export default QuantityControl;
