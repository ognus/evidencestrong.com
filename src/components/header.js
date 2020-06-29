import styled from "@emotion/styled"
import React from "react"
import { theme } from "../utils/theme"
import { rhythm } from "../utils/typography"
import { Brand } from "./brand"
import { Container, Header as StyledHeader } from "./layout"
import { Menu } from "./nav"
import { container } from "./styles"

const Top = styled.div`
  ${container({ maxWidth: rhythm(44) })};
  padding: 0 ${rhythm(3 / 4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderContent = styled(Container)`
  margin-top: ${rhythm(1)};
`

export const H1 = styled.h1`
  margin: ${rhythm(1 / 4)} 0;

  em {
    font-style: normal;
    color: ${theme.colors.primary};
  }
`

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Top>
        <Brand size="small" as={"p"} />
        <Menu />
      </Top>
      {children && <HeaderContent>{children}</HeaderContent>}
    </StyledHeader>
  )
}
