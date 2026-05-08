import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Two layouts:
 *  - imageSrc present → full-width horizontal split (text left, photo right)
 *  - no imageSrc      → centered text-only card with avatar initial
 */
export function TestimonialCard({ title, quote, name, role, imageSrc, className }) {
  if (imageSrc) {
    return (
      <figure
        className={cn(
          'bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm',
          'grid grid-cols-1 md:grid-cols-2',
          className
        )}
      >
        {/* Text side */}
        <div className="flex flex-col justify-center p-6 max-[374px]:p-5 sm:p-8 md:p-12 lg:p-14">
          <Quote className="w-8 h-8 text-uplift-gold mb-6 max-[374px]:mb-4 shrink-0" aria-hidden="true" />
          {title && (
            <p className="font-semibold text-uplift-navy text-xl max-[374px]:text-lg sm:text-2xl md:text-3xl leading-tight max-[374px]:leading-snug mb-4 max-[374px]:mb-3">
              {title}
            </p>
          )}
          <blockquote className="font-heading text-lg max-[374px]:text-base sm:text-xl md:text-2xl font-semibold text-uplift-navy leading-snug max-[374px]:leading-relaxed mb-6 max-[374px]:mb-4">
            &ldquo;{quote}&rdquo;
          </blockquote>

          <figcaption className="flex items-center gap-3 pt-5 border-t border-gray-100">
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              {role && <p className="text-uplift-gray text-sm mt-0.5">{role}</p>}
            </div>
          </figcaption>
        </div>

        {/* Photo side */}
        <div className="relative min-h-[280px] md:min-h-0 overflow-hidden order-first md:order-last">
          <img
            src={imageSrc}
            alt={`${name} — ${role || 'testimonial photo'}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        'bg-white rounded-2xl p-6 max-[374px]:p-5 sm:p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col gap-5 max-[374px]:gap-4 max-w-2xl mx-auto w-full',
        className
      )}
    >
      <Quote className="w-8 h-8 text-uplift-gold shrink-0" aria-hidden="true" />

      {title && (
        <p className="font-semibold text-uplift-navy text-xl max-[374px]:text-lg sm:text-2xl md:text-3xl leading-tight max-[374px]:leading-snug mb-4 max-[374px]:mb-3">
          {title}
        </p>
      )}
      <blockquote className="text-gray-700 leading-relaxed max-[374px]:leading-normal text-base max-[374px]:text-sm sm:text-lg md:text-xl flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className="w-11 h-11 rounded-full bg-uplift-navy/15 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="text-uplift-navy font-bold text-sm">
            {name ? name[0].toUpperCase() : '?'}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          {role && <p className="text-uplift-gray text-xs mt-0.5">{role}</p>}
        </div>
      </figcaption>
    </figure>
  );
}

/* Minimal single-quote band used on the Home page */
export function FeaturedTestimonial() {
  return (
    <section className="bg-uplift-navy section-pad" aria-labelledby="testimonial-heading">
      <div className="container-pad">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-uplift-gold mx-auto mb-6" aria-hidden="true" />
          <h2 id="testimonial-heading" className="sr-only">Testimonial</h2>
          <blockquote className="font-heading text-base max-[374px]:text-sm sm:text-xl md:text-2xl text-white leading-relaxed max-[374px]:leading-normal mb-8 max-[374px]:mb-5">
            &ldquo;When I was on the water, I was able to leave some of that stress and energy out there
            and focus on positivity and my new connections.&rdquo;
          </blockquote>
          <figcaption className="text-white/60">
            <span className="font-semibold text-white">Alyson</span>
            <span className="mx-2">&mdash;</span>
            <span>Operation Surf Participant</span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
