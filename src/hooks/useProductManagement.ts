import type { Product } from '../types/Product';
import { useProducts } from './useProducts';
import { useProductEdit } from './useProductEdit';
import { useProductId } from './useProductId';

export const useProductManagement = () => {
    const { products, addProduct, updateProduct, deleteProduct, updateQuantity } = useProducts();
    const { editingProduct, startEdit, cancelEdit, clearEdit } = useProductEdit();
    const { generateId } = useProductId();
    
    const saveProduct = (productData : Omit<Product, 'id'> | Product) => {
        if ('id' in productData) {
            updateProduct(productData);
            clearEdit();
        } else {
            // Add new product
            const newProduct: Product = {
                ...productData,
                id: generateId(),
            }
            addProduct(newProduct);
        }
    }; 

    return {
        products,
        editingProduct,
        saveProduct,
        deleteProduct,
        editProduct: startEdit,
        updateQuantity,
        cancelEdit,
    };
}

