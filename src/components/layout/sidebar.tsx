import { BarChart3, CreditCard, FileText, Settings } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { NavItem } from './nav-item';
import path from 'path';

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const navigation = [
  { name: 'Dashboard', path: '/' },
  { name: 'Transactions', path: '/transactions' },
  { name: 'Reports', path: '/reports' },
  { name: 'Settings', path: '/settings' },
];

export function Sidebar({ className = '', isOpen = true, onClose }: SidebarProps) {

  return (
    <div className={`w-64 bg-white min-h-screen transition-all duration-300 ${className}`}>
      <div className="p-4">
        <div className="mb-8">
          <Logo />
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <NavItem
              key={item.name}
              label={item.name}
              path={item.path}
              onClick={onClose}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
