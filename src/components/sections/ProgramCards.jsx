import { Waves, Mountain, TreePine, Fish, Trophy, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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

export default function ProgramCards() {
  return (
    <section className="bg-uplift-light section-pad" aria-labelledby="programs-heading">
      <div className="container-pad">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 id="programs-heading" className="font-heading text-3xl md:text-4xl font-bold text-uplift-navy mb-4">
            Key Programs and Initiatives
          </h2>
          <p className="text-uplift-gray text-lg leading-relaxed">
            Every initiative exists to create real, lasting change through community, healing, and connection.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon, title, shortDescription, badge, id }, i) => {
            const Icon = ICON_MAP[icon] || Waves;
            return (
              <Reveal key={title} delay={i * 90}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-uplift-navy/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-uplift-navy" aria-hidden="true" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-uplift-navy">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">{shortDescription}</CardDescription>
                    <Link
                      to={`/programs#${id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-uplift-navy hover:text-uplift-gold transition-colors"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-10" delay={programs.length * 60}>
          <Button asChild variant="default">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
