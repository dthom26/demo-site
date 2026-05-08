import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useEffect, useCallback } from 'react';
import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const autoplayRef = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((emblaApi) => {
    setCurrent(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('select', onSelect);
    return () => api.off('select', onSelect);
  }, [api, onSelect]);

  return (
    <>
      <PageMeta
        title="Testimonials"
        path="/testimonials"
        description="Read stories from veterans, first responders, and community members whose lives have been changed by WeUpLiftU Foundation programs."
      />

      {/* Page hero */}
      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center">
          <Badge variant="gold" className="mb-4">Real Stories</Badge>
          <h1 className="font-heading text-3xl max-[374px]:text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Testimonials</h1>
          <p className="text-white/70 text-base max-[374px]:text-sm sm:text-lg max-w-2xl mx-auto">
            Lives changed. Connections made. Healing begun. Hear it from those who've experienced it.
          </p>
        </div>
      </section>

      {/* Carousel — one slide at a time so each story gets full focus */}
      <section className="bg-uplift-light section-pad" aria-label="Testimonials carousel">
        <div className="container-pad">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[autoplayRef.current]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={t.name}
                  aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                >
                  <TestimonialCard {...t} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls row */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0" />

              {/* Dot indicators */}
              <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'bg-uplift-navy w-6'
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                  />
                ))}
              </div>

              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>

          <p className="text-center text-uplift-gray text-xs mt-5">
            Auto-advances every 6 seconds &middot; Drag or use arrows to browse
          </p>
        </div>
      </section>
    </>
  );
}
