import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getCategoryDealsCount, getTotalDealsCount } from './ProductsSection';

const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion & Accessories', icon: '👕' },
  { id: 'home', name: 'Home & Kitchen', icon: '🏠' },
  { id: 'books', name: 'Books & Stationery', icon: '📚' },
  { id: 'sports', name: 'Sports & Fitness', icon: '⚽' },
  { id: 'beauty', name: 'Beauty & Personal Care', icon: '💄' },
];

interface CategoriesSectionProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function CategoriesSection({ selectedCategory, onCategorySelect }: CategoriesSectionProps) {
  const getCategoryCount = (categoryId: string) => {
    return categoryId === 'all' ? getTotalDealsCount() : getCategoryDealsCount(categoryId);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const dealCount = getCategoryCount(category.id);
            const isSelected = selectedCategory === category.id || (selectedCategory === null && category.id === 'all');
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? 'default' : 'outline'}
                onClick={() => onCategorySelect(category.id === 'all' ? null : category.id)}
                className="flex items-center gap-2 h-12 px-6 relative"
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <Badge 
                  variant={isSelected ? 'secondary' : 'default'} 
                  className="ml-2 text-xs"
                >
                  {dealCount}
                </Badge>
              </Button>
            );
          })}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Browse {getTotalDealsCount()} amazing deals across all categories
          </p>
        </div>
      </div>
    </section>
  );
}