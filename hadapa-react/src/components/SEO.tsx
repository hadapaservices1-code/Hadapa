import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  /** Canonical path, e.g. "/services" */
  path?: string
  /** OG image URL (absolute) */
  image?: string
}

const SITE_URL  = 'https://hadapaservices.com'
const SITE_NAME = 'Hadapa Services'
const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }: SEOProps) {
  const canonical = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description"  content={description} />
      <link rel="canonical"     href={canonical} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:site_name"   content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />
    </Helmet>
  )
}
