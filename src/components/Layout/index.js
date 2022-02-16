import React from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.png"
import * as classes from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={classes.content}>
      <header className={classes.header}>
        <Link data-cursor="link" to="/">
          <img src={logo} alt="Sandhya Honnappa" width="200px" />
        </Link>
      </header>
      <main className={classes.mainContent}>{children}</main>
    </div>
  )
}

export default Layout
