import React from 'react';
import type { Product } from '../types/Product';

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
  const handleIncrement = (product: Product) => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = (product: Product) => {
    if (product.quantity > 0) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  if (products.length === 0) {
    return (
      <div className="backdrop-blur-xl bg-white/10 p-16 rounded-3xl shadow-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-500">
        <div className="inline-block p-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl mb-6 animate-bounce">
          <div className="text-7xl">📦</div>
        </div>
        <p className="text-gray-200 text-2xl font-bold mb-2">No products available</p>
        <p className="text-gray-400 text-lg">Add your first product to get started</p>
      </div>
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
        <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg text-sm">
          {products.length} {products.length === 1 ? 'Item' : 'Items'}
        </span>
      </div>
      {products.map((product) => (
        <div 
          key={product.id} 
          className="backdrop-blur-xl bg-white/10 p-6 rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 flex items-center justify-between border border-white/20 hover:bg-white/15 hover:scale-[1.02] group"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
              {product.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400 font-medium">Stock Level:</span>
              <span className={`text-sm font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm ${
                product.quantity === 0 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse' 
                  : product.quantity < 10 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900' 
                  : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
              }`}>
                {product.quantity} units
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleDecrement(product)}
                disabled={product.quantity === 0}
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-red-500/50 disabled:opacity-30 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700 transform hover:scale-125 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-xl font-bold text-xl border-2 border-white/20"
              >
                −
              </button>
              <div className="w-20 text-center">
                <div className="text-3xl font-bold text-white">{product.quantity}</div>
                <div className="text-xs text-gray-400 mt-1">units</div>
              </div>
              <button
                onClick={() => handleIncrement(product)}
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-125 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-xl font-bold text-xl border-2 border-white/20"
              >
                +
              </button>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => onEdit(product)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-2xl hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl flex items-center gap-2 border-2 border-white/20"
            >
              <span className="text-lg">✏️</span> Edit
            </button>

            {/* Delete Button - Only show when quantity is 0 */}
            {product.quantity === 0 && (
              <button
                onClick={() => onDelete(product.id)}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-bold rounded-2xl hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl flex items-center gap-2 animate-pulse border-2 border-white/20"
              >
                <span className="text-lg">🗑️</span> Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
