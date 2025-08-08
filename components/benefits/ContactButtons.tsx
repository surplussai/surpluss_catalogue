import { Button } from '../ui/button';
import { Phone, Mail, Zap, Star, Shield, Package } from 'lucide-react';
import { CONTACT_INFO } from './constants';
import { handleWhatsAppContact, handleEmailContact } from './utils';

interface ContactButtonsProps {
  onNavigateToProducts?: () => void;
}

export function ContactButtons({ onNavigateToProducts }: ContactButtonsProps = {}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to <span className="text-yellow-400">Elevate Your Gifting Strategy</span>?
        </h3>
        <p className="text-purple-100 text-base sm:text-lg mb-6">
          Let's connect and transform your corporate gifting while saving big on premium products!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white w-full h-12 sm:h-14"
          onClick={handleWhatsAppContact}
        >
          <Phone className="h-5 w-5 mr-2" />
          <div className="text-left">
            <div className="text-sm font-medium">WhatsApp</div>
            <div className="text-xs opacity-90">{CONTACT_INFO.phone}</div>
          </div>
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="border-white/30 text-white hover:bg-white/10 w-full h-12 sm:h-14"
          onClick={handleEmailContact}
        >
          <Mail className="h-5 w-5 mr-2" />
          <div className="text-left">
            <div className="text-sm font-medium">Email Us</div>
            <div className="text-xs opacity-90">{CONTACT_INFO.email}</div>
          </div>
        </Button>
      </div>

      {onNavigateToProducts && (
        <div className="mt-6 text-center">
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            onClick={onNavigateToProducts}
          >
            <Package className="h-5 w-5 mr-2" />
            Browse Product Catalog
          </Button>
        </div>
      )}

      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-purple-100">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-yellow-400" />
          <span>Instant Response</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-400" />
          <span>Premium Quality</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-yellow-400" />
          <span>Trusted Service</span>
        </div>
      </div>
    </div>
  );
}