import React from "react"
import { graphql } from "gatsby"

import { toPosts } from "../utils/schema"
import { ResultsPage } from "../components/taxonomy/results-page"

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const posts = toPosts(data.allMdx.edges)

  return (
    <ResultsPage taxonomyType="Tag" tagOrCategoryName={tag} posts={posts} />
  )
}

export default TagsTemplate

export const pageQuery = graphql`
  query PostsByTag($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { visible: { eq: true } }
        frontmatter: { tags: { elemMatch: { value: { eq: $tag } } } }
      }
    ) {
      edges {
        node {
          ...postDetails
        }
      }
    }
  }
`
