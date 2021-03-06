import React, { useState } from "react"
import { Link } from "gatsby"
import * as classes from "./home.module.scss"
const Home = () => {
  const [about, setAbout] = useState(false)
  const [skills, setSkills] = useState(false)
  const [contact, setContact] = useState(false)

  return (
    <>
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
                    {`<about>...</about>`}
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
                    {`<skills>...</skills>`}
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
                    {`<contact>...</contact>`}
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

export default Home
