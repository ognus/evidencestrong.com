import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import { Brand } from "../components/brand"
import Layout, { Header, Main, Sidebar, TwoColumn } from "../components/layout"
import { Menu } from "../components/nav"
import { PostsList } from "../components/posts-list"
import { SEO } from "../components/seo"
import { container } from "../components/styles"
import { ViewAllTagsButton } from "../components/taxonomy"
import { toPosts } from "../utils/schema"
import { rhythm } from "../utils/typography"

const Top = styled.div`
  ${container({ maxWidth: rhythm(44) })};
  padding: 0 ${rhythm(3 / 4)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const BlogIndex = ({ data }) => {
  const posts = toPosts(data.allMdx.edges)

  return (
    <Layout>
      <SEO />
      <Header>
        <Top>
          <Menu />
        </Top>
        <Brand />
      </Header>
      <TwoColumn>
        <Main>
          <PostsList posts={posts} />
        </Main>
        <Sidebar>
          <Bio
            content={({ social }) => (
              <>
                <p>
                  Hi there! My name is Alex and I am a sports medicine
                  researcher.
                </p>
                <a href={`https://twitter.com/${social.twitter}`}>
                  Say Hi on Twitter
                </a>
              </>
            )}
          />
          <ViewAllTagsButton />
        </Sidebar>
      </TwoColumn>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query AllPosts {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { visible: { eq: true }, collection: { eq: "posts" } } }
    ) {
      edges {
        node {
          ...postDetails
        }
      }
    }
  }
`
