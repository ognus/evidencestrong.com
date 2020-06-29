import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import { FcLandscape } from "react-icons/fc"
import { Header } from "../components/header"
import Layout, { Container } from "../components/layout"
import { SEO } from "../components/seo"
import { scale } from "../utils/typography"

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;

  h1 {
    ${scale(1.8)};
    margin-top: 0;
  }

  p {
    text-align: center;
  }
`.withComponent("main")

const Icon404 = styled(FcLandscape)`
  ${scale(4)};
`

const StyledLink = styled(Link)`
  white-space: nowrap;
`

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Header />
      <Main>
        <Icon404 />
        <h1>Not Found</h1>
        <p>
          Look's like you hit a dead end. Please{" "}
          <StyledLink to="/">go back to homepage</StyledLink>.
        </p>
      </Main>
    </Layout>
  )
}

export default NotFoundPage
