import React from 'react';
import type { Product } from '../../types/Product';
import Card from '../atoms/Card';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import QuantityControl from './QuantityControl';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onEdit, 
  onDelete, 
  onQuantityChange 
}) => {
  const handleIncrement = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 0) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  const getStockVariant = () => {
    if (product.quantity === 0) return 'danger';
    if (product.quantity < 10) return 'warning';
    return 'success';
  };

  return (
    <Card className="p-6 flex items-center justify-between group" hover>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 font-medium">Stock Level:</span>
          <Badge variant={getStockVariant()}>
            {product.quantity} units
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <QuantityControl
          quantity={product.quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />

        <Button
          variant="ghost"
          size="md"
          onClick={() => onEdit(product)}
        >
          <span className="text-lg">✏️</span> Edit
        </Button>

        {product.quantity === 0 && (
          <Button
            variant="danger"
            size="md"
            onClick={() => onDelete(product.id)}
            className="animate-pulse"
          >
            <span className="text-lg">🗑️</span> Delete
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
