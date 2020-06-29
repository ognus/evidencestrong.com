import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../utils/theme"
import { rhythm, scale } from "../../utils/typography"
import { List } from "../basic"
import { Tag } from "./tag"

const TagPill = styled(Tag)`
  ${scale(-1 / 4)};
  display: flex;
  border: solid ${rhythm(1 / 10)} ${theme.colors.secondary};
  padding: 0 ${rhythm(1 / 4)};
  border-radius: ${rhythm(1)};
  background-image: none;
  text-decoration: none;

  :hover {
    text-decoration: none;
    background-color: ${theme.colors.secondary};
    color: #fff;

    small {
      color: #fff;
    }
  }
`

export const TagPills = ({ tags }) => {
  return <List values={tags} component={tag => <TagPill {...tag} />} />
}
