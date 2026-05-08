import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-uplift-navy overflow-hidden bg-[url('https://weupliftu.com/wp-content/uploads/2025/01/240625_RAS9904_athellorogersmith-2_athellorogersmith-1500x430.jpg')] bg-cover bg-center md:bg-[position:75%_center]"
      aria-label="Welcome hero"
    >
      {/* Placeholder background pattern */}
      {/* <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      /> */}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-uplift-navy/90 via-uplift-navy/80 to-uplift-navy/70 md:bg-gradient-to-r md:from-uplift-navy/95 md:via-uplift-navy/65 md:to-uplift-navy/15" aria-hidden="true" />

      <div className="relative container-pad py-20 md:py-28">
        <div className="max-w-3xl animate-slide-up">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-uplift-gold/20 border border-uplift-gold/30 rounded-full px-4 py-2 mb-8">
            <Heart className="w-4 h-4 text-uplift-gold fill-uplift-gold" aria-hidden="true" />
            <span className="text-uplift-gold text-sm font-semibold">501(c)(3) Nonprofit Organization</span>
          </div> */}

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Connections
            <span className="block text-uplift-gold">Matter</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            WeUpLiftU Foundation is dedicated to providing healing, mentorship, and transformational
            experiences for Utah veterans, active duty military, Davis County first responders, and youth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="gold" size="lg">
              <Link to="/donate">
                Donate Now
                <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-uplift-navy">
              <Link to="/about">
                Learn Our Mission
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Stat teasers */}
          <div className="mt-14 grid grid-cols-3 gap-4 md:gap-6 border-t border-white/20 pt-10">
            {[
              { value: '100%', label: 'Donated funds go to programs' },
              { value: '22', label: 'Veteran suicides daily — a crisis we fight' },
              { value: '$275K+', label: 'Donated to Operation Surf' },
            ].map(({ value, label }) => (
              <div key={value}>
                <p className="font-heading font-bold text-2xl sm:text-3xl text-uplift-gold">{value}</p>
                <p className="text-white/60 text-xs sm:text-sm mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
