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
  isEditing?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
  onQuantityChange,
  isEditing = false
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
    <Card className="p-4 flex items-center justify-between" hover>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-300 text-sm mb-2">
          {product.description}
        </p>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-lg font-bold text-blue-400">
            RM{product.price.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Stock:</span>
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
          disabled={isEditing}
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
