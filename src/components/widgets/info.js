import styled from "@emotion/styled"
import React from "react"
import { FaInfoCircle } from "react-icons/fa"
import { rhythm } from "../../utils/typography"

export const Container = styled.p`
  svg {
    vertical-align: text-top;
    margin-right: ${rhythm(1 / 4)};
  }
`

export const Info = ({ topic, children }) => {
  return (
    <Container>
      <FaInfoCircle />
      <strong>{topic}</strong>
      <span> &ndash; </span>
      {children}
    </Container>
  )
}
