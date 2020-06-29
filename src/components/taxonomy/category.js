import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import _ from "lodash"

import { rhythm } from "../../utils/typography"
import { theme } from "../../utils/theme"

const Counter = styled.small`
  padding-left: ${rhythm(1 / 4)};
  color: ${theme.colors.secondary};
`

export const Category = ({
  className,
  value,
  type = "category",
  count = null,
}) => {
  const includeCount = count !== null
  const slug = _.kebabCase(value)
  return (
    <Link className={className} to={`/${type}/${slug}`}>
      <span>{value}</span>
      {includeCount && <Counter>({count})</Counter>}
    </Link>
  )
}
