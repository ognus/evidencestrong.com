import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { memo } from "react"
import { rhythm } from "../../utils/typography"
import { button } from "../styles"

export const Button = memo(
  ({ to, type = "link", icon: Icon, className, children }) => {
    const linkProps = { to, className }
    const buttonProps = { type, className }

    const toStyle = type === "link" ? styled(Link) : styled.button
    const toRenderProps = type === "link" ? linkProps : buttonProps

    const StyledButton = toStyle`
      ${button};
      span {
        font-size: ${rhythm(1 / 2)};
      }
    `
    return (
      <StyledButton {...toRenderProps}>
        <span>{children}</span>
        <Icon />
      </StyledButton>
    )
  }
)
