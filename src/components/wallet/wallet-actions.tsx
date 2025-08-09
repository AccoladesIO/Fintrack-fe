import { Button } from '@/components/ui/button';
import { MoreHorizontal } from '../ui/icons/icons';
export function WalletActions() {
  return (
    <div className="flex items-center gap-3">
      <Button className="shadow-sm rounded-3xl">
        Share
      </Button>
      <Button variant="ghost" size="icon">
        <MoreHorizontal />
      </Button>
    </div>
  );
}
