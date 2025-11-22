import React from 'react';
import { useProductManagement } from '../hooks/useProductManagement';
import ProductForm from '../components/organisms/ProductForm';
import ProductList from '../components/organisms/ProductList';

const ProductManagementPage: React.FC = () => {
    const {
        products,
        editingProduct,
        saveProduct,
        deleteProduct,
        editProduct,
        updateQuantity,
        cancelEdit,
    } = useProductManagement();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg shadow-lg mb-4">
                        <span className="text-3xl">📦</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Product Management
                    </h1>
                    <p className="text-gray-400">
                        Manage your inventory efficiently
                    </p>
                </div>

                <ProductForm
                    productToEdit={editingProduct}
                    onSave={saveProduct}
                    onCancel={cancelEdit}
                />

                <ProductList
                    products={products}
                    onEdit={editProduct}
                    onDelete={deleteProduct}
                    onQuantityChange={updateQuantity}
                    editingProductId={editingProduct?.id}
                />
            </div>
        </div>
    );
}
export default ProductManagementPage;