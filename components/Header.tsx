import { ShoppingBag, Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-primary mr-3" />
            <div>
              <h1 className="text-xl font-bold text-primary">SURPLUS</h1>
              <p className="text-xs text-muted-foreground">Deals & Gifts</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@surplus.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}