import { partners } from '@/data/partners';
import Reveal from '@/components/ui/Reveal';

export default function PartnerLogos() {
  return (
    <section className="bg-uplift-navy py-12 border-t border-gray-100" aria-labelledby="partners-heading">
      <div className="container-pad">
        <Reveal>
          <h2 id="partners-heading" className="text-center text-sm font-semibold uppercase tracking-widest text-white mb-8">
            Our Partners &amp; Sponsors
          </h2>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map(({ name, logo }, i) => (
            <Reveal key={name} delay={i * 60} variant="fade">
              <div
                className="h-14 w-36 rounded-lg flex items-center justify-center"
                aria-label={`${name} — partner logo placeholder`}
              >
                {logo ? (
                  <img src={logo} alt={`${name} logo`} className="h-14 w-36 object-contain" />
                ) : (
                  <span className="text-xs font-medium text-uplift-gray text-center px-2">{name}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
