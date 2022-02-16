import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import * as classes from "./NavMenu.module.scss"

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navItems {
            label
            path
          }
        }
      }
    }
  `)
  const navItems = data.site.siteMetadata.navItems

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className={classes.container}>
      <nav class="nav">
        <button
          onClick={toggleMenu}
          className={
            menuOpen
              ? `${classes.toggleMenu} ${classes.active}`
              : classes.toggleMenu
          }
        >
          <span></span>
        </button>
      </nav>
      <div
        className={
          menuOpen
            ? `${classes.menuContainer} ${classes.open}`
            : classes.menuContainer
        }
      >
        <div className={classes.nav}>
          <div className={classes.tag}>{`<menu>`}</div>
          <div className={classes.explore}>
            {navItems.map((item, index) => {
              return (
                <Link
                  role="navigation"
                  aria-label={item.label}
                  onClick={toggleMenu}
                  key={index}
                  className={classes.link}
                  to={item.path}
                >
                  {`<${item.label} />`}
                </Link>
              )
            })}
          </div>
          <div className={classes.tag}>{`</menu>`}</div>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
