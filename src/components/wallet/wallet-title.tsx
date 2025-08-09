import { ChevronDown } from 'lucide-react';
import { StatusIndicator } from '@/components/ui/status-indicator';

export function WalletTitle() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-3xl font-semibold text-[#1B2528]">Wallet Ledger</h1>
      <ChevronDown className="h-5 w-5 text-gray-400 transition-transform hover:rotate-180 duration-200 cursor-pointer" />
      <StatusIndicator status="active" label="Active" />
    </div>
  );
}
