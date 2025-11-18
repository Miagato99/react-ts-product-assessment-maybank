import React, { useState, useEffect } from 'react';
import type { Product } from '../types/Product';

interface ProductFormProps {
  productToEdit?: Product;
  onSave: (product: Omit<Product, 'id'> | Product) => void;
  onCancel?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ productToEdit, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setQuantity(productToEdit.quantity);
    }
  }, [productToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert('Product name is required');
      return;
    }

    if (quantity < 0) {
      alert('Quantity cannot be negative');
      return;
    }

    if (productToEdit) {
      onSave({ ...productToEdit, name, quantity });
    } else {
      onSave({ name, quantity });
    }

    // Reset form
    setName('');
    setQuantity(0);
  };

  const handleCancel = () => {
    setName('');
    setQuantity(0);
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl mb-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{productToEdit ? '✏️' : '➕'}</span>
        </div>
        <h2 className="text-3xl font-bold text-white">
          {productToEdit ? 'Edit Product' : 'Add New Product'}
        </h2>
      </div>
      
      <div className="mb-6 relative">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/15 text-white placeholder-gray-400 text-lg shadow-lg"
          placeholder="Enter product name"
        />
      </div>

      <div className="mb-8 relative">
        <label htmlFor="quantity" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="0"
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400/50 transition-all duration-300 hover:bg-white/15 text-white placeholder-gray-400 text-lg shadow-lg"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 shadow-xl text-lg relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {productToEdit ? '✓ Update' : '+ Add'} Product
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        {productToEdit && (
          <button
            type="button"
            onClick={handleCancel}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 border-2 border-white/30 transform hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 shadow-xl text-lg"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
