import { useState } from 'react';
import type { Product } from '../types/Product';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setProducts([...products, product]);
    }

    const updateProduct = (updatedProduct: Product) => {
        setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    }

    const deleteProduct = (id: string) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    }

    const updateQuantity = (id: string, newQuantity: number) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, quantity: Math.max(0, newQuantity) } : p));
    }

    return {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        updateQuantity,
    };

}