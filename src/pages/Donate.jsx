import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, CheckCircle, Calendar } from 'lucide-react';
import { retreats, impactItems } from '@/data/events';
import { organization } from '@/data/organization';

export default function Donate() {
  return (
    <>
      <PageMeta
        title="Donate"
        path="/donate"
        description="Your donation to WeUpLiftU Foundation directly funds healing programs for Utah veterans, first responders, and youth. 100% goes to programs."
      />

      {/* Hero */}
      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center">
          <Heart className="w-12 h-12 text-uplift-gold mx-auto mb-4 fill-uplift-gold/20" aria-hidden="true" />
          <Badge variant="gold" className="mb-4">Make a Difference</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Support the Mission</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            100% of your donation goes directly to providing educational awareness and therapy support
            for those who've served and protected our communities.
          </p>
          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <a href={organization.donationUrl} target="_blank" rel="noopener noreferrer">
                Donate Now
                <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-white py-16" aria-labelledby="impact-heading">
        <div className="container-pad">
          <h2 id="impact-heading" className="text-center font-heading text-2xl font-bold text-uplift-navy mb-10">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactItems.map(({ stat, label }) => (
              <div key={stat} className="text-center bg-uplift-light rounded-xl p-7 border border-gray-100">
                <p className="font-heading text-4xl font-bold text-uplift-red mb-2">{stat}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Mission */}
      <section className="bg-uplift-light section-pad" aria-labelledby="mission-2026-heading">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">

            {/* Section header */}
            <div className="mb-12">
              <p className="text-uplift-gold font-semibold text-sm uppercase tracking-widest mb-3">2026 Vision</p>
              <h2 id="mission-2026-heading" className="font-heading text-3xl md:text-4xl font-bold text-uplift-navy mb-5 leading-tight">
                Our 2026 Mission: Elevating Those Who Serve
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At the WeUpLiftU Foundation, we have witnessed firsthand the transformative power of
                community-driven philanthropy. Year after year, your generosity has created a profound
                ripple effect — providing critical support for our Veterans, Active Duty Military, First
                Responders, and Youth Education Programs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                In 2026, we are committed to expanding our reach and deepening our impact through the
                following strategic initiatives.
              </p>
            </div>

            {/* Initiative 1 */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-start gap-4">
                <span className="font-heading font-bold text-2xl text-uplift-gold leading-none mt-1 shrink-0 w-6">1</span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-uplift-navy mb-3">
                    Strengthening Our Community Connection
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are focused on expanding our brand awareness to ensure that every service member
                    and first responder in our region knows they have a community standing behind them.
                    By growing our presence, we can connect more donors to the causes that matter most.
                  </p>
                </div>
              </div>
            </div>

            {/* Initiative 2 */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-start gap-4">
                <span className="font-heading font-bold text-2xl text-uplift-gold leading-none mt-1 shrink-0 w-6">2</span>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-uplift-navy mb-3">
                    2026 Resilience &amp; Restoration Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We are proud to host a series of specialized retreats designed to foster healing,
                    camaraderie, and personal growth for those on the front lines.
                  </p>

                  <ol className="space-y-5" aria-label="2026 retreat schedule">
                    {retreats.map(({ dates, title, detail, location }) => (
                      <li key={title} className="flex items-start gap-4">
                        <div className="shrink-0 flex items-center gap-2 pt-0.5">
                          <Calendar className="w-4 h-4 text-uplift-navy" aria-hidden="true" />
                          <span className="font-semibold text-uplift-navy text-sm whitespace-nowrap">{dates}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{title}</p>
                          <p className="text-gray-500 text-sm mt-0.5">{detail} &middot; <span className="text-uplift-gray">{location}</span></p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Initiative 3 */}
            <div className="mb-14">
              <div className="flex items-start gap-4">
                <span className="font-heading font-bold text-2xl text-uplift-gold leading-none mt-1 shrink-0 w-6">3</span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-uplift-navy mb-3">
                    The 2026 WeUpLiftU Charity Golf Invitational
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-uplift-navy/5 border border-uplift-navy/15 rounded-lg px-4 py-2 mb-4">
                    <Calendar className="w-4 h-4 text-uplift-navy shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-uplift-navy text-sm">May 29, 2026</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We are hosting a world-class golf event to unite our community and honor our heroes.
                    Our goal is to raise <strong className="text-uplift-navy">$100,000</strong> to fund
                    ongoing care and partnership programs.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This event champions our core belief in self-efficacy — empowering individuals to
                    reclaim their strength and purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="text-center bg-uplift-navy rounded-2xl px-8 py-12">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto leading-relaxed">
                Join the mission. Every dollar you give provides healing and hope to those who served.
              </p>
              <Button asChild variant="gold" size="lg">
                <a href={organization.donationUrl} target="_blank" rel="noopener noreferrer">
                  Donate via BetterUnite
                  <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
                </a>
              </Button>
              <p className="text-white/40 text-xs mt-4">
                Secure donation processing via BetterUnite &middot; 501(c)(3) Tax ID: {organization.taxId}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-white py-10 border-t border-gray-100">
        <div className="container-pad">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-uplift-gray" aria-label="Trust indicators">
            {[
              'Verified 501(c)(3) Nonprofit',
              `Tax ID: ${organization.taxId}`,
              'IRS Designated',
              '100% Program Funding',
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
