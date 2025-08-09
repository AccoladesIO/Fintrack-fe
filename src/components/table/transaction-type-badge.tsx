import { Circle } from 'lucide-react';

interface TransactionTypeBadgeProps {
  type: 'Credit' | 'Debit';
}

export function TransactionTypeBadge({ type }: TransactionTypeBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <Circle 
        className={`w-2 h-2 transition-all duration-200 ${
          type === 'Credit' 
            ? 'text-green-500 fill-current animate-pulse' 
            : 'text-red-500 fill-current animate-pulse'
        }`}
      />
      <span className="text-sm text-[#1B2528] font-medium">{type}</span>
    </div>
  );
}
