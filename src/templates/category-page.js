import React from "react"
import { graphql } from "gatsby"

import { toPosts } from "../utils/schema"
import { ResultsPage } from "../components/taxonomy/results-page"

const CategoriesTemplate = ({ pageContext, data }) => {
  const { categoryName, categoryDescription } = pageContext
  const posts = toPosts(data.allMdx.edges)

  return (
    <ResultsPage
      tagOrCategoryName={categoryName}
      tagOrCategoryDescription={categoryDescription}
      posts={posts}
    />
  )
}

export default CategoriesTemplate

export const pageQuery = graphql`
  query PostsByCategory($categoryName: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { visible: { eq: true } }
        frontmatter: {
          categories: { elemMatch: { name: { eq: $categoryName } } }
        }
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
