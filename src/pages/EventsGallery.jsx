import { lazy, Suspense } from 'react';
import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';

// Lazy-load the heavy image grid to keep the initial bundle small
const ImageGrid = lazy(() => import('@/components/sections/ImageGrid'));

export default function EventsGallery() {
  return (
    <>
      <PageMeta
        title="Events Gallery"
        path="/events-gallery"
        description="Photos from WeUpLiftU Foundation events — golf tournaments, Operation Surf, Warrior Rizen, and community gatherings."
      />

      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center">
          <Badge variant="gold" className="mb-4">Memories</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Events Gallery</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A glimpse into the moments that define our mission — community, healing, and connection.
          </p>
        </div>
      </section>

      <section className="bg-uplift-light section-pad" aria-label="Event photos">
        <div className="container-pad">
          <Suspense fallback={
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" aria-hidden="true" />
              ))}
            </div>
          }>
            <ImageGrid />
          </Suspense>
        </div>
      </section>
    </>
  );
}
