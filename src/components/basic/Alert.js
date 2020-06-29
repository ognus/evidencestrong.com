import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import { Animate } from "./animate"

const TYPES = {
  ERROR: theme.colors.error,
  SUCCESS: theme.colors.success,
}

const Box = styled.div`
  padding: ${rhythm(1 / 2)};
  border: 6px solid ${({ color }) => color};
  border-radius: ${rhythm(1 / 8)};
  margin-bottom: ${rhythm(1)};
`

export const Alert = ({ show, children, type = "success" }) => {
  return (
    <Animate show={show}>
      <Box color={TYPES[type.toUpperCase()]}>{children}</Box>
    </Animate>
  )
}
