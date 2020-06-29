import styled from "@emotion/styled"
import React from "react"
import { RevLink } from "../basic"

export const StyledLink = styled(RevLink)`
  display: inline-block;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
`

export const MenuLink = ({ className, slug, value }) => {
  return (
    <StyledLink className={className} to={slug} activeClassName="active">
      {value}
    </StyledLink>
  )
}
