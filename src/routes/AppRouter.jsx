import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Route-level code splitting — each page loads as a separate chunk
const Home           = lazy(() => import('@/pages/Home'));
const About          = lazy(() => import('@/pages/About'));
const Testimonials   = lazy(() => import('@/pages/Testimonials'));
const EventsGallery  = lazy(() => import('@/pages/EventsGallery'));
const VideoGallery   = lazy(() => import('@/pages/VideoGallery'));
const FAQ            = lazy(() => import('@/pages/FAQ'));
const Contact        = lazy(() => import('@/pages/Contact'));
const Donate         = lazy(() => import('@/pages/Donate'));
const Programs       = lazy(() => import('@/pages/Programs'));
const PrivacyPolicy           = lazy(() => import('@/pages/PrivacyPolicy'));
const BaseAccessRegistration  = lazy(() => import('@/pages/BaseAccessRegistration'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-uplift-navy border-t-transparent rounded-full animate-spin" aria-label="Loading page" />
    </div>
  );
}

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Suspense fallback={<PageLoader />}><Home /></Suspense>}
          />
          <Route
            path="/about"
            element={<Suspense fallback={<PageLoader />}><About /></Suspense>}
          />
          <Route
            path="/programs"
            element={<Suspense fallback={<PageLoader />}><Programs /></Suspense>}
          />
          <Route
            path="/testimonials"
            element={<Suspense fallback={<PageLoader />}><Testimonials /></Suspense>}
          />
          <Route
            path="/events-gallery"
            element={<Suspense fallback={<PageLoader />}><EventsGallery /></Suspense>}
          />
          <Route
            path="/video-gallery"
            element={<Suspense fallback={<PageLoader />}><VideoGallery /></Suspense>}
          />
          <Route
            path="/faq"
            element={<Suspense fallback={<PageLoader />}><FAQ /></Suspense>}
          />
          <Route
            path="/contact"
            element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>}
          />
          <Route
            path="/donate"
            element={<Suspense fallback={<PageLoader />}><Donate /></Suspense>}
          />
          <Route
            path="/privacy-policy"
            element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>}
          />
          <Route
            path="/base-access"
            element={<Suspense fallback={<PageLoader />}><BaseAccessRegistration /></Suspense>}
          />

          {/* Catch-all 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <h1 className="font-heading text-4xl font-bold text-uplift-navy">404</h1>
                <p className="text-uplift-gray">Page not found.</p>
                <a href="/" className="text-uplift-navy underline">Go home</a>
              </div>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
