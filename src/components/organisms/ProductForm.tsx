import React, { useState, useEffect } from 'react';
import type { Product } from '../../types/Product';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

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
    <Card className="p-8 mb-8 group">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">{productToEdit ? '✏️' : '➕'}</span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            {productToEdit ? 'Edit Product' : 'Add New Product'}
          </h2>
        </div>

        <FormField
          id="name"
          label="Product Name"
          type="text"
          value={name}
          onChange={(value) => setName(value as string)}
          placeholder="Enter product name"
        />

        <FormField
          id="quantity"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(value) => setQuantity(value as number)}
          min="0"
        />

        <div className="flex gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="flex-1"
          >
            {productToEdit ? '✓ Update' : '+ Add'} Product
          </Button>
          {productToEdit && (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default ProductForm;
