import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uplift-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-uplift-navy text-white hover:bg-uplift-navy-dark',
        red: 'bg-uplift-red text-white hover:bg-red-800',
        gold: 'bg-uplift-gold text-white hover:bg-yellow-700',
        outline: 'border-2 border-uplift-navy text-uplift-navy bg-transparent hover:bg-uplift-navy hover:text-white',
        ghost: 'text-uplift-navy hover:bg-uplift-navy/10',
        link: 'text-uplift-navy underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        default: 'h-11 px-6 py-2',
        lg: 'h-13 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
