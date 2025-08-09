import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="md:hidden"
      onClick={onToggle}
    >
      {isOpen ? (
        <X className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Menu className="h-5 w-5 transition-transform duration-200" />
      )}
    </Button>
  );
}
