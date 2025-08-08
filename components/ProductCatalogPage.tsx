import { useState } from 'react';
import { Button } from './ui/button';
import { HeroSection } from './HeroSection';
import { CategoriesSection } from './CategoriesSection';
import { ProductsSection } from './ProductsSection';
import { ArrowLeft, Package } from 'lucide-react';

interface ProductCatalogPageProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  onProductSelect: (product: any) => void;
  onNavigateToLanding: () => void;
}

export function ProductCatalogPage({ 
  selectedCategory, 
  onCategorySelect, 
  onProductSelect,
  onNavigateToLanding 
}: ProductCatalogPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header for Product Catalog */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onNavigateToLanding}
                className="rounded-full flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900">Surplus</h1>
                  <p className="text-xs sm:text-sm text-gray-600">Product Catalog</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1000+ Products</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>85% Off</span>
                </div>
              </div>
              
              <Button 
                variant="outline"
                onClick={onNavigateToLanding}
                className="px-3 sm:px-4"
              >
                <span className="hidden sm:inline">Corporate Solutions</span>
                <span className="sm:hidden">Solutions</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <HeroSection />
      <CategoriesSection 
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
      <ProductsSection 
        selectedCategory={selectedCategory}
        onProductSelect={onProductSelect}
      />
      
      {/* Footer CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-3xl font-bold mb-4">
            Need Help with Bulk Orders?
          </h3>
          <p className="text-purple-100 mb-6 sm:mb-8 text-sm sm:text-base">
            Get personalized assistance for your corporate gifting requirements
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={onNavigateToLanding}
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            View Corporate Solutions
            <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
          </Button>
        </div>
      </section>
    </div>
  );
}