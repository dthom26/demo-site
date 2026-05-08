import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b border-gray-200', className)}
      {...props}
    />
  );
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between py-5 text-left font-semibold text-gray-900',
          'hover:text-uplift-navy transition-colors',
          '[&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-5 w-5 shrink-0 text-uplift-navy transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-gray-600',
        'data-[state=closed]:animate-[accordion-up_0.2s_ease-out]',
        'data-[state=open]:animate-[accordion-down_0.2s_ease-out]',
        className
      )}
      {...props}
    >
      <div className="pb-5 pt-0 leading-relaxed">{children}</div>
    </AccordionPrimitive.Content>
  );
}
