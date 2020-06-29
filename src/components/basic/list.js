import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

const StyledList = styled.ul`
  margin: 0;
  list-style-type: none;
  li {
    display: ${({ isInline }) => (isInline ? "inline-block" : "block")};
    margin-right: ${({ isInline }) => (isInline ? rhythm(2 / 5) : 0)};
  }
`

export const List = ({
  className,
  component,
  isInline = true,
  values = [],
  keyProperty = "value",
}) => {
  return (
    values && (
      <StyledList isInline={isInline} className={className}>
        {values.map(value => (
          <li key={value[keyProperty] || value}>{component(value)}</li>
        ))}
      </StyledList>
    )
  )
}
