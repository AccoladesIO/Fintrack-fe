import { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Search as SearchIcon } from '../ui/icons/icons';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/search-input';
import { UserAvatar } from '@/components/ui/user-avatar';
import { MobileMenuButton } from './mobile-menu-button';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export function Header({ onMobileMenuToggle, isMobileMenuOpen }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center gap-4">
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onToggle={onMobileMenuToggle}
        />
      </div>

      <div className="flex items-center gap-4" ref={searchRef}>
        {/* Search toggle logic */}
        {isSearchOpen ? (
          <SearchInput
            placeholder="Search..."
            className="w-64 transition-all duration-300"
          />
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-gray-50"
            onClick={() => setIsSearchOpen(true)}
          >
            <SearchIcon />
          </Button>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full border border-gray-50"
        >
          <MoreHorizontal />
        </Button>

        <UserAvatar name="User" />
      </div>
    </header>
  );
}
