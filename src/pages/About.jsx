import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Star } from 'lucide-react';
import { fiveFs } from '@/data/values';
import { organization } from '@/data/organization';
import Reveal from '@/components/ui/Reveal';

const ICON_MAP = { Star, Heart, Users, Shield };

// Set to an image URL/path to enable a background image on the page hero.
// Leave as empty string to use the solid navy fallback.
const aboutHeroImage = 'https://weupliftu.com/wp-content/uploads/2025/02/240626_RAS0564_athellorogersmith-1500x430.jpg';

// Set to an image URL or path to switch the Mission section to image+text layout
const missionImage = 'https://weupliftu.com/wp-content/uploads/2025/01/240625_RAS9594_athellorogersmith-1536x1024.jpg';

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        path="/about"
        description="Learn about the WeUpLiftU Foundation's mission, founders Butch Brien and Karl Kelley, and our 5 F's values framework for veteran and first responder healing."
      />

      {/* Page hero */}
      <section
        className={`relative overflow-hidden  min-h-[60vh] md:min-h-[60vh] flex items-center  py-20 ${
          aboutHeroImage
            ? `bg-uplift-navy bg-cover bg-center md:bg-[position:75%_center]`
            : 'bg-uplift-navy'
        }`}
        style={aboutHeroImage ? { backgroundImage: `url('${aboutHeroImage}')` } : undefined}
      >
        {aboutHeroImage && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-uplift-navy/90 via-uplift-navy/80 to-uplift-navy/70 md:bg-gradient-to-r md:from-uplift-navy/95 md:via-uplift-navy/65 md:to-uplift-navy/15"
            aria-hidden="true"
          />
        )}

        <div className="relative container-pad text-center animate-slide-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">About WeUpLiftU</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Founded on the belief that community has the power to transform lives.
          </p>
        </div>
      </section>

      {/* Mission */}
      {/* To add an image: set missionImage at the top of this component */}
      {(() => {
        const missionText = (
          <>
            <h2 id="mission-heading" className="font-heading text-3xl font-bold text-uplift-navy mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The WeUpLiftU Foundation is committed to addressing the critical health crisis of
              Post-Traumatic Stress Disorder (PTSD) and trauma among Active Duty Military, Veterans, and
              First Responders. Recognizing the profound impact of these conditions, we dedicate ourselves
              to fostering holistic healing, promoting self-efficacy, and empowering individuals through
              education, comprehensive support, and transformative experiences.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We provide access to life-changing programs — including Operation Surf, Mustang Medicine,
              Warrior Rizen, and Open Water — designed to cultivate mental, emotional, and physical
              well-being. We strive to build resilience, foster community, and facilitate lasting personal
              growth, empowering those we serve to overcome trauma and lead fulfilling lives. Through
              education, mentorship, and experiential learning, we equip individuals with the tools
              essential for self-care and healing, ultimately working to combat the alarming rates of PTSD
              and suicide within these vital communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Approximately 1 in 3 veterans are diagnosed with PTSD, yet less than 40% seek help. With an
              average of 22 veteran suicides daily — classified as a National Health Crisis — we believe
              community-driven healing is not optional, it's essential.
            </p>
          </>
        );
        return (
          <section className="bg-white section-pad" aria-labelledby="mission-heading">
            <div className="container-pad">
              {missionImage ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <Reveal variant="fade-right">{missionText}</Reveal>
                  <Reveal variant="fade-left" delay={100}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={missionImage} alt="Our mission in action" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Reveal>
                </div>
              ) : (
                <Reveal className="max-w-3xl mx-auto text-center">{missionText}</Reveal>
              )}
            </div>
          </section>
        );
      })()}

      {/* Founders */}
      <section className="bg-uplift-light section-pad" aria-labelledby="founders-heading">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fade-right">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                <img src="https://weupliftu.com/wp-content/uploads/2025/02/240625_RAS8719_athellorogersmith-2-scaled.jpg" alt="Founders of WeUpLiftU Foundation" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={100}>
              <h2 id="founders-heading" className="font-heading text-3xl font-bold text-uplift-navy mb-6">
                Inspiration Behind the Foundation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chief Master Sergeant <strong>Butch Brien (USAF/Ret.)</strong> and <strong>Karl Kelley</strong> were
                inspired to create the WeUpLiftU Foundation after witnessing the transformative power of
                community and charity events. Their dedication to supporting veterans, first responders,
                and youth stems from deep personal connections within these communities and a shared belief
                that bringing people together for a common cause can significantly uplift the lives of those in need.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Their mission: harness the power of community and leadership to create impactful
                fundraising events that positively affect those who have dedicated their lives to serving
                others — and to ensure that <strong>100% of raised funds</strong> reach those programs directly.
              </p>
              <Button asChild variant="default">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 F's */}
      <section className="bg-white section-pad" aria-labelledby="five-fs-heading">
        <div className="container-pad">
          <Reveal className="text-center mb-12">
            <h2 id="five-fs-heading" className="font-heading text-3xl font-bold text-uplift-navy mb-4">
              The 5 F's
            </h2>
            <p className="text-uplift-gray text-lg max-w-xl mx-auto">
              Our core values framework — plus a bonus value of <strong>Fun</strong> — because we believe
              in celebrating people, not just tolerating them.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {fiveFs.map(({ letter, icon, description }, i) => {
              const Icon = ICON_MAP[icon] || Heart;
              return (
                <Reveal key={letter} delay={i * 80}>
                  <div className="bg-uplift-light rounded-xl p-6 text-center border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-full bg-uplift-navy flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-uplift-navy text-lg mb-2">{letter}</h3>
                    <p className="text-uplift-gray text-sm leading-relaxed">{description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-8" delay={fiveFs.length * 80}>
            <p className="text-uplift-gray">
              + <span className="font-semibold text-uplift-navy">Fun</span> — the bonus value. We believe in going where you're celebrated, not just tolerated. The best medicine in life is having fun.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 501c3 trust */}
      <section className="bg-uplift-navy py-12">
        <Reveal className="container-pad text-center">
          <p className="text-white/70 text-sm mb-2">Verified 501(c)(3) Nonprofit Organization</p>
          <p className="text-white font-semibold">Tax ID: {organization.taxId}</p>
        </Reveal>
      </section>
    </>
  );
}
