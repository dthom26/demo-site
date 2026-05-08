import { lazy, Suspense } from 'react';
import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';

const VideoGrid = lazy(() => import('@/components/sections/VideoGrid'));

export default function VideoGallery() {
  return (
    <>
      <PageMeta
        title="Video Gallery"
        path="/video-gallery"
        description="Watch videos from WeUpLiftU Foundation events, programs, and the stories of those we serve."
      />

      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center">
          <Badge variant="gold" className="mb-4">Watch & Listen</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Video Gallery</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Stories of healing, connection, and community in action.
          </p>
        </div>
      </section>

      <section className="bg-uplift-light section-pad" aria-label="Video gallery">
        <div className="container-pad">
          <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-video bg-gray-200 rounded-xl animate-pulse" aria-hidden="true" />
              ))}
            </div>
          }>
            <VideoGrid />
          </Suspense>
        </div>
      </section>
    </>
  );
}
