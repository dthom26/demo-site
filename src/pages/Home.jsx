import { Link } from 'react-router-dom';
import PageMeta from '@/seo/PageMeta';
import Hero from '@/components/sections/Hero';
import MissionStats from '@/components/sections/MissionStats';
import ProgramCards from '@/components/sections/ProgramCards';
import { FeaturedTestimonial } from '@/components/sections/TestimonialCard';
import DonationCTA from '@/components/sections/DonationCTA';
import PartnerLogos from '@/components/sections/PartnerLogos';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import GolfTournamentCTA from '@/components/sections/GolfTournamentCTA';

export default function Home() {
  return (
    <>
      <PageMeta
        path="/"
        description="WeUpLiftU Foundation — supporting Utah veterans, first responders, and youth through healing, mentorship, and community. Connections Matter."
      />
      <Hero />
      <MissionStats />

      {/* Founders strip */}
      <section className="bg-uplift-red py-10 border-t border-white/10">
        <div className="container-pad text-center max-w-2xl mx-auto">
          <p className="text-white/80 text-lg leading-relaxed mb-3">
            Founded by <strong className="text-white">Chief Master Sergeant Butch Brien (USAF/Ret.)</strong> and{' '}
            <strong className="text-white">Karl Kelley</strong> — dedicated to ensuring 100% of funds raised
            go directly to the people who need it most.
          </p>
          <Link to="/about" className="text-uplift-gold text-sm font-semibold hover:underline">
            Our Story →
          </Link>
        </div>
      </section>
      <GolfTournamentCTA />
      <ProgramCards />
      <FeaturedTestimonial />
      <DonationCTA />
      <NewsletterSignup />
      <PartnerLogos />
    </>
  );
}
