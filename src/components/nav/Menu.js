import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { useMenu } from "../../hooks/use-menu"
import { theme } from "../../utils/theme"
import { rhythm } from "../../utils/typography"
import { List } from "../basic"
import { MenuItem } from "./menu-item"

const Nav = styled.nav`
  margin-top: ${rhythm(1.4)};
  margin-right: -${rhythm(1.25 / 2)};
  z-index: 100;

  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
`

const MenuList = styled(List)`
  padding-left: ${rhythm(1.25 / 4)};
  padding-bottom: ${rhythm(1.25 / 4)};
  li {
    margin: 0;
    padding: 0 ${rhythm(1 / 2)};

    @media (min-width: 400px) {
      padding: 0 ${rhythm(1.25 / 2)};
    }
  }
`

const Separator = styled.hr`
  transform: scaleX(${({ isVisible }) => (isVisible ? 1 : 0)});
  transform-origin: right;
  transition: transform 0.1s ease-out
    ${({ isVisible }) => (isVisible ? "0s" : "0.2s")};
  height: 2px;
  background-color: ${theme.colors.primary};
  border: none;
`

export const Menu = ({ className }) => {
  const menu = useMenu()
  const [activeSubMenu, setActiveSubMenu] = useState()

  useEffect(() => {
    const clickListener = ({ target }) => {
      if (target.name !== "toggler") {
        setActiveSubMenu(null)
      }
    }

    window.addEventListener("click", clickListener)
    return () => {
      window.removeEventListener("click", clickListener)
    }
  }, [])

  const toggle = menuItem => {
    const newValue = menuItem === activeSubMenu ? null : menuItem
    setActiveSubMenu(newValue)
  }

  return (
    <Nav className={className}>
      <MenuList
        values={menu}
        component={({ value, slug, subMenu }) => (
          <MenuItem
            value={value}
            slug={slug}
            subMenu={subMenu}
            activeSubMenu={activeSubMenu}
            onSelected={value => toggle(value)}
          />
        )}
      />
      <Separator isVisible={activeSubMenu} />
    </Nav>
  )
}
