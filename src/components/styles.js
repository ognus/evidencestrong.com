import { css } from "@emotion/core"
import { theme } from "../utils/theme"
import { underline, rhythm, scale } from "../utils/typography"

export const global = css`
  html {
    scroll-behavior: smooth;
  }

  input,
  textarea {
    ${scale(-1 / 6)};
    padding: ${rhythm(1 / 6)} ${rhythm(1 / 4)};
    border: 2px solid ${theme.colors.secondary};
    border-radius: ${rhythm(1 / 8)};
    transition: border 0.3s;
    :focus {
      outline: 0;
      border: 2px solid ${theme.colors.primary};
    }
  }

  textarea {
    resize: vertical;
    min-height: ${rhythm(6)};
  }

  label {
    ${scale(-1 / 4)};
    font-weight: ${theme.fonts.body.weights.light};
  }

  button {
    background: none;
    border: 0;
    padding: 0;
    outline: 0;
    cursor: pointer;
    > * {
      pointer-events: none;
    }
  }

  table {
    ${scale(-1 / 4)};
    margin-top: ${rhythm(1)};

    &.left td,
    &.left th {
      text-align: left;
    }

    &.right td,
    &.right th {
      text-align: right;
    }

    &.center td,
    &.center th {
      text-align: center;
    }
  }

  caption {
    ${scale(0)};
    text-align: left;
    padding:  ${rhythm(1 / 4)} ${rhythm(2 / 3)};
    border-bottom: 2px solid ${theme.colors.primary};
  }

  thead {
    border-bottom: 1px solid ${theme.colors.secondary};
  }

  tbody {
    border-bottom: 2px solid ${theme.colors.secondary};
  }

  td,
  th,
  td:first-of-type,
  th:first-of-type {
    padding: ${rhythm(2 / 3)} ${rhythm(2 / 3)} 0 ${rhythm(2 / 3)};
  }

  tr:last-of-type td {
    padding-bottom: ${rhythm(2 / 3)};
  }

  th {
    /* border-bottom: 2px solid ${theme.colors.primary}; */
  }

  td {
    border: 0;

    &.left {
      text-align: left;
    }

    &.section {
      padding-top: ${rhythm(1)};
      border-bottom: 1px solid ${theme.colors.secondary};
    }
  }

  tfoot {
    font-weight: ${theme.fonts.body.weights.light};

    td,
    td:first-of-type {
      text-align: left;
      padding-top: ${rhythm(1 / 4)};
      padding-bottom: ${rhythm(1 / 4)};
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const container = ({ maxWidth = rhythm(40) }) => css`
  margin-left: auto;
  margin-right: auto;
  max-width: ${maxWidth};
`

export const button = ({ color = theme.colors.primary }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color};
  border: 2px solid ${color};
  text-transform: uppercase;
  background-image: none;
  padding: ${rhythm(1 / 3)} ${rhythm(1)};

  :hover span {
    background-image: ${underline(color)};
  }

  svg {
    margin-left: ${rhythm(1 / 4)};
  }
`

export const reversedLink = ({ color = theme.colors.primary }) =>
  css`
    color: ${color};
    background-image: none;
    :hover {
      background-image: ${underline(color)};
    }

    &.active {
      border-bottom: 3px solid ${theme.colors.secondary};
      :hover {
        background-image: none;
      }
    }
  `
