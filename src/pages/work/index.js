import React from "react"
import GigaText from "../../components/GigaText"
import { HiHashtag } from "react-icons/hi"
import { useTrail, animated } from "react-spring"
import * as classes from "./work.module.scss"
import Block from "../../components/Block"
import Experience from "../../components/Experience"
import Seo from "../../components/Seo"

import data from "../../data/work.json"

const Work = () => {
  const trail = useTrail(data.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 1000,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  })

  return (
    <>
      <Seo title="Work | Sandhya Honnappa" />
      <GigaText text="Work" />
      <div className={classes.container}>
        <div className={classes.presentState}>
          <Block tag="present">
            <p>
              Working as an independent front-end developer on{" "}
              <em className={classes.upworkLink}>
                {" "}
                <a
                  href="https://www.upwork.com/freelancers/sandhyahonnappa"
                  target="blank"
                >
                  Upwork
                </a>
              </em>
              .
            </p>
            <ul className={classes.connect}>
              <li>
                <HiHashtag className={classes.icon} size="1em" />
                Are you looking for an expert front-end developer for building
                your web application?
              </li>
              <li>
                <HiHashtag className={classes.icon} size="1em" />
                Are you looking for someone who can lead your project from
                initiation to completion?
              </li>
              <li>
                <HiHashtag className={classes.icon} size="1em" />
                Do you need someone who can code your project and also be a
                leader who can guide your other team members?
              </li>
              <li>
                <HiHashtag className={classes.icon} size="1em" />
                Are you looking for elite work?
              </li>
            </ul>
            <p>
              Please connect with me through Upwork,
              <em className={classes.upworkLink}>
                {" "}
                <a
                  href="https://www.upwork.com/freelancers/sandhyahonnappa"
                  target="blank"
                >
                  here.
                </a>
              </em>
            </p>
          </Block>
        </div>
        <div className={classes.workDescription}>
          <Block tag="work">
            <p>
              In my professional path, I have worked for organizations, building
              web apps for many high-profile clients. I had the privilege of
              learning about their unique problems and challenges of creating a
              software application that best served their business.
            </p>
            <p>
              I've led multiple projects by collaborating with developers,
              project managers, business analysts, and users and
              conceptualizing, estimating, architecture, and developing simple
              to complex web applications.
            </p>
          </Block>
        </div>
        <div className={classes.workExperience}>
          <div className={classes.experience}>
            {trail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Experience {...data[index]} />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
