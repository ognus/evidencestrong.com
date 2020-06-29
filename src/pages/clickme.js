import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
import { Link, List } from "../components/basic"
import Bio from "../components/bio"
import { Brand } from "../components/brand"
import Layout, { Header } from "../components/layout"
import { SEO } from "../components/seo"
import { toPosts } from "../utils/schema"
import { theme } from "../utils/theme"
import { rhythm, scale } from "../utils/typography"

const LinksLayout = styled(Layout)`
  padding-top: ${rhythm(2)};
  background-color: ${theme.colors.background.primary};

  main {
    padding: ${rhythm(1 / 2)};
  }
`

const LinksList = styled(List)`
  max-width: 40rem;
  margin: 0 auto ${rhythm(2)} auto;

  li {
    width: 100%;
    margin-bottom: ${rhythm(1)};
  }

  a {
    ${scale(-1 / 5)};
    display: block;
    padding: ${rhythm(1 / 2)};
    background-image: none;
    background-color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    color: #fff;
    text-align: center;
    border-radius: ${rhythm(1 / 2)};

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.background.primary};
    }
  }
`

const LinksPage = ({ data }) => {
  const posts = toPosts(data.allMdx.edges)

  return (
    <LinksLayout>
      <SEO meta={[{ name: "robots", content: "noindex" }]} />
      <Header>
        <Brand />
      </Header>
      <main>
        <LinksList
          isInline={false}
          values={posts}
          keyProperty="slug"
          component={({ title, slug }) => <Link to={slug}>{title}</Link>}
        />
        <Bio
          content={({ social }) => (
            <>
              <p>
                Hi there! My name is Alex and I am a sports medicine researcher.
              </p>
              <a href={`https://twitter.com/${social.twitter}`}>
                Say Hi on Twitter
              </a>
            </>
          )}
        />
      </main>
    </LinksLayout>
  )
}

export default LinksPage

export const pageQuery = graphql`
  query AllPostsForLinkPage {
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
