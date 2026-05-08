import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm',
        'placeholder:text-gray-400 resize-y',
        'focus:outline-none focus:ring-2 focus:ring-uplift-navy focus:border-transparent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}
