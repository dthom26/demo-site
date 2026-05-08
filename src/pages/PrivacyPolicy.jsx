import PageMeta from '@/seo/PageMeta';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        path="/privacy-policy"
        description="WeUpLiftU Foundation privacy policy — how we collect, use, and protect your information."
      />

      <section className="bg-uplift-navy py-16">
        <div className="container-pad">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 text-sm mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-pad max-w-3xl mx-auto prose prose-gray prose-headings:font-heading prose-headings:text-uplift-navy">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including when you contact us through our
            contact form, sign up for our newsletter, or make a donation. This may include your name,
            email address, phone number, and message content.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates about our programs and events</li>
            <li>Process donations and send tax receipts</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties.
            We may share information with trusted third parties who assist us in operating our website
            or conducting our mission, provided those parties agree to keep this information confidential.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable
            cookies through your browser settings. This will not affect your ability to use our site.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no
            method of transmission over the Internet is 100% secure.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:info@weupliftu.com" className="text-uplift-navy hover:underline">
              info@weupliftu.com
            </a>{' '}
            or call Karl at (801) 663-1488.
          </p>
        </div>
      </section>
    </>
  );
}
