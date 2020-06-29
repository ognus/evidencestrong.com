import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { theme } from "../utils/theme"
import { rhythm } from "../utils/typography"
import { Footer } from "./footer"
import { container, global } from "./styles"
import { Info } from "./widgets/info"
import { Group, Study } from "./widgets/study"
import { ForWho, Summary } from "./widgets/summary"
import { Table, Cell } from "./widgets/table"

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${theme.colors.background.secondary};
`

const Content = styled.div`
  flex: 1 0 auto;
`

export const Header = styled.header`
  background-color: ${theme.colors.background.primary};
`

export const Main = styled.main`
  grid-area: main;
`

export const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${theme.colors.secondary};
  padding-top: ${rhythm(2)};

  @media (min-width: 900px) {
    border: 0;
    padding-top: 0;
  }
`

export const Container = styled.div`
  ${container};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export const TwoColumn = styled(Container)`
  display: grid;
  grid-template-areas:
    "main"
    "sidebar";
  grid-gap: ${rhythm(2)};

  @media (min-width: 900px) {
    grid-template-areas: "main sidebar";
    grid-template-columns: 1fr ${rhythm(10)};
  }
`

const Layout = ({ className, children }) => {
  const shortcodes = { Summary, ForWho, Study, Group, Info, Table, Cell }

  return (
    <Root id="top" className={className}>
      <Global styles={global} />
      <Content>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Content>
      <Footer />
    </Root>
  )
}

export default Layout
