import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { Category } from "./category"

export const Tag = ({ className, value, count }) => {
  return (
    <Category
      css={css`
        span {
          ::before {
            content: "#";
            padding-right: ${rhythm(1 / 14)};
          }
        }
      `}
      className={className}
      type="tag"
      value={value}
      count={count}
    />
  )
}
