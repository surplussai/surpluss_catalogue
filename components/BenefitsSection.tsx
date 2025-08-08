import { Badge } from './ui/badge';
import { BenefitCard } from './benefits/BenefitCard';
import { UseCaseCard } from './benefits/UseCaseCard';
import { ContactButtons } from './benefits/ContactButtons';
import { BENEFITS_DATA, USE_CASES, PRODUCT_CATEGORIES } from './benefits/constants';
import liquidationImage from 'figma:asset/164d34d21b87ebee3aa42dc4e6664cb1e2afc37c.png';

interface BenefitsSectionProps {
  onNavigateToProducts?: () => void;
}

export function BenefitsSection({ onNavigateToProducts }: BenefitsSectionProps = {}) {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-yellow-500 text-black px-4 py-2 mb-4 text-sm font-medium">
            🚀 Now Launching
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-yellow-400">LIQUIDATION DEALS</span><br />
            FOR CORPORATE GIFTING
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Exclusive liquidation offers on premium products—perfect for corporate gifting, 
            trade promotions, and festive season rewards!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={liquidationImage}
                alt="Liquidation Deals for Corporate Gifting"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                <div className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg animate-pulse">
                  UP TO 85% OFF
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="grid gap-4 sm:gap-6">
              {BENEFITS_DATA.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Ideal for <span className="text-yellow-400">Corporate Solutions</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {USE_CASES.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} />
            ))}
          </div>
        </div>

        {/* Product Categories Highlight */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Premium Product Range
            </h3>
            <p className="text-purple-100 text-base sm:text-lg">
              From stylish trolley bags, vibrant Bluetooth speakers, to utility-packed grinders, 
              sandwich makers, and premium skincare kits—we've got unbeatable prices for bulk procurement.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ContactButtons onNavigateToProducts={onNavigateToProducts} />
      </div>
    </section>
  );
}