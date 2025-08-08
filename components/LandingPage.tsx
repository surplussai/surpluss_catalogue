import { Button } from './ui/button';
import { BenefitsSection } from './BenefitsSection';
import { ArrowRight, Package } from 'lucide-react';

interface LandingPageProps {
  onNavigateToProducts: () => void;
}

export function LandingPage({ onNavigateToProducts }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header for Landing */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Package className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Surplus</h1>
                <p className="text-xs sm:text-sm text-gray-600">Corporate Gifting Solutions</p>
              </div>
            </div>
            
            <Button 
              onClick={onNavigateToProducts}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6"
            >
              <span className="hidden sm:inline">Browse Products</span>
              <span className="sm:hidden">Products</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <BenefitsSection onNavigateToProducts={onNavigateToProducts} />

      {/* Call-to-Action to Products */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Explore Our <span className="text-purple-600">Product Range</span>?
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
            Discover thousands of premium products available at liquidation prices. 
            Browse by category and find the perfect items for your corporate gifting needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <Button 
              size="lg"
              onClick={onNavigateToProducts}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg w-full sm:w-auto"
            >
              Browse Product Catalog
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1000+ Products</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Bulk Pricing</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>85% Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Package className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg">Surplus</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for corporate gifting solutions with premium products at liquidation prices.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={onNavigateToProducts}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Product Catalog
                </button>
                <div className="text-gray-400">Corporate Solutions</div>
                <div className="text-gray-400">Bulk Pricing</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>📞 +91 79 7274 8153</div>
                <div>📧 nidhi@surpluss.co</div>
                <div>🌍 Pan-India Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 Surplus. All rights reserved. | Premium Corporate Gifting Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}