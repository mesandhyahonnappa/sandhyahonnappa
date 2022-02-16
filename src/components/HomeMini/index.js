import React from "react"
import NavMenu from "../NavMenu"
import * as classes from "./homeMini.module.scss"

const HomeMini = () => {
  return (
    <>
      <div className={classes.menu}>
        <NavMenu />
      </div>
      <div className={classes.container}>
        <div className={classes.greet}>
          <div className={classes.tag}>{`<greet>`}</div>
          <div className={classes.greetingText}>Hello, I'm </div>
          <div className={classes.firstName}>Sandhya </div>
          <div className={classes.lastName}>Honnappa</div>
          <div className={classes.tag}>{`</greet>`}</div>
        </div>
      </div>
    </>
  )
}

export default HomeMini
