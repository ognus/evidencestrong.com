import styled from "@emotion/styled"
import React from "react"
import { useLocation } from "@reach/router"
import { theme } from "../../utils/theme"
import { rhythm, scale } from "../../utils/typography"
import { List } from "../basic"
import { MenuLink } from "./menu-link"
import { Toggler } from "./toggler"

const MenuList = styled(List)`
  ${scale(-1 / 4)};
  overflow: hidden;
  background: ${theme.colors.background.secondary};
  padding-top: ${rhythm(1.25 / 4)};

  li {
    padding: 0 ${rhythm(1.25 / 2)} ${rhythm(1.25 / 4)};
  }
`

const Menu = styled.div`
  transform: scaleY(${({ isVisible }) => (isVisible ? 1 : 0)});
  transform-origin: top;
  position: absolute;
  margin-top: ${rhythm(1.25 / 4)};
  margin-left: -${rhythm(1.25 / 2)};
  border-left: 2px solid ${theme.colors.background.primary};
  border-right: 2px solid ${theme.colors.background.primary};
  border-bottom: 2px solid ${theme.colors.background.primary};
  transition: transform 0.1s ease-out
    ${({ isVisible }) => (isVisible ? "0.2s" : "0s")};
`

function getAbsoluteUrl(root, url) {
  if (url.startsWith("http")) {
    return url
  }

  return `${root}/${url}`.replace("//", "/")
}

export const SubMenu = ({ slug, name, values, activeSubMenu, onSelected }) => {
  const location = useLocation()

  const isOpen = name === activeSubMenu
  const isMatchingLocation = location.pathname.startsWith(slug)

  return (
    <>
      <Toggler
        value={name}
        isOpen={isOpen}
        isActive={isMatchingLocation}
        onToggle={onSelected}
      />
      <Menu isVisible={!name || isOpen}>
        <MenuList
          isInline={false}
          values={values}
          component={({ value, slug: subSlug }) => (
            <MenuLink value={value} slug={getAbsoluteUrl(slug, subSlug)} />
          )}
        />
      </Menu>
    </>
  )
}
