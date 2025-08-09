import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import path from 'path';
interface NavItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  path?: string;
}

export function NavItem({ label, isActive = false, onClick, path }: NavItemProps) {
  const { pathname } = useRouter()
  return (
    <Button
      variant={path === pathname ? "secondary" : "ghost"}
      className={`rounded-3xl w-full justify-start gap-3 transition-all duration-200 hover:translate-x-1 ${isActive ? 'shadow-sm' : ''
        }`}
      onClick={onClick}
    >
      <span className="font-medium">{label}</span>
    </Button>
  );
} 
