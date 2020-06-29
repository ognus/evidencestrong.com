import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { getWebsite, getPage } from "./schemas"

export const SchemaOrg = ({
  type,
  title,
  description,
  slug,
  datePublished,
  dateModified,
}) => {
  const { siteUrl, logoUrl, pageUrl, title: siteTitle } = useSiteMetadata(slug)

  const schema = title
    ? getPage({
        type,
        title,
        description,
        dateModified,
        datePublished,
        logoUrl,
        url: pageUrl,
        siteName: siteTitle,
      })
    : getWebsite({
        url: siteUrl,
        name: siteTitle,
        logoUrl,
        description,
      })

  const rootSchema = {
    "@context": "https://schema.org",
    ...schema,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(rootSchema)}</script>
    </Helmet>
  )
}
