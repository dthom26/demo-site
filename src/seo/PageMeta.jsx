import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'WeUpLiftU Foundation';
const DEFAULT_DESCRIPTION =
  'WeUpLiftU Foundation is a Utah-based 501(c)(3) nonprofit supporting veterans, first responders, and youth through healing, mentorship, and transformational experiences.';
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://weupliftu.com';

export default function PageMeta({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Connections Matter`;
  const desc = description || DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
