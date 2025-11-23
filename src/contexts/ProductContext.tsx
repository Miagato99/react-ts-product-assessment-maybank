import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product';
import { useProducts } from '../hooks/useProducts';
import { useProductEdit } from '../hooks/useProductEdit';
import { useProductId } from '../hooks/useProductId';

interface ProductContextType {
    products: Product[];
    editingProduct: Product | undefined;
    saveProduct: (productData: Omit<Product, 'id'> | Product) => void;
    deleteProduct: (id: string) => void;
    editProduct: (product: Product) => void;
    updateQuantity: (id: string, newQuantity: number) => void;
    cancelEdit: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { products, addProduct, updateProduct, deleteProduct, updateQuantity } = useProducts();
    const { editingProduct, startEdit, cancelEdit, clearEdit } = useProductEdit();
    const { generateId } = useProductId();

    const saveProduct = (productData: Omit<Product, 'id'> | Product) => {
        if ('id' in productData) {
            updateProduct(productData);
            clearEdit();
        } else {
            const newProduct: Product = {
                ...productData,
                id: generateId(),
            }
            addProduct(newProduct);
        }
    };

    const value: ProductContextType = {
        products,
        editingProduct,
        saveProduct,
        deleteProduct,
        editProduct: startEdit,
        updateQuantity,
        cancelEdit,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
