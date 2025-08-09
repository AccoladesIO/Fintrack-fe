import { TrendingUp } from 'lucide-react';
import { FintrackLogo } from './icons/icons';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className="flex items-center gap-2 transition-all duration-200 hover:scale-105">
      <FintrackLogo />
    </div>
  );
}
