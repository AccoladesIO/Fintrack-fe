import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <AlertCircle className="h-12 w-12 text-red-500 animate-bounce" />
      <p className="text-red-600 text-center font-medium">{message}</p>
    </div>
  );
}
