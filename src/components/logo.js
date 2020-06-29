import React from "react"
import styled from "@emotion/styled"
import logo from "../../content/assets/logo.svg"

export const LOGO_SIZE = {
  SMALL: "small",
  BIG: "big",
}

const LOGO_WIDTH = {
  [LOGO_SIZE.SMALL]: "4rem",
  [LOGO_SIZE.BIG]: "15rem",
}

const Image = styled.img`
  margin: 0;
  width: ${({ size }) => LOGO_WIDTH[size]};
`

export const Logo = ({ size = LOGO_SIZE.SMALL }) => {
  return <Image size={size} src={logo} alt="Evidence Strong Logo" />
}
