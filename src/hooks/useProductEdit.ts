import { useState } from 'react';
import type { Product } from '../types/Product';

export const useProductEdit = () => {
    const [editingProduct, setEditingProduct] = useState<Product | undefined>();

    const startEdit = (product: Product) => {
        setEditingProduct(product);
    };

    const cancelEdit = () => {
        setEditingProduct(undefined);
    };

    const clearEdit = () => {
        setEditingProduct(undefined);
    };

    return {
        editingProduct,
        startEdit,
        cancelEdit,
        clearEdit,
    };
};

