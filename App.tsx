import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ProductCatalogPage } from './components/ProductCatalogPage';
import { ProductDetail } from './components/ProductDetail';

type PageType = 'landing' | 'catalog' | 'product-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Navigation handlers
  const navigateToLanding = () => {
    setCurrentPage('landing');
    setSelectedProduct(null);
    setSelectedCategory(null);
  };

  const navigateToProducts = () => {
    setCurrentPage('catalog');
    setSelectedProduct(null);
  };

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleProductDetailClose = () => {
    setSelectedProduct(null);
    setCurrentPage('catalog');
  };

  // Render based on current page
  switch (currentPage) {
    case 'landing':
      return <LandingPage onNavigateToProducts={navigateToProducts} />;
    
    case 'catalog':
      return (
        <ProductCatalogPage
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          onProductSelect={handleProductSelect}
          onNavigateToLanding={navigateToLanding}
        />
      );
    
    case 'product-detail':
      return (
        <ProductDetail
          product={selectedProduct}
          onClose={handleProductDetailClose}
        />
      );
    
    default:
      return <LandingPage onNavigateToProducts={navigateToProducts} />;
  }
}