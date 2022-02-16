import React from "react"
import * as classes from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <h1>Sandhya Honnappa</h1>
      <hr />
      {children}
    </div>
  )
}

export default Layout
