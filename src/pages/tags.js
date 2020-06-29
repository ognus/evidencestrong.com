import React from "react"
import { Page } from "../components/page"
import { SearchableTags } from "../components/taxonomy/searchable-tags"

const Tags = () => {
  return (
    <Page title="Tags" widgets={{ showViewAllTags: false }}>
      <SearchableTags />
    </Page>
  )
}

export default Tags
