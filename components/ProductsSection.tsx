import { ProductCard } from './ProductCard';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'electronics',
    mrp: 15000,
    surplusPrice: 2250,
    moq: 150,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=400&fit=crop'
    ],
    description: 'Experience premium audio like never before with these professional-grade wireless headphones. Featuring industry-leading noise cancellation technology and superior sound quality.',
    detailedDescription: 'These premium wireless headphones deliver exceptional audio performance with advanced noise-cancelling technology. Perfect for music enthusiasts, professionals, and travelers who demand the best audio experience. The comfortable over-ear design ensures hours of comfortable listening, while the long-lasting battery keeps you connected all day.',
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack'
    },
    features: ['Active Noise Cancellation', 'Wireless Connectivity', '30-hour Battery Life', 'Premium Sound Quality', 'Comfortable Design', 'Quick Charge']
  },
  {
    id: 2,
    name: 'Designer Leather Handbag',
    category: 'fashion',
    mrp: 8000,
    surplusPrice: 1200,
    moq: 200,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop'
    ],
    description: 'Elegant leather handbag perfect for professional and casual occasions.',
    detailedDescription: 'Crafted from premium genuine leather, this designer handbag combines style and functionality. The elegant design makes it perfect for both professional meetings and casual outings. Multiple compartments provide organized storage for all your essentials.',
    specifications: {
      'Material': 'Genuine Leather',
      'Dimensions': '32cm x 25cm x 12cm',
      'Strap Length': 'Adjustable 60-120cm',
      'Closure': 'Magnetic snap',
      'Interior': 'Fabric lined',
      'Care': 'Leather conditioner recommended'
    },
    features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Designer Quality', 'Magnetic Closure', 'Premium Lining']
  },
  {
    id: 3,
    name: 'Smart Coffee Maker',
    category: 'home',
    mrp: 12000,
    surplusPrice: 1800,
    moq: 100,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1585664811087-47f65abbf12d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
    ],
    description: 'WiFi-enabled smart coffee maker with programmable settings.',
    detailedDescription: 'Transform your morning routine with this intelligent coffee maker. WiFi connectivity allows you to schedule brewing from anywhere, while precise temperature control ensures the perfect cup every time. The auto-clean function maintains hygiene with minimal effort.',
    specifications: {
      'Capacity': '12 cups',
      'Power': '1200W',
      'Connectivity': 'WiFi 2.4GHz',
      'Temperature Range': '185°F - 205°F',
      'Brewing Time': '5-7 minutes',
      'Water Tank': 'Removable 1.8L'
    },
    features: ['WiFi Connectivity', 'Programmable Timer', 'Temperature Control', 'Auto-Clean Function', 'Mobile App Control', 'Large Capacity']
  },
  {
    id: 4,
    name: 'Professional Notebook Set',
    category: 'books',
    mrp: 2500,
    surplusPrice: 375,
    moq: 500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
    ],
    description: 'Premium leather-bound notebook set perfect for professionals.',
    detailedDescription: 'Elevate your note-taking experience with this premium leather-bound notebook set. Perfect for professionals, students, and creatives who appreciate quality stationery. The dotted page layout provides flexibility for writing, sketching, and organizing thoughts.',
    specifications: {
      'Set Contents': '3 notebooks',
      'Page Count': '192 pages each',
      'Paper Weight': '120gsm',
      'Size': 'A5 (21cm x 14cm)',
      'Binding': 'Thread-bound',
      'Cover': 'Genuine leather'
    },
    features: ['Leather Bound', 'Dotted Pages', 'Elastic Band', 'Pocket Size', 'Premium Paper', 'Thread Binding']
  },
  {
    id: 5,
    name: 'Fitness Tracker Watch',
    category: 'sports',
    mrp: 6000,
    surplusPrice: 900,
    moq: 250,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=400&fit=crop'
    ],
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    detailedDescription: 'Take control of your fitness journey with this advanced tracker. Monitor your health metrics 24/7, track workouts with built-in GPS, and gain insights into your sleep patterns. The long-lasting battery ensures you stay connected to your health goals.',
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, GPS, Accelerometer',
      'Compatibility': 'iOS/Android',
      'Weight': '45g'
    },
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Sleep Analysis', '7-day Battery', 'Water Resistant', 'Multiple Sports Modes']
  },
  {
    id: 6,
    name: 'Luxury Skincare Set',
    category: 'beauty',
    mrp: 4500,
    surplusPrice: 675,
    moq: 300,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=400&fit=crop'
    ],
    description: 'Complete skincare routine set with natural ingredients.',
    detailedDescription: 'Pamper your skin with this luxury skincare collection featuring natural, dermatologist-tested ingredients. This complete routine includes cleanser, toner, serum, and moisturizer, all formulated to work together for optimal results and healthy, radiant skin.',
    specifications: {
      'Set Contains': 'Cleanser, Toner, Serum, Moisturizer',
      'Skin Type': 'All skin types',
      'Key Ingredients': 'Hyaluronic acid, Vitamin C, Retinol',
      'Volume': '50ml each',
      'Shelf Life': '24 months',
      'Origin': 'Made in France'
    },
    features: ['Natural Ingredients', 'Complete Routine', 'Dermatologist Tested', 'Anti-Aging Formula', 'Paraben Free', 'Cruelty Free']
  },
  {
    id: 7,
    name: 'Gaming Mechanical Keyboard',
    category: 'electronics',
    mrp: 8500,
    surplusPrice: 1275,
    moq: 180,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop'
    ],
    description: 'Professional gaming mechanical keyboard with RGB backlighting.',
    detailedDescription: 'Experience superior typing and gaming performance with this mechanical keyboard featuring tactile switches, customizable RGB lighting, and durable construction designed for intensive use.',
    specifications: {
      'Switch Type': 'Mechanical Blue',
      'Backlighting': 'RGB',
      'Layout': 'Full-size 104 keys',
      'Connection': 'USB-C',
      'Durability': '50 million keystrokes',
      'Weight': '1.2kg'
    },
    features: ['Mechanical Switches', 'RGB Backlighting', 'Anti-Ghosting', 'Durable Build', 'Ergonomic Design', 'Customizable Keys']
  },
  {
    id: 8,
    name: 'Casual Denim Jacket',
    category: 'fashion',
    mrp: 3500,
    surplusPrice: 525,
    moq: 400,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop'
    ],
    description: 'Classic denim jacket perfect for casual and smart-casual wear.',
    detailedDescription: 'A timeless denim jacket crafted from premium cotton denim. Features classic styling with modern fit, making it perfect for layering and versatile styling options.',
    specifications: {
      'Material': '100% Cotton Denim',
      'Fit': 'Regular',
      'Closure': 'Button front',
      'Pockets': '2 chest, 2 side',
      'Care': 'Machine washable',
      'Origin': 'Made in India'
    },
    features: ['Premium Denim', 'Classic Styling', 'Comfortable Fit', 'Durable Construction', 'Versatile Design', 'Easy Care']
  },
  {
    id: 9,
    name: 'Non-stick Cookware Set',
    category: 'home',
    mrp: 9500,
    surplusPrice: 1425,
    moq: 120,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1584269600519-112e9ac5ff83?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop'
    ],
    description: 'Premium non-stick cookware set for modern kitchens.',
    detailedDescription: 'Complete your kitchen with this professional-grade non-stick cookware set. Features even heat distribution, scratch-resistant coating, and ergonomic handles for comfortable cooking.',
    specifications: {
      'Set Contains': '5 pieces',
      'Material': 'Aluminum with non-stick coating',
      'Coating': 'PFOA-free ceramic',
      'Handle': 'Heat-resistant silicone',
      'Compatibility': 'All stovetops including induction',
      'Warranty': '2 years'
    },
    features: ['Non-stick Coating', 'Even Heat Distribution', 'Scratch Resistant', 'Ergonomic Handles', 'Induction Compatible', 'Easy Cleaning']
  },
  {
    id: 10,
    name: 'Yoga Mat Premium',
    category: 'sports',
    mrp: 2800,
    surplusPrice: 420,
    moq: 350,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-a5b4e3e50c2d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    ],
    description: 'Eco-friendly premium yoga mat with superior grip.',
    detailedDescription: 'Practice yoga in comfort with this premium eco-friendly mat. Made from natural rubber with excellent grip and cushioning, perfect for all types of yoga practices.',
    specifications: {
      'Material': 'Natural rubber',
      'Dimensions': '183cm x 61cm',
      'Thickness': '6mm',
      'Weight': '2.5kg',
      'Texture': 'Non-slip surface',
      'Care': 'Easy to clean'
    },
    features: ['Eco-friendly Material', 'Superior Grip', 'Extra Cushioning', 'Non-slip Surface', 'Durable Construction', 'Easy to Clean']
  }
];

// Utility functions for counting deals
export const getTotalDealsCount = () => products.length;

export const getCategoryDealsCount = (category: string) => {
  return products.filter(product => product.category === category).length;
};

export const getAllProducts = () => products;

interface ProductsSectionProps {
  selectedCategory: string | null;
  onProductSelect: (product: any) => void;
}

export function ProductsSection({ selectedCategory, onProductSelect }: ProductsSectionProps) {
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <section className="py-16 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available Products</h2>
          <p className="text-muted-foreground mb-2">
            {selectedCategory 
              ? `Showing ${filteredProducts.length} products in selected category`
              : `Discover our ${products.length} amazing surplus deals`
            }
          </p>
          <p className="text-sm text-muted-foreground">
            All products have minimum order quantities (MOQ) ranging from 100-500 units • Perfect for bulk purchases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductSelect={onProductSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}