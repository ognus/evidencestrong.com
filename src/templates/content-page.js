import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Page } from "../components/page"
import { PostHeader } from "../components/post-header"
import { PAGE_TYPES } from "../components/seo/schemas"

function getPageSchemaType(collection, slug) {
  if (collection === "pages") {
    const page = slug.toLowerCase().replace(/\/+/g, "")

    if (page === "about") {
      return PAGE_TYPES.ABOUT
    }

    return PAGE_TYPES.DEFAULT
  }

  return PAGE_TYPES.BLOG
}

const PageTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const { draft, slug, collection } = pageContext
  const { title, tags, categories, description, date } = post.frontmatter

  const type = getPageSchemaType(collection, slug)

  return (
    <Page
      seoTitle={title}
      seoDescription={description || post.excerpt}
      seoSlug={slug}
      seoDatePublished={date}
      seoSchemaOrgType={type}
      header={() => (
        <PostHeader
          title={title}
          tags={tags}
          draft={draft}
          categories={categories}
        />
      )}
    >
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Page>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      ...frontmatter
    }
  }
`
