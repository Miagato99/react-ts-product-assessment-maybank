import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import ProductForm from '../components/organisms/ProductForm';

const ProductMaintenancePage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const {
        products,
        saveProduct,
    } = useProductContext();

    const editingProduct = id ? products.find(p => p.id === id) : undefined;

    const handleSave = (productData: any) => {
        saveProduct(productData);
        navigate('/products');
    };

    const handleCancel = () => {
        navigate('/products');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg shadow-lg mb-4">
                        <span className="text-3xl">📦</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Product Maintenance
                    </h1>
                    <p className="text-gray-400">
                        {editingProduct ? 'Update your product information' : 'Create a new product'}
                    </p>
                </div>

                <ProductForm
                    productToEdit={editingProduct}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
};

export default ProductMaintenancePage;
