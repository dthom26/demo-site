import { Link } from 'react-router-dom';
import { Calendar, Clock, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/ui/Reveal';

const IMAGE_URL =
  'https://weupliftu.com/wp-content/uploads/2025/01/240531_RAS5208_athellorogersmith-1500x1001.jpg';

export default function GolfTournamentCTA() {
  return (
    <section className="bg-uplift-navy section-pad" aria-labelledby="golf-tournament-heading">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image — stacks first on mobile, left on desktop */}
          <Reveal variant="fade-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={IMAGE_URL}
                alt="Golfers at the WeUpLiftU Annual Golf Tournament"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text — right on desktop */}
          <Reveal variant="fade-left" delay={100} className="flex flex-col justify-center">
            <Badge variant="gold" className="mb-5 self-start">Save the Date</Badge>

            <h2
              id="golf-tournament-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Annual Golf Tournament
            </h2>

            <ul className="space-y-3 mb-6" aria-label="Event details">
              <li className="flex items-center gap-3 text-white/90">
                <Calendar className="w-5 h-5 text-uplift-gold shrink-0" aria-hidden="true" />
                <span><span className="font-semibold">Date:</span> Friday, May 29th, 2026</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <Clock className="w-5 h-5 text-uplift-gold shrink-0" aria-hidden="true" />
                <span><span className="font-semibold">Time:</span> Shotgun Start 08:30</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <Trophy className="w-5 h-5 text-uplift-gold shrink-0" aria-hidden="true" />
                <span><span className="font-semibold">Location:</span> Hill Air Force Base, Utah</span>
              </li>
            </ul>

            <p className="text-white/75 leading-relaxed mb-4">
              Thank you for your support — we look forward to a fun day enjoying each other's company
              for a great cause! Contact us for details about Sponsorship Opportunities, Silent Auction,
              Volunteering, or Player Packages.
            </p>

            <p className="text-white/75 leading-relaxed mb-8">
              All players, sponsors, and volunteers must complete base access registration prior to the
              event. The registration deadline is <span className="text-white font-semibold">May 8th</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/base-access">Register / Base Access</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-uplift-navy">
                <Link to="/programs#golf-tournament">Learn More</Link>
              </Button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
