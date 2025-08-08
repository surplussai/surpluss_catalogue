import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Eye, Heart, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: any;
  onProductSelect: (product: any) => void;
}

export function ProductCard({ product, onProductSelect }: ProductCardProps) {
  const discountPercentage = Math.round(((product.mrp - product.surplusPrice) / product.mrp) * 100);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
          {discountPercentage}% OFF
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ₹{product.surplusPrice.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.mrp.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Surplus Deal Price
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Package className="h-3 w-3" />
              <span>MOQ: {product.moq}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={() => onProductSelect(product)}
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details & Get Deal
        </Button>
      </CardFooter>
    </Card>
  );
}