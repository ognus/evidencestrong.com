import React from "react"
import { TagsList, CategoriesList } from "./taxonomy"
import { H1 } from "./header"
import { Pill } from "./basic"

export const PostHeader = ({ title, draft, categories, tags }) => {
  return (
    <>
      <CategoriesList categories={categories} />
      <H1>
        {title}
        {draft && <Pill>Draft</Pill>}
      </H1>
      <TagsList tags={tags} />
    </>
  )
}
