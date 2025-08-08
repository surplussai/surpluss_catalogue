export interface Product {
  id: string;
  title: string;
  category: string;
  mrp: number;
  salePrice: number;
  savings: string;
  moq: number;
  description: string;
  image: string;
  specifications: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    icon: 'Smartphone',
    description: 'Latest tech gadgets and electronic accessories'
  },
  {
    id: 'kitchen',
    name: 'Kitchen & Home',
    icon: 'ChefHat',
    description: 'Premium kitchen appliances and home essentials'
  },
  {
    id: 'travel',
    name: 'Travel & Luggage',
    icon: 'Luggage',
    description: 'Professional travel accessories and luggage sets'
  },
  {
    id: 'beauty',
    name: 'Personal Care',
    icon: 'Heart',
    description: 'Skincare and personal care gift sets'
  },
  {
    id: 'office',
    name: 'Office Supplies',
    icon: 'Briefcase',
    description: 'Professional office and work essentials'
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    icon: 'Dumbbell',
    description: 'Sports equipment and fitness accessories'
  }
];

export const products: Product[] = [
  {
    id: 'bt-speaker-001',
    title: 'Premium Bluetooth Speaker Set',
    category: 'electronics',
    mrp: 2500,
    salePrice: 375,
    savings: '85% OFF',
    moq: 200,
    description: 'High-quality wireless Bluetooth speakers perfect for corporate gifts. Premium sound quality with modern design.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
    specifications: ['Bluetooth 5.0', '10W Output', '8-hour battery', 'Water resistant']
  },
  {
    id: 'trolley-001',
    title: 'Executive Trolley Bags',
    category: 'travel',
    mrp: 4000,
    salePrice: 600,
    savings: '85% OFF',
    moq: 150,
    description: 'Durable trolley bags ideal for business travel and corporate gifting programs.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    specifications: ['Hard shell design', '360° wheels', 'TSA lock', '55cm cabin size']
  },
  {
    id: 'kitchen-001',
    title: 'Multi-Function Kitchen Appliance',
    category: 'kitchen',
    mrp: 3500,
    salePrice: 525,
    savings: '85% OFF',
    moq: 100,
    description: 'Versatile kitchen appliance perfect for employee appreciation and festive gifting.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    specifications: ['1000W power', '5 cooking modes', 'Non-stick coating', '2-year warranty']
  },
  {
    id: 'skincare-001',
    title: 'Premium Skincare Gift Set',
    category: 'beauty',
    mrp: 1800,
    salePrice: 270,
    savings: '85% OFF',
    moq: 300,
    description: 'Luxury skincare sets ideal for corporate gifting and employee wellness programs.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    specifications: ['Natural ingredients', 'Dermatologist tested', 'Complete skincare routine', 'Premium packaging']
  },
  {
    id: 'powerbank-001',
    title: 'Wireless Power Bank 10000mAh',
    category: 'electronics',
    mrp: 2200,
    salePrice: 330,
    savings: '85% OFF',
    moq: 250,
    description: 'High-capacity wireless power banks perfect for corporate promotional campaigns.',
    image: 'https://images.unsplash.com/photo-1609592719906-82d0ad2c6890?w=400&h=300&fit=crop',
    specifications: ['10000mAh capacity', 'Wireless charging', 'Fast charging', 'LED display']
  },
  {
    id: 'desk-organizer-001',
    title: 'Executive Desk Organizer Set',
    category: 'office',
    mrp: 1200,
    salePrice: 180,
    savings: '85% OFF',
    moq: 200,
    description: 'Professional desk organizers ideal for office setup and corporate gifts.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    specifications: ['Premium wood finish', 'Multiple compartments', 'Pen holder included', 'Cable management']
  },
  {
    id: 'fitness-tracker-001',
    title: 'Smart Fitness Tracker',
    category: 'fitness',
    mrp: 3000,
    salePrice: 450,
    savings: '85% OFF',
    moq: 150,
    description: 'Advanced fitness trackers perfect for employee wellness programs and health initiatives.',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop',
    specifications: ['Heart rate monitoring', '14-day battery', 'Water resistant', 'Sleep tracking']
  },
  {
    id: 'coffee-mug-001',
    title: 'Insulated Coffee Mug Set',
    category: 'kitchen',
    mrp: 800,
    salePrice: 120,
    savings: '85% OFF',
    moq: 500,
    description: 'Premium insulated mugs perfect for bulk corporate gifting and employee appreciation.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    specifications: ['Double wall insulation', 'Leak-proof lid', 'Temperature retention', 'BPA-free material']
  },
  {
    id: 'notebook-001',
    title: 'Premium Leather Notebooks',
    category: 'office',
    mrp: 600,
    salePrice: 90,
    savings: '85% OFF',
    moq: 400,
    description: 'High-quality leather-bound notebooks ideal for corporate gifts and promotional items.',
    image: 'https://images.unsplash.com/photo-1517971129774-39b2fbc35c87?w=400&h=300&fit=crop',
    specifications: ['Genuine leather cover', '200 pages', 'Ruled pages', 'Elastic closure']
  },
  {
    id: 'yoga-mat-001',
    title: 'Eco-Friendly Yoga Mat',
    category: 'fitness',
    mrp: 1500,
    salePrice: 225,
    savings: '85% OFF',
    moq: 100,
    description: 'Premium eco-friendly yoga mats perfect for employee wellness and fitness programs.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    specifications: ['Eco-friendly material', 'Non-slip surface', '6mm thickness', 'Carrying strap included']
  },
  {
    id: 'headphones-001',
    title: 'Noise-Canceling Headphones',
    category: 'electronics',
    mrp: 5000,
    salePrice: 750,
    savings: '85% OFF',
    moq: 120,
    description: 'Professional noise-canceling headphones perfect for corporate gifts and remote work setups.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    specifications: ['Active noise cancellation', '30-hour battery', 'Wireless connectivity', 'Premium comfort']
  },
  {
    id: 'lunch-box-001',
    title: 'Stainless Steel Lunch Box',
    category: 'kitchen',
    mrp: 900,
    salePrice: 135,
    savings: '85% OFF',
    moq: 300,
    description: 'Durable stainless steel lunch boxes ideal for employee wellness and sustainable gifting.',
    image: 'https://images.unsplash.com/photo-1550948537-6f7a4cd49bb1?w=400&h=300&fit=crop',
    specifications: ['Food-grade steel', 'Leak-proof design', 'Multi-compartment', 'Easy to clean']
  }
];

// Utility functions
export const getProductsByCategory = (category: string | null): Product[] => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const calculateSavings = (mrp: number, salePrice: number): number => {
  return Math.round(((mrp - salePrice) / mrp) * 100);
};