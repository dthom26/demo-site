import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageMeta from '@/seo/PageMeta';
import { Mail, MapPin, CheckCircle } from 'lucide-react';
import useContactForm from '@/hooks/useContactForm';
import { contactPeople } from '@/data';
import ContactPerson from '@/components/sections/ContactPerson';

export default function Contact() {
  const { form, handleChange, handleSubmit, submitting, submitted, error } = useContactForm();

  return (
    <>
      <PageMeta
        title="Contact Us"
        path="/contact"
        description="Get in touch with the WeUpLiftU Foundation. Contact Karl or Butch directly, or send us a message through our contact form."
      />

      <section className="bg-uplift-navy py-20">
        <div className="container-pad text-center">
          <Badge variant="gold" className="mb-4">Reach Out</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions, want to volunteer, or need support — we're here.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad" aria-labelledby="leadership-heading">
        <div className="container-pad">
          <h2 id="leadership-heading" className="font-heading text-2xl font-bold text-uplift-navy mb-12">
            Meet Our Leadership
          </h2>
          <div className="divide-y divide-gray-100">
            {contactPeople.map((person, i) => (
              <div key={person.id} className={i === 0 ? 'pb-16' : 'pt-16'}>
                <ContactPerson person={person} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-uplift-light section-pad">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-uplift-navy mb-6">Get in Touch</h2>
              <ul className="space-y-5" aria-label="Contact information">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-uplift-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-uplift-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@weupliftu.com" className="text-uplift-navy hover:underline">info@weupliftu.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-uplift-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-uplift-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-uplift-gray">Utah, United States</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-10">
                  <CheckCircle className="w-12 h-12 text-green-600" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-uplift-gray">We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h2 className="font-heading text-xl font-bold text-uplift-navy mb-6">Send a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      aria-required="true"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm mb-4" role="alert">{error}</p>
                  )}

                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
