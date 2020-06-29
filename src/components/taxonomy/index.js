import styled from "@emotion/styled"
import React from "react"
import { FaTags } from "react-icons/fa"
import { theme } from "../../utils/theme"
import { scale } from "../../utils/typography"
import { Button, List } from "../basic"
import { reversedLink } from "../styles"
import { Category } from "./category"
import { Tag } from "./tag"

const Tags = ({ className, tags }) => {
  return (
    <List
      className={className}
      values={tags}
      component={({ value }) => <Tag value={value} />}
    />
  )
}

const Categories = ({ className, categories }) => {
  return (
    <List
      className={className}
      values={categories}
      component={({ name }) => <Category value={name} />}
    />
  )
}

export const CategoriesList = styled(Categories)`
  ${scale(-1 / 4)}
  text-transform: uppercase;
  font-weight: ${theme.fonts.body.weights.bold};
`

export const TagsList = styled(Tags)`
  ${scale(-1 / 6)};
  font-weight: ${theme.fonts.body.weights.light};
  li {
    margin-bottom: 0;
  }
  a {
    ${reversedLink({ color: theme.colors.secondary })}
  }
`

export const ViewAllTagsButton = () => (
  <Button to="/tags" icon={FaTags}>
    View all Tags
  </Button>
)

export { TagPills } from "./tag-pills"
