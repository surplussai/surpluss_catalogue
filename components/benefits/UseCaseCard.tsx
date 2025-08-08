import { Check } from 'lucide-react';

interface UseCaseCardProps {
  useCase: string;
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <div className="flex items-center gap-3 p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
      <span className="font-medium text-sm sm:text-base">{useCase}</span>
    </div>
  );
}