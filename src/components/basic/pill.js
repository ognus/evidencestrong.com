import styled from "@emotion/styled"
import { theme } from "../../utils/theme"
import { rhythm, scale } from "../../utils/typography"

export const Pill = styled.small`
  ${scale(-2 / 3)};
  vertical-align: middle;
  color: ${theme.colors.background.primary};
  background-color: ${theme.colors.secondary};
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 4)};
  margin-left: ${rhythm(1 / 4)};
  border-radius: ${rhythm(1)};
  text-transform: uppercase;
`
