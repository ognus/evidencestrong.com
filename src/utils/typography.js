import Typography from "typography"
import FairyGatesTheme from "typography-theme-fairy-gates"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"
import { theme } from "./theme"

const linkColor = theme.colors.primary

export const underline = color =>
  `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${color} 1px, ${color} 2px, rgba(0, 0, 0, 0) 2px)`

const TypographyTheme = {
  ...FairyGatesTheme,
  baseFontSize: "19px",
  headerFontFamily: [theme.fonts.header.fontFamily, "sans-serif"],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  headerWeight: theme.fonts.header.weights.bold,
  bodyWeight: theme.fonts.body.weights.regular,
  boldWeight: theme.fonts.body.weights.bold,
  headerColor: theme.colors.text.header,
  bodyColor: theme.colors.text.body,
}

TypographyTheme.overrideThemeStyles = ({ rhythm }) => {
  return {
    a: {
      color: linkColor,
      textShadow: "none",
      backgroundImage: underline(linkColor),
    },
    blockquote: {
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
      },
    },
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
  }
}

delete TypographyTheme.googleFonts

const typography = new Typography(TypographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
