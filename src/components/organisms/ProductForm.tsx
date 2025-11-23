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
  const [price, setPrice] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [errors, setErrors] = useState<{ name?: string; price?: string; description?: string; quantity?: string }>({});

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
      setDescription(productToEdit.description);
      setQuantity(productToEdit.quantity);
      setErrors({});
    }
  }, [productToEdit]);

  const validateForm = (): boolean => {
    const newErrors: { name?: string; price?: string; description?: string; quantity?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Product name is required';
    }

    if (price === '' || price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
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
    const finalPrice = price === '' ? 0 : price;

    if (productToEdit) {
      onSave({ ...productToEdit, name, price: finalPrice, description, quantity: finalQuantity });
    } else {
      onSave({ name, price: finalPrice, description, quantity: finalQuantity });
    }

    // Reset form
    setName('');
    setPrice('');
    setDescription('');
    setQuantity('');
    setErrors({});
  };

  const handleCancel = () => {
    setName('');
    setPrice('');
    setDescription('');
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

  const handlePriceChange = (value: string | number) => {
    if (value === '' || value === 0) {
      setPrice('');
    } else {
      setPrice(Number(value));
    }
    if (errors.price) {
      setErrors({ ...errors, price: undefined });
    }
  };

  const handleDescriptionChange = (value: string | number) => {
    setDescription(value as string);
    if (errors.description) {
      setErrors({ ...errors, description: undefined });
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
    <Card className="p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <span className="text-xl">{productToEdit ? '✏️' : '➕'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            {productToEdit ? 'Edit Product' : 'Add New Product'}
          </h2>
        </div>

        <div className='mb-4'>
          <FormField
            id="name"
            label="Product Name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter product name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span>
              {errors.name}
            </p>
          )}
        </div>

        <div className='mb-4'>
          <FormField
            id="price"
            label="Price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            min="0"
            placeholder="Enter price in RM"
          />
          {errors.price && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span>
              {errors.price}
            </p>
          )}
        </div>

        <div className='mb-4'>
          <FormField
            id="description"
            label="Description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter product description"
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span>
              {errors.description}
            </p>
          )}
        </div>

        <div className='mb-4'>
          <FormField
            id="quantity"
            label="Quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
          />
          {errors.quantity && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <span>⚠️</span>
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
