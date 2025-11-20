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
  const [quantity, setQuantity] = useState<number | ''>('');
  const [errors, setErrors] = useState<{ name?: string; quantity?: string }>({});

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setQuantity(productToEdit.quantity);
      setErrors({});
    }
  }, [productToEdit]);

  const validateForm = (): boolean => {
    const newErrors: { name?: string; quantity?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Product name is required';
    }

    if (quantity === '' || quantity <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const finalQuantity = quantity === '' ? 0 : quantity;

    if (productToEdit) {
      onSave({ ...productToEdit, name, quantity: finalQuantity });
    } else {
      onSave({ name, quantity: finalQuantity });
    }

    // Reset form
    setName('');
    setQuantity('');
    setErrors({});
  };

  const handleCancel = () => {
    setName('');
    setQuantity('');
    setErrors({});
    if (onCancel) onCancel();
  };

  const handleNameChange = (value: string | number) => {
    setName(value as string);
    if (errors.name) {
      setErrors({ ...errors, name: undefined });
    }
  }
  const handleQuantityChange = (value: string | number) => {
    if (value === '' || value === 0) {
      setQuantity('');
    } else {
      setQuantity(Number(value));
    }
    if (errors.quantity) {
      setErrors({ ...errors, quantity: undefined });
    }
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

        <div className='mb-6'>
          <FormField
            id="name"
            label="Product Name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter product name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-2 ml-1 flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              {errors.name}
            </p>
          )}
        </div>

        <div className='mb-6'>
          <FormField
            id="quantity"
            label="Quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
          />
          {errors.quantity && (
            <p className="text-red-400 text-sm mt-2 ml-1 flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              {errors.quantity}
            </p>
          )}
        </div>

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
