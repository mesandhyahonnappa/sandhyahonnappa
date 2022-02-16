import React from "react"
import { Link } from "gatsby"
import Nav from "../Nav"
import logo from "../../images/Logo.png"
import * as classes from "./layout.module.scss"

const Layout = ({ children, pageContext }) => {
  return (
    <>
      {pageContext.layout !== "root" ? (
        <>
          <div className={classes.content}>
            <header className={classes.header}>
              <Link data-cursor="link" to="/">
                <img src={logo} alt="Sandhya Honnappa" width="200px" />
              </Link>
              <Nav />
            </header>
            <main className={classes.mainContent}>{children}</main>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Layout
