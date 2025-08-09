import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface UserAvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function UserAvatar({ name, src, size = 'md', className = '' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base'
  };

  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Avatar className={`${sizeClasses[size]} ${className} transition-all duration-200 hover:scale-110 hover:shadow-md border-2 border-white`}>
      <AvatarImage src={src || "/placeholder.svg"} alt={name} />
      <AvatarFallback className="bg-[#4B8B9F] text-white font-medium">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
