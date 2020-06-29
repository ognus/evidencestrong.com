import styled from "@emotion/styled"
import React from "react"
import { theme } from "../../utils/theme"
import { rhythm } from "../../utils/typography"

const Container = styled.div`
  display: inline-flex;
  align-items: center;

  input {
    padding-left: ${rhythm(1.5)};

    :focus ~ svg {
      color: ${theme.colors.primary};
    }
  }

  svg {
    position: absolute;
    margin-left: ${rhythm(1 / 2)};
    transition: color 0.3s;
    color: ${theme.colors.secondary};
  }
`

export const Input = ({
  type = "text",
  name,
  placeholder,
  onChange,
  icon: Icon,
}) => {
  return (
    <Container>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Icon />
    </Container>
  )
}
