import React from 'react';
import type { Product } from '../../types/Product';
import Card from '../atoms/Card';
import Badge from '../atoms/Badge';
import ProductCard from '../molecules/ProductCard';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onEdit,
  onDelete,
  onQuantityChange,
}) => {
  if (products.length === 0) {
    return (
      <Card className="p-12 text-center">
        <div className="inline-block p-4 bg-blue-600 rounded-lg mb-4">
          <div className="text-5xl">📦</div>
        </div>
        <p className="text-gray-200 text-xl font-semibold mb-1">No products available</p>
        <p className="text-gray-400">Add your first product to get started</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <span className="text-xl">📋</span>
          </div>
          Product Inventory
        </h2>
        <Badge variant="primary">
          {products.length} {products.length === 1 ? 'Item' : 'Items'}
        </Badge>
      </div>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
};

export default ProductList;
