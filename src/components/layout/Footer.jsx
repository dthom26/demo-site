import { Link } from 'react-router-dom';
import { Heart, Phone, Mail } from 'lucide-react';
import { footerNavLinks } from '@/data/navigation';
import { organization } from '@/data/organization';

export default function Footer() {
  return (
    <footer className="bg-uplift-navy text-white">
      <div className="container-pad py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-uplift-gold flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-white fill-white" aria-hidden="true" />
              </div>
              <span className="font-heading font-bold text-lg">WeUpLiftU Foundation</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {organization.mission}
            </p>
            <p className="text-uplift-gold font-heading font-bold text-sm uppercase tracking-widest">
              {organization.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNavLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/80 hover:text-uplift-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {organization.phones.map(({ name, number }) => (
                <li key={name} className="flex items-center gap-2 text-white/80 text-sm">
                  <Phone className="w-4 h-4 text-uplift-gold shrink-0" aria-hidden="true" />
                  <span>{name}: {number}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4 text-uplift-gold shrink-0" aria-hidden="true" />
                <a href={`mailto:${organization.email}`} className="hover:text-uplift-gold transition-colors">
                  {organization.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} WeUpLiftU Foundation. All rights reserved.</p>
          <p>501(c)(3) Nonprofit &middot; Tax ID: {organization.taxId}</p>
        </div>
      </div>
    </footer>
  );
}
