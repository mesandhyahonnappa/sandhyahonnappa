import React from "react";
import GigaText from "../../components/GigaText";
import { useTrail, animated } from "react-spring";
import * as classes from "./work.module.scss";
import Block from "../../components/Block";
import Experience from "../../components/Experience";
import Seo from "../../components/Seo";

import data from "../../data/work.json";

const Work = () => {
  const trail = useTrail(data.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 1000,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  });

  return (
    <>
      <Seo title="Work | Sandhya Honnappa" />
      <GigaText text="Work" />
      <div className={classes.container}>
        <div className={classes.workDescription}>
          <Block tag="work">
            <p>
              In my professional path, I have worked for organizations, building
              web apps for many high-profile clients. I had the privilege of
              learning about their unique problems and challenges of creating a
              software application that best served their business.
            </p>
            <p>
              I've lead multiple projects by collaborating with developers,
              project managers, business analysts and users in conceptualizing,
              estimating and developing all simple to complex web applications.
            </p>
          </Block>
        </div>
        <div className={classes.workExperience}>
          <div className={classes.experience}>
            {trail.map((style, index) => (
              <animated.div style={style}>
                <Experience {...data[index]} />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
