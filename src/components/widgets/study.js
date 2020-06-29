import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../utils/theme"
import { rhythm, scale } from "../../utils/typography"

export const Study = styled.div`
  ${scale(-1 / 4)};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${rhythm(1 / 4)};
  margin: ${rhythm(5 / 3)} 0;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${rhythm(1 / 4)} ${rhythm(3 / 4)} ${rhythm(3 / 4)};

  h3 {
    ${scale(1 / 4)};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    min-height: ${rhythm(3)};
    margin: 0 0 ${rhythm(1)} 0;
    padding-bottom: ${rhythm(1 / 2)};
    border-bottom: 2px solid ${theme.colors.primary};
  }

  p {
    margin: 0 ${rhythm(1 / 4)} ${rhythm(1 / 4)};
  }

  ul {
    margin-bottom: 0;
  }

  @media (min-width: 600px) {
    min-width: 50%;
    max-width: 50%;
    align-items: center;

    :nth-of-type(odd) {
      border-right: 1px solid ${theme.colors.secondary};

      &:last-of-type {
        border-right-width: 2px;
        margin: 0 1px;
      }
    }

    :nth-of-type(even) {
      border-left: 1px solid ${theme.colors.secondary};
    }

    h3 {
      text-align: center;
    }
  }
`

export const Group = ({ label, children }) => {
  return (
    <Column>
      <h3>{label}</h3>
      <>{children}</>
    </Column>
  )
}
