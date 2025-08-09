import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-[#4B8B9F] text-white hover:bg-[#4B8B9F]/90 focus:ring-[#4B8B9F] shadow-sm hover:shadow-md hover:scale-105',
    secondary: 'bg-[#38677629] text-[#4B8B9F] hover:bg-[#34616F17] focus:ring-[#4B8B9F]',
    ghost: 'text-gray-600 hover:text-[#4B8B9F] hover:bg-gray-100 focus:ring-gray-300 bg-white rounded-full',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    icon: 'p-2 w-10 h-10'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
