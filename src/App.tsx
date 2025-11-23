import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import ProductMaintenancePage from './pages/ProductMaintenancePage';
import ProductListDetailsPage from './pages/ProductListDetailsPage';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductListDetailsPage />} />
          <Route path="/maintenance" element={<ProductMaintenancePage />} />
          <Route path="/maintenance/:id" element={<ProductMaintenancePage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
