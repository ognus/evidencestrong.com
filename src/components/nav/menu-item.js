import React from "react"
import { MenuLink } from "./menu-link"
import { SubMenu } from "./sub-menu"

export const MenuItem = ({
  value,
  slug,
  subMenu,
  activeSubMenu,
  onSelected,
}) => {
  if (subMenu) {
    return (
      <SubMenu
        name={value}
        slug={slug}
        values={subMenu}
        activeSubMenu={activeSubMenu}
        onSelected={onSelected}
      />
    )
  }

  return <MenuLink slug={slug} value={value} />
}
