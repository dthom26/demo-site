import { createContext, forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

const CarouselContext = createContext(null);

function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error('useCarousel must be used inside <Carousel>');
  return ctx;
}

const Carousel = forwardRef(function Carousel(
  { orientation = 'horizontal', opts, plugins, className, children, setApi, ...props },
  ref
) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi && setApi) setApi(emblaApi);
  }, [emblaApi, setApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <CarouselContext.Provider value={{ emblaRef, emblaApi, orientation, canScrollPrev, canScrollNext, scrollPrev, scrollNext }}>
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

const CarouselContent = forwardRef(function CarouselContent({ className, ...props }, ref) {
  const { emblaRef, orientation } = useCarousel();
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  );
});

const CarouselItem = forwardRef(function CarouselItem({ className, ...props }, ref) {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  );
});

const CarouselPrevious = forwardRef(function CarouselPrevious({ className, ...props }, ref) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full h-10 w-10',
        'bg-white/90 hover:bg-white border-gray-200 shadow-md',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  );
});

const CarouselNext = forwardRef(function CarouselNext({ className, ...props }, ref) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn(
        'absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full h-10 w-10',
        'bg-white/90 hover:bg-white border-gray-200 shadow-md',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
});

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
