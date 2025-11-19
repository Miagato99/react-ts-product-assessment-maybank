import { useState } from 'react';
import type { Product } from './types/Product';
import ProductForm from './components/organisms/ProductForm';
import ProductList from './components/organisms/ProductList';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  // Generate unique ID for new products
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Add or update product
  const handleSaveProduct = (productData: Omit<Product, 'id'> | Product) => {
    if ('id' in productData) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === productData.id ? productData : p
      ));
      setEditingProduct(undefined);
    } else {
      // Add new product
      const newProduct: Product = {
        ...productData,
        id: generateId(),
      };
      setProducts([...products, newProduct]);
    }
  };

  // Delete product
  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Edit product
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  // Change quantity
  const handleQuantityChange = (id: string, newQuantity: number) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, quantity: Math.max(0, newQuantity) } : p
    ));
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingProduct(undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl mb-4 mx-auto transform hover:rotate-6 transition-transform duration-300">
              <span className="text-4xl">📦</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Product Management
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Streamline your inventory with our elegant and intuitive system
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">Real-time</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-400/30">Modern</span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-400/30">Efficient</span>
          </div>
        </div>

        <ProductForm 
          productToEdit={editingProduct}
          onSave={handleSaveProduct}
          onCancel={handleCancelEdit}
        />

        <ProductList
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          onQuantityChange={handleQuantityChange}
        />
      </div>
    </div>
  );
}

export default App;
