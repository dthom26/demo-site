import PageMeta from '@/seo/PageMeta';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Waves, Mountain, TreePine, Fish, Trophy, GraduationCap } from 'lucide-react';
import { programs } from '@/data/programs';
import Reveal from '@/components/ui/Reveal';

const ICON_MAP = {
  Waves,
  Mountain,
  TreePine,
  Fish,
  Trophy,
  GraduationCap,
};

// Set to an image URL/path to enable a background image on the page hero.
// Leave as empty string to use the solid navy fallback.
const programsHeroImage = 'https://weupliftu.com/wp-content/uploads/2025/02/240531_RAS9297_athellorogersmith-2.jpg';

export default function Programs() {
  return (
    <>
      <PageMeta
        title="Our Programs"
        path="/programs"
        description="Learn about WeUpLiftU Foundation's programs: Operation Surf, Mustang Medicine, Warrior Rizen, OpenWater, our Annual Golf Tournament, and Youth Educational Programs."
      />

      {/* Page hero */}
      <section
        className={`relative overflow-hidden  min-h-[60vh] md:min-h-[60vh] flex items-center py-20 ${
          programsHeroImage
            ? 'bg-uplift-navy bg-cover bg-center md:bg-[position:75%_center]'
            : 'bg-uplift-navy'
        }`}
        style={programsHeroImage ? { backgroundImage: `url('${programsHeroImage}')` } : undefined}
      >
        {programsHeroImage && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-uplift-navy/90 via-uplift-navy/80 to-uplift-navy/70 md:bg-gradient-to-r md:from-uplift-navy/95 md:via-uplift-navy/65 md:to-uplift-navy/15"
            aria-hidden="true"
          />
        )}

        <div className="relative container-pad text-center animate-slide-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Programs/Initiatives</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every initiative exists to create real, lasting change — through community, healing, and connection.
          </p>
        </div>
      </section>

      {/* Programs — alternating image / text */}
      <div>
        {programs.map(({ id, icon, title, body, image }, index) => {
          const Icon = ICON_MAP[icon] || Waves;
          const isEven = index % 2 === 0;
          return (
            <section
              key={id}
              id={id}
              className={`${isEven ? 'bg-white' : 'bg-uplift-light'} section-pad`}
              aria-labelledby={`${id}-heading`}
            >
              <div className="container-pad">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                  {/* Text — first in DOM so it stacks on top on mobile */}
                  {/* Even rows: image is left on desktop, so push text to order-2 */}
                  <Reveal
                    className={isEven ? 'lg:order-2' : ''}
                    variant={isEven ? 'fade-left' : 'fade-right'}
                  >
                    <h2
                      id={`${id}-heading`}
                      className="font-heading text-2xl md:text-3xl font-bold text-uplift-navy mb-6"
                    >
                      {title}
                    </h2>
                    {body.map((para, i) => (
                      <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </Reveal>

                  {/* Image — pulled left on even rows */}
                  <Reveal
                    className={isEven ? 'lg:order-1' : ''}
                    variant={isEven ? 'fade-right' : 'fade-left'}
                    delay={100}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      {image ? (
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-uplift-light border-2 border-dashed border-gray-300 rounded-2xl">
                          <Icon className="w-12 h-12 text-gray-300" aria-hidden="true" />
                          <p className="text-gray-400 text-sm">Photo coming soon</p>
                        </div>
                      )}
                    </div>
                  </Reveal>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Donate CTA */}
      <section className="bg-uplift-navy py-16">
        <Reveal className="container-pad text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Support the Mission</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            100% of funds raised go directly to these programs and the people they serve.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link to="/donate">Donate Today</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
