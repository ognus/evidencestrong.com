import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import { useTitle } from "../hooks/use-title"
import typography, { scale, rhythm } from "../utils/typography"
import { Logo } from "./logo"
import { theme } from "../utils/theme"

const { headerWeight, headerFontFamily } = typography.options

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  background-image: none;
  flex-direction: ${({ size }) => (size === "small" ? "row" : "column")};

  h1 {
    margin-bottom: ${rhythm(3 / 2)};
  }
`
const Title = styled.div`
  ${({ size }) => (size === "small" ? scale(0) : scale(1))};
  display: ${({ size }) => (size === "small" ? "none" : "block")};
  color: ${theme.colors.text.header};
  margin: 0 0 0 ${rhythm(1 / 2)};
  padding: 0;
  font-weight: ${headerWeight};
  font-family: ${headerFontFamily.join(",")};
  text-transform: uppercase;

  @media (min-width: 800px) {
    display: block;
  }
`

export const Brand = ({ className, as = "h1", size = "big" }) => {
  const title = useTitle()

  return (
    <HomeLink className={className} size={size} to={`/`}>
      <Logo size={size} />
      <Title size={size} as={as}>
        {title}
      </Title>
    </HomeLink>
  )
}
