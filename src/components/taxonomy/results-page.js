import React from "react"
import { H1 } from "../header"
import { Page } from "../page"
import { PostsList } from "../posts-list"

export const ResultsPage = ({
  posts,
  tagOrCategoryName,
  tagOrCategoryDescription,
  taxonomyType,
}) => {
  return (
    <Page
      seoTitle={`${tagOrCategoryName} posts`}
      seoDescription={tagOrCategoryDescription}
      header={() => (
        <>
          <H1>
            {taxonomyType && <em>{taxonomyType}: </em>}
            {tagOrCategoryName}
          </H1>
          {tagOrCategoryDescription && <p>{tagOrCategoryDescription}</p>}
        </>
      )}
    >
      <PostsList posts={posts} />
    </Page>
  )
}
