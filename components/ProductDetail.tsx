import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Check, ChevronLeft, ChevronRight, Truck, Shield, RotateCcw, Package, MessageCircle, ArrowLeft, Menu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailProps {
  product: any;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const discountPercentage = Math.round(((product.mrp - product.surplusPrice) / product.mrp) * 100);
  const savings = product.mrp - product.surplusPrice;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in the ${product.name} (MOQ: ${product.moq} units) at ₹${product.surplusPrice.toLocaleString()} per unit. Can you provide more details about this surplus deal?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header - Mobile Optimized */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose} 
                className="rounded-full flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-xl font-semibold truncate">{product.name}</h1>
                <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                  <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                    Authentic
                  </Badge>
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                    Bulk Deal
                  </Badge>
                </div>
              </div>
            </div>
            <Button 
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-6 ml-2 flex-shrink-0"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Get Deal</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-12">
          
          {/* Image Gallery */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square rounded-lg sm:rounded-2xl overflow-hidden bg-gray-50 border border-border/50">
                <ImageWithFallback
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium">
                  {discountPercentage}% OFF
                </Badge>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border border-border/50 rounded-full w-12 h-12"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border border-border/50 rounded-full w-12 h-12"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery - Horizontal scroll on mobile */}
            {product.images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-primary shadow-md' 
                        : 'border-border/50 hover:border-primary/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 bg-accent/30 rounded-lg sm:rounded-xl">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium">Free Delivery</span>
                <span className="text-xs text-muted-foreground hidden sm:block">On bulk orders</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium">Warranty</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Manufacturer warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium">Easy Returns</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Hassle-free policy</span>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Pricing Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-2xl sm:text-4xl font-bold text-primary">
                  ₹{product.surplusPrice.toLocaleString()}
                </span>
                <span className="text-lg sm:text-xl text-muted-foreground line-through">
                  ₹{product.mrp.toLocaleString()}
                </span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                <Badge variant="destructive" className="px-2 sm:px-3 py-1">
                  Save {discountPercentage}%
                </Badge>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  You save ₹{savings.toLocaleString()} per unit
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200 gap-2">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-blue-900">Minimum Order Quantity</span>
                </div>
                <span className="text-base sm:text-lg font-bold text-blue-600">{product.moq} units</span>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Product Description</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {product.detailedDescription || product.description}
              </p>
            </div>

            <Separator />

            {/* Key Features */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Key Features</h3>
              <div className="grid gap-2 sm:gap-3">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications - Collapsible on mobile */}
            {product.specifications && (
              <>
                <Separator />
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold">Specifications</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border/50 last:border-0 gap-1">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">{key}</span>
                        <span className="text-sm sm:text-base font-medium">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator />

            {/* WhatsApp CTA - Sticky on mobile */}
            <div className="sticky bottom-0 sm:static bg-background sm:bg-transparent p-4 sm:p-0 -mx-4 sm:mx-0 border-t sm:border-t-0 border-border/50 sm:border-transparent">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                      <h4 className="text-sm sm:text-base font-semibold text-green-900">Connect for Instant Deal</h4>
                    </div>
                    
                    <ul className="text-xs sm:text-sm text-green-700 space-y-1 ml-8 sm:ml-9">
                      <li>• Get real-time pricing and availability</li>
                      <li>• Direct communication with our deals team</li>
                      <li>• Instant responses to your queries</li>
                      <li>• Custom bulk pricing for larger orders</li>
                    </ul>
                    
                    <Button 
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white mt-3 sm:mt-4 h-12 sm:h-auto"
                      onClick={handleWhatsAppContact}
                    >
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Start WhatsApp Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="text-center p-3 sm:p-4 bg-accent/30 rounded-lg mb-20 sm:mb-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Surplus Deal:</strong> Limited time offer • Authentic products • Bulk pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}