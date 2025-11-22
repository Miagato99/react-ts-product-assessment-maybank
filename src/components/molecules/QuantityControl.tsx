import React from 'react';
import Button from '../atoms/Button';

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
    <div className="flex items-center gap-3">
      <Button
        variant="decrease"
        icon="−"
        onClick={onDecrement}
        disabled={quantity === 0}
      />
      <div className="w-16 text-center">
        <div className="text-2xl font-semibold text-white">{quantity}</div>
        <div className="text-xs text-gray-400">units</div>
      </div>
      <Button
        variant="increase"
        icon="+"
        onClick={onIncrement}
      />
    </div>
  );
};

export default QuantityControl;
