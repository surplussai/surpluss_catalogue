import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-900" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-lg sm:text-xl mb-2">{title}</h4>
        <p className="text-purple-100 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}