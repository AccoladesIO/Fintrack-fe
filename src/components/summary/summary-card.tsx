import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function SummaryCard({ title, value, change, isPositive }: SummaryCardProps) {
  return (
    <Card className="bg-[#38677629] border-[#34616F17] hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-bold text-[#1B2528] opacity-70">
          {title}
        </h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/50"
        >
          <MoreHorizontal className="h-4 w-4 text-[#1B2528]" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-[#1B2528] mb-1">{value}</div>
        <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
          {change}
        </div>
      </CardContent>
    </Card>
  );
}
