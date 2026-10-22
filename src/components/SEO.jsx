import { Helmet } from 'react-helmet-async';
import siteConfig from '../config/site';

export default function SEO({ title, description, path = '/', type = 'website', jsonLd }) {
  const fullTitle = title === 'Home'
    ? `${siteConfig.companyName} – Cybersecurity & IT Software Solutions`
    : `${title} | ${siteConfig.companyName}`;
  const canonicalUrl = `${siteConfig.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.companyName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
