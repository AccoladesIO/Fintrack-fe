import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4B8B9F] focus:border-[#4B8B9F] transition-all duration-200 ${className}`}
      {...props}
    />
  );
}
