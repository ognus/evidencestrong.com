import styled from "@emotion/styled"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import { reversedLink } from "../styles"

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export const RevLink = styled(Link)`
  ${reversedLink}
`
