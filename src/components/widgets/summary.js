import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../utils/theme"
import { rhythm, scale } from "../../utils/typography"

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  ${scale(-1 / 4)};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
`

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const Label = styled.div`
  min-width: ${rhythm(5)};
  white-space: nowrap;
  padding: ${rhythm(1 / 2)} 0;
  font-weight: ${theme.fonts.body.weights.bold};

  @media (min-width: 600px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: ${rhythm(1 / 2)};
  }
`

const Details = styled.div`
  padding: ${rhythm(1 / 2)} 0;
  border-top: 2px solid ${theme.colors.primary};

  @media (min-width: 600px) {
    flex: 4;
    border-top: 0;
    border-left: 2px solid ${theme.colors.primary};
    padding-left: ${rhythm(1 / 2)};
  }
`

export const ForWho = ({ label, children }) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Details>{children}</Details>
    </Row>
  )
}
