import { Circle } from 'lucide-react';

interface StatusIndicatorProps {
  status: 'active' | 'inactive' ;
  label?: string;
  size?: 'sm' | 'md';
}

export function StatusIndicator({ status, label, size = 'sm' }: StatusIndicatorProps) {
  const statusColors = {
    active: 'text-green-500',
    inactive: 'text-gray-400',
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3'
  };

  return (
    <div className="flex items-center gap-2 animate-pulse">
      <Circle className={`${sizeClasses[size]} ${statusColors[status]} fill-current`} />
      {label && (
        <span className="text-sm text-[#1B2528] opacity-70 capitalize">
          {status}
        </span>
      )}
    </div>
  );
}
