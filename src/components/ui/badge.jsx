import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-uplift-navy text-white',
        gold: 'bg-uplift-gold text-white',
        red: 'bg-uplift-red text-white',
        outline: 'border border-uplift-navy text-uplift-navy',
        muted: 'bg-gray-100 text-gray-600',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
