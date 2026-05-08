import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { headerNavLinks } from '@/data/navigation';
import { organization } from '@/data/organization';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-shadow duration-300',
        scrolled ? 'bg-uplift-red shadow-lg' : 'bg-uplift-red/90'
      )}
    >
      <nav className="container-pad flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        <Link to="/" className="flex items-center shrink-0" aria-label="WeUpLiftU Foundation home">
          <img
            src={organization.logo.src}
            alt={organization.logo.alt}
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {headerNavLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive
                    ? 'text-uplift-gold'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block ml-4">
          <Button asChild variant="gold" size="sm">
            <Link to="/donate">Donate</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-uplift-navy-dark border-t border-white/10 animate-fade-in">
          <div className="container-pad py-4 flex flex-col gap-1">
            {headerNavLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-uplift-gold bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
            <Button asChild variant="gold" className="mt-3 w-full">
              <Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}