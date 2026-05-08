import { missionStats } from '@/data/stats';
import Reveal from '@/components/ui/Reveal';

export default function MissionStats() {
  return (
    <section className="bg-white section-pad" aria-labelledby="mission-stats-heading">
      <div className="container-pad">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 id="mission-stats-heading" className="font-heading text-3xl md:text-4xl font-bold text-uplift-navy mb-4">
            The Crisis We're Fighting
          </h2>
          <p className="text-uplift-gray text-lg leading-relaxed">
            Our veterans and first responders have given everything. These numbers remind us why
            the WeUpLiftU mission cannot wait.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionStats.map(({ value, label, context }, i) => (
            <Reveal key={value} delay={i * 100}>
              <div className="bg-uplift-light rounded-xl p-7 border border-gray-100 text-center hover:shadow-md transition-shadow h-full">
                <p className="font-heading font-bold text-4xl text-uplift-red mb-2">{value}</p>
                <p className="font-semibold text-gray-900 mb-2">{label}</p>
                <p className="text-uplift-gray text-sm leading-relaxed">{context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
