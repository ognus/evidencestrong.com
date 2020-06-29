import styled from "@emotion/styled"
import React from "react"
import { CategoriesList, TagsList } from "./taxonomy"
import typography, { rhythm, scale } from "../utils/typography"
import { RevLink, Pill } from "./basic"

const StyledPost = styled.article`
  margin-bottom: ${rhythm(2.5)};

  h3 {
    margin-top: 0;
    margin-bottom: ${rhythm(1 / 4)};
  }

  section {
    margin-top: ${rhythm(1 / 4)};
  }
`

const Categories = styled(CategoriesList)`
  ${scale(-1 / 2)};
  li {
    margin-bottom: ${rhythm(1 / 10)};
  }
`

const Post = ({ title, draft, description, slug, tags, categories }) => {
  return (
    <StyledPost>
      <header>
        <Categories categories={categories} />
        <h3>
          <RevLink color={typography.options.headerColor} to={slug}>
            {title}
          </RevLink>
          {draft && <Pill>Draft</Pill>}
        </h3>
        <TagsList tags={tags} />
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </section>
    </StyledPost>
  )
}

export const PostsList = ({ posts = [] }) => {
  return (
    <>
      {posts.map(post => {
        return <Post key={post.slug} {...post} />
      })}
    </>
  )
}
