import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, AlertCircle, ExternalLink } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSful6wMYu7EnkvDW2xY3ppDQjvR-XASl0FZOX6o_2MqDw1t2g/viewform';

const organizers = [
  { name: 'Butch Brien',    role: 'President',                        phone: '801-390-2481', href: 'tel:+18013902481' },
  { name: 'Karl Kelley',   role: 'Vice President',                    phone: '801-663-1488', href: 'tel:+18016631488' },
  { name: 'Tony Hill',     role: 'Attorney',                          phone: '801-628-6964', href: 'tel:+18016286964' },
  { name: 'Mike Romney',   role: 'Sr Manager Community Relations',    phone: '480-993-6133', href: 'tel:+14809936133' },
  { name: 'Greg Rickelman', role: 'Chief Financial Officer',          phone: '812-367-1998', href: 'tel:+18123671998' },
];

export default function BaseAccessRegistration() {
  return (
    <>
      <PageMeta
        title="Base Access Registration — 2026 Tournament"
        path="/base-access"
        description="Register for base access to the 2026 WeUpLiftU Tournament on May 29th, 2026. Deadline is May 8th. All players, sponsors, and volunteers must complete registration."
      />

      {/* Hero */}
      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center animate-slide-up">
          <Badge variant="gold" className="mb-4">May 29th, 2026</Badge>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            2026 Base Access Registration
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            WeUpLiftU Tournament — Hill Air Force Base
          </p>
          <Button asChild variant="gold" size="lg">
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
              Complete Registration
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Deadline callout */}
      <Reveal>
        <div className="bg-uplift-red">
          <div className="container-pad py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <AlertCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
              <p className="font-heading font-bold text-xl">
                Registration Deadline: <span className="text-white">May 8th, 2026</span>
              </p>
            </div>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-uplift-red shrink-0">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Main content */}
      <section className="bg-uplift-light section-pad">
        <div className="container-pad max-w-3xl mx-auto">

          <Reveal>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 space-y-5 text-gray-700 leading-relaxed">
              <p>Hello,</p>

              <p>
                All players, sponsors, and volunteers are required to complete the registration link
                above to gain entry to the base for our tournament on <strong>May 29th, 2026</strong>.
              </p>

              <p>
                The base requires all names and credentials to be submitted exactly two weeks prior to
                the event. Consequently, this link will be deactivated on <strong>May 13th</strong>,
                and we will be unable to accept late submissions.
              </p>

              <p className="font-semibold text-uplift-navy uppercase tracking-wide text-sm">
                This is not a payment link. This is for tournament access only.
              </p>

              <p>
                Please note that the base conducts 100% ID checks and maintains final authority over
                all site access. We will strictly follow their guidance regarding pre-clearance
                eligibility.
              </p>

              <p>
                Click the registration link above to complete your credential submission.
              </p>
            </div>
          </Reveal>

          {/* Organizer contacts */}
          <Reveal className="mt-12" delay={100}>
            <h2 className="font-heading text-xl font-bold text-uplift-navy mb-6">
              Questions? Contact an Organizer
            </h2>
            <ul className="space-y-4">
              {organizers.map(({ name, role, phone, href }, i) => (
                <Reveal key={name} as="li" delay={i * 70} className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-lg bg-uplift-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-uplift-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {name} <span className="font-normal text-uplift-gray">— {role}</span>
                    </p>
                    <a href={href} className="text-uplift-navy hover:underline">{phone}</a>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          {/* Bottom CTA */}
          <Reveal className="text-center mt-12" delay={organizers.length * 70}>
            <p className="text-uplift-gray mb-4">
              Registration closes <strong className="text-gray-900">May 8th</strong> — don't miss the deadline.
            </p>
            <Button asChild variant="default" size="lg">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                Complete Registration
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </Reveal>

        </div>
      </section>
    </>
  );
}
