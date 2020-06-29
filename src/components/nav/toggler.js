import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { cx } from "emotion"
import React from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { theme } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import { StyledLink } from "./menu-link"

const Button = StyledLink.withComponent("button")

const ToggleButton = styled(Button)`
  &.open {
    color: ${theme.colors.secondary};

    &.active {
      border-bottom-color: transparent;
    }
  }
`

const Icon = ({ isOpen, size = "0.75em" }) => {
  const style = css`
    margin-right: ${rhythm(1 / 6)};
  `
  if (isOpen) {
    return <FaChevronUp size={size} css={style} />
  }

  return <FaChevronDown size={size} css={style} />
}

export const Toggler = ({ value, isActive, isOpen, onToggle }) => {
  return (
    <ToggleButton
      type="button"
      name="toggler"
      className={cx({ open: isOpen, active: isActive })}
      onClick={() => onToggle(value)}
    >
      <Icon isOpen={isOpen} />
      {value}
    </ToggleButton>
  )
}
