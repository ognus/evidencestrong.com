import React from "react"
import Bio from "./bio"
import { H1, Header } from "./header"
import Layout, { Main, Sidebar, TwoColumn } from "./layout"
import { SEO } from "./seo"
import { ViewAllTagsButton } from "./taxonomy"

export const Page = ({
  title,
  seoTitle,
  seoDescription,
  seoSlug,
  seoDateModified,
  seoDatePublished,
  seoSchemaOrgType,
  header,
  widgets = {},
  children,
}) => {
  const renderHeader = header || (() => <H1>{title}</H1>)
  const { showViewAllTags = true } = widgets

  return (
    <Layout>
      <SEO
        schemaOrgType={seoSchemaOrgType}
        title={seoTitle || title}
        description={seoDescription}
        slug={seoSlug}
        dateModified={seoDateModified}
        datePublished={seoDatePublished}
      />
      <Header>{renderHeader(title)}</Header>
      <TwoColumn>
        <Main>{children}</Main>
        <Sidebar>
          <Bio />
          {showViewAllTags && <ViewAllTagsButton />}
        </Sidebar>
      </TwoColumn>
    </Layout>
  )
}
