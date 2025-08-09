import { Search } from 'lucide-react';
import { Input } from './input';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchInput({ placeholder = "Search...", className = '' }: SearchInputProps) {
  return (
    <div className={`relative group ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 transition-colors group-focus-within:text-[#4B8B9F]" />
      <Input 
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
}
