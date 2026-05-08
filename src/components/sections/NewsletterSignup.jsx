import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to POST /api/subscribers
    setSubmitted(true);
  }

  return (
    <section className="bg-uplift-light py-14 border-t border-gray-200" aria-labelledby="newsletter-heading">
      <div className="container-pad">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-10 h-10 text-uplift-navy mx-auto mb-4" aria-hidden="true" />
          <h2 id="newsletter-heading" className="font-heading text-2xl font-bold text-uplift-navy mb-2">
            Stay Connected
          </h2>
          <p className="text-uplift-gray mb-8">
            Sign up for updates on events, programs, and how you can support the mission.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              <span>Thank you for signing up!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
              <div className="flex-1">
                <Label htmlFor="newsletter-email" className="sr-only">Email address</Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
