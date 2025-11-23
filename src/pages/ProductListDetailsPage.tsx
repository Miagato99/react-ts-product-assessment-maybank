import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import ProductList from '../components/organisms/ProductList';
import Button from '../components/atoms/Button';

const ProductListDetailsPage: React.FC = () => {
    const navigate = useNavigate();
    const {
        products,
        deleteProduct,
        updateQuantity,
    } = useProductContext();

    const handleEdit = (product: any) => {
        navigate(`/maintenance/${product.id}`);
    };

    const handleAddNew = () => {
        navigate('/maintenance');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg shadow-lg mb-4">
                        <span className="text-3xl">📋</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Product List Details
                    </h1>
                    <p className="text-gray-400">
                        View and manage your product inventory
                    </p>
                </div>

                <div className="mb-6">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleAddNew}
                        className="w-full sm:w-auto"
                    >
                        + Add New Product
                    </Button>
                </div>

                <ProductList
                    products={products}
                    onEdit={handleEdit}
                    onDelete={deleteProduct}
                    onQuantityChange={updateQuantity}
                />
            </div>
        </div>
    );
};

export default ProductListDetailsPage;
