import React, { useState, useLayoutEffect } from "react"
import { Link } from "gatsby"
import * as classes from "./home.module.scss"
import Seo from "../components/Seo"
const isBrowser = typeof window !== "undefined"
const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [about, setAbout] = useState(false)
  const [skills, setSkills] = useState(false)
  const [contact, setContact] = useState(false)

  useLayoutEffect(() => {
    setWindowWidth(isBrowser ? window.innerWidth : 1200)
  }, [])

  return (
    <>
      <Seo />
      <div className={classes.container}>
        <div className={classes.introMessage}>
          <div className={classes.introMessageInner}>
            <div className={classes.tag}>{`<greet>`}</div>
            <div
              className={classes.greetingText}
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
              role="button"
              tabIndex="0"
            >
              {!about && <span className={classes.textShow}>Hello, I'm </span>}
              {about && (
                <span className={classes.explore}>
                  <Link
                    role="navigation"
                    aria-label="About"
                    className={classes.link}
                    to="/about"
                  >
                    {windowWidth <= 1200 ? `<about />` : `<about>...</about>`}
                  </Link>
                </span>
              )}
            </div>
            <div
              className={classes.firstName}
              onMouseEnter={() => setSkills(true)}
              onMouseLeave={() => setSkills(false)}
              role="button"
              tabIndex="0"
            >
              {!skills && (
                <span className={`${classes.textShow}`}>Sandhya </span>
              )}
              {skills && (
                <span className={classes.explore}>
                  <Link
                    role="navigation"
                    aria-label="Skills"
                    className={classes.link}
                    to="/skills"
                  >
                    {windowWidth <= 1200
                      ? `<skills />`
                      : `<skills>...</skills>`}
                  </Link>
                </span>
              )}
            </div>
            <div
              role="button"
              tabIndex="0"
              className={classes.lastName}
              onMouseEnter={() => setContact(true)}
              onMouseLeave={() => setContact(false)}
            >
              {!contact && <span className={classes.textShow}>Honnappa</span>}
              {contact && (
                <span className={classes.explore}>
                  <Link
                    role="navigation"
                    aria-label="Contact"
                    className={classes.link}
                    to="/contact"
                  >
                    {windowWidth <= 1200
                      ? `<contact />`
                      : `<contact>...</contact>`}
                  </Link>
                </span>
              )}
            </div>
            <div className={classes.tag}>{`</greet>`}</div>
          </div>
        </div>
        <div className={classes.image}>
          {/* Place holder for image / svg */}
        </div>
      </div>
    </>
  )
}

export default IndexPage
