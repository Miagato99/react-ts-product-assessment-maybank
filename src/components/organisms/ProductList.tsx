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
  onQuantityChange 
}) => {
  if (products.length === 0) {
    return (
      <Card className="p-16 text-center">
        <div className="inline-block p-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl mb-6 animate-bounce">
          <div className="text-7xl">📦</div>
        </div>
        <p className="text-gray-200 text-2xl font-bold mb-2">No products available</p>
        <p className="text-gray-400 text-lg">Add your first product to get started</p>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-lg">
            <span className="text-2xl">📋</span>
          </div>
          Product Inventory
        </h2>
        <Badge variant="primary" className="px-5 py-2.5 text-sm">
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
