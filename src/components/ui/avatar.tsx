import { ReactNode } from 'react';

interface AvatarProps {
  children: ReactNode;
  className?: string;
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

interface AvatarFallbackProps {
  children: ReactNode;
  className?: string;
}

export function Avatar({ children, className = '' }: AvatarProps) {
  return (
    <div className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className="w-full h-full object-cover"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}

export function AvatarFallback({ children, className = '' }: AvatarFallbackProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center text-sm font-medium ${className}`}>
      {children}
    </div>
  );
}
