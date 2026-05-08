import { Link } from 'react-router-dom';
import { Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { donationImpacts } from '@/data/stats';
import Reveal from '@/components/ui/Reveal';

export default function DonationCTA() {
  return (
    <section className="bg-gradient-to-br from-uplift-red to-red-800 section-pad" aria-labelledby="donate-cta-heading">
      <div className="container-pad">
        <Reveal className="max-w-3xl mx-auto text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6 fill-white/20" aria-hidden="true" />

          <h2 id="donate-cta-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Join the Mission, Own the Outcome
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Your donation goes directly to providing educational awareness and therapy support for
            Utah veterans, Davis County first responders, and youth educational programs.
          </p>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" aria-label="Donation impact highlights">
            {donationImpacts.map((impact) => (
              <li key={impact} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span>{impact}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="gold" size="lg" className="shadow-lg">
            <Link to="/donate">
              Donate Today
              <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
