import { Gift, Percent, Star } from 'lucide-react';
import { Card } from './ui/card';
import { getTotalDealsCount } from './ProductsSection';

export function HeroSection() {
  const totalDeals = getTotalDealsCount();
  
  return (
    <section className="bg-gradient-to-r from-primary/5 to-accent/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to SURPLUS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Your premier destination for exclusive surplus deals and corporate gifting solutions. 
            Discover premium products at unbeatable prices - up to 85% OFF MRP!
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">{totalDeals} Active Deals Available</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Corporate Gifting</h3>
            <p className="text-sm text-muted-foreground">
              Perfect for employee appreciation, client gifts, and special occasions
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <Percent className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Surplus Deals</h3>
            <p className="text-sm text-muted-foreground">
              Authentic products at up to 85% OFF MRP - incredible savings guaranteed
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              All products are authentic, quality-checked, and ready for immediate delivery
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}