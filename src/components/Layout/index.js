import React, { useState, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Nav from "../Nav"
import logo from "../../images/Logo.png"
import Cursor from "../Cursor"
import * as classes from "./layout.module.scss"
const isBrowser = typeof window !== "undefined"

const Layout = ({ children, pageContext }) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useLayoutEffect(() => {
    setWindowWidth(isBrowser ? window.innerWidth : 1200)
  }, [])

  return (
    <>
      {pageContext.layout !== "root" ? (
        <>
          {windowWidth > 1200 && <Cursor />}
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
