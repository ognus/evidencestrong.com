import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { FaChevronUp } from "react-icons/fa"
import { rhythm, scale } from "../utils/typography"
import { RevLink } from "./basic"
import { container } from "./styles"

const FooterStyled = styled.footer`
  flex-shrink: 0;
  background-color: #fff;
`

const Container = styled.div`
  ${container({ maxWidth: rhythm(44) })};
  ${scale(-1 / 4)};
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ToTopIcon = styled(FaChevronUp)`
  margin-left: ${rhythm(1 / 4)};
`

const Anchor = RevLink.withComponent("a")

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div>
          © {new Date().getFullYear()}, built by{" "}
          <Anchor href="https://twitter.com/ognus">@ognus</Anchor>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <Anchor href="#top">To the top</Anchor>
          <ToTopIcon size={"1.5em"} />
        </div>
      </Container>
    </FooterStyled>
  )
}
