import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { SchemaOrg } from "./schema-org"

export const SEO = ({
  description = "",
  lang = "en",
  meta = [],
  title,
  slug,
  schemaOrgType,
  datePublished,
  dateModified,
}) => {
  const siteMetadata = useSiteMetadata(slug)

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={metaTitle}
        titleTemplate={title ? `%s | ${siteMetadata.title}` : `%s`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:url`,
            content: siteMetadata.pageUrl,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: siteMetadata.logoUrl,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:image`,
            content: siteMetadata.logoUrl,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.social.twitter,
          },
          {
            name: `twitter:title`,
            content: metaTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
      <SchemaOrg
        type={schemaOrgType}
        title={title}
        description={metaDescription}
        slug={slug}
        datePublished={datePublished}
        dateModified={dateModified}
      />
    </>
  )
}
