import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { Waypoint } from "react-waypoint";
import Block from "../../components/Block";
import { useSpring, animated } from "react-spring";
import GigaText from "../../components/GigaText";
import Hash from "../../components/Hash";
import * as classes from "./skills.module.scss";
import GoNext from "../../components/GoNext";
import Seo from "../../components/Seo";

const Skills = () => {
  const [values, setValues] = useState(false);
  const [proficiency, setProficiency] = useState(false);
  const style = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    delay: 1000,
    config: { duration: 1000 },
  });

  const onScrollTo = (block) => {
    console.log(block);
    if (block === "proficiency") {
      setProficiency(true);
    }
    if (block === "values") {
      setValues(true);
    }
  };
  return (
    <>
      <Seo title="Skills | Sandhya Honnappa" />
      <GigaText text="Skills" />
      <div className={classes.container}>
        <div className={classes.skillsDescription}>
          <Block tag="skills">
            <p>
              With over
              <em className={classes.complementText}> 12 years </em>
              of experience in developing wide variety of web applications I
              have honed the skills to create high-quality software solutions
              for web.
            </p>
            <p>
              I've not only gained expertise in
              <em className={classes.complementText}>FrontEnd</em> tech stacks
              but have also enhanced the
              <em className={classes.complementText}> soft skills </em>
              required to produce at peak level.
            </p>
          </Block>
        </div>
        <animated.div style={style} className={classes.tag}>
          <div id="tm" className={`${classes.tm} ${classes.soft}`}>
            Time Management
          </div>
          <div id="fc" className={`${classes.fc} ${classes.soft}`}>
            Focus
          </div>
          <div id="ds" className={`${classes.ds} ${classes.other}`}>
            Design System
          </div>
          <div id="dw" className={`${classes.dw} ${classes.soft}`}>
            Deep Work
          </div>
          <div id="ht" className={`${classes.ht} ${classes.main}`}>
            HTML
          </div>
          <div id="cs" className={`${classes.cs} ${classes.main}`}>
            CSS3
          </div>
          <div id="mf" className={`${classes.mf} ${classes.other}`}>
            MicroFrontend
          </div>
          <div id="sb" className={`${classes.sb} ${classes.other}`}>
            StoryBook
          </div>
          <div id="ac" className={`${classes.ac} ${classes.soft}`}>
            Accountability
          </div>
          <div id="an" className={`${classes.an} ${classes.other}`}>
            CSS Animation
          </div>
          <div id="ux" className={`${classes.ux} ${classes.main}`}>
            UX
          </div>
          <div id="gb" className={`${classes.gb} ${classes.main}`}>
            Gatsby
          </div>
          <div id="rl" className={`${classes.rl} ${classes.soft}`}>
            Reliable
          </div>
          <div id="js" className={`${classes.js} ${classes.main}`}>
            JavaScript
          </div>
          <div id="ef" className={`${classes.ef} ${classes.soft}`}>
            Efficient
          </div>
          <div id="gb" className={`${classes.gb} ${classes.main}`}>
            Gatsby
          </div>
          <div id="db" className={`${classes.db} ${classes.soft}`}>
            Debugging
          </div>
          <div id="sc" className={`${classes.sc} ${classes.other}`}>
            Styled Components
          </div>
          <div id="d3" className={`${classes.d3} ${classes.main}`}>
            D3
          </div>
          <div id="ps" className={`${classes.ps} ${classes.soft}`}>
            Problem Solving
          </div>
          <div id="sk" className={`${classes.sk} ${classes.center}`}>
            <Hash />
          </div>
          <div id="cc" className={`${classes.cc} ${classes.soft}`}>
            Clean Coding
          </div>
          <div id="re" className={`${classes.re} ${classes.main}`}>
            React
          </div>
          <div id="gq" className={`${classes.gq} ${classes.main}`}>
            GraphQL
          </div>
          <div id="jm" className={`${classes.jm} ${classes.other}`}>
            JAMStack
          </div>
          <div id="cr" className={`${classes.cr} ${classes.soft}`}>
            Creative
          </div>
          <div id="dv" className={`${classes.dv} ${classes.other}`}>
            Data Visualization
          </div>
          <div id="cm" className={`${classes.cm} ${classes.other}`}>
            CMS
          </div>
          <div id="no" className={`${classes.no} ${classes.main}`}>
            Node JS
          </div>
          <div id="sl" className={`${classes.sl} ${classes.soft}`}>
            Self Learning
          </div>
          <div id="nx" className={`${classes.nx} ${classes.main}`}>
            Next JS
          </div>
          <div id="de" className={`${classes.de} ${classes.other}`}>
            Design
          </div>
          <div id="sa" className={`${classes.sa} ${classes.main}`}>
            SASS
          </div>
          <div id="pw" className={`${classes.pw} ${classes.other}`}>
            Progressive Web Apps
          </div>
          <div id="rd" className={`${classes.rd} ${classes.main}`}>
            Redux
          </div>
          <div id="mo" className={`${classes.mo} ${classes.other}`}>
            MonoRepos
          </div>
          <div id="sv" className={`${classes.sv} ${classes.main}`}>
            Svelte
          </div>
          <div id="te" className={`${classes.te} ${classes.soft}`}>
            Testing
          </div>
          <div id="dp" className={`${classes.dp} ${classes.soft}`}>
            Dependable
          </div>
          <div id="ct" className={`${classes.ct} ${classes.soft}`}>
            Critical Thinking
          </div>
          <div id="cn" className={`${classes.cn} ${classes.soft}`}>
            Communication
          </div>
          <div id="wp" className={`${classes.wp} ${classes.main}`}>
            Webpack
          </div>
          <div id="ag" className={`${classes.ag} ${classes.main}`}>
            Angular
          </div>
          <div id="gt" className={`${classes.gt} ${classes.main}`}>
            Git
          </div>
          <div id="ts" className={`${classes.ts} ${classes.main}`}>
            TypeScript
          </div>
          <div id="tw" className={`${classes.tw} ${classes.soft}`}>
            Team Work
          </div>
          <div id="ra" className={`${classes.ra} ${classes.main}`}>
            Rest API
          </div>
        </animated.div>

        <div className={classes.wayPointProficiency}>
          <Waypoint onEnter={() => onScrollTo("proficiency")}></Waypoint>
        </div>
        <div className={classes.proficiency}>
          {proficiency && (
            <Block tag="proficiency">
              <p>
                I'm proficient in
                <em className={classes.complementText}> React</em>. I call
                myself a pro frontend developer who can
                <em className={classes.complementText}> Design</em>. I'm
                passionate about
                <em className={classes.complementText}> clean code</em>.
              </p>
            </Block>
          )}
        </div>
        <div className={classes.quote}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaQuoteLeft
              style={{ display: "flex", alignSelf: "flex-start" }}
              className={classes.icon}
              size="4em"
            />
            <p className={classes.text}>
              It is not that things are difficult that we do not dare; <br /> It
              is because we do not dare that things are difficult.
            </p>
          </div>
          <p
            style={{
              textAlign: "right",
              fontSize: "2.4rem",
              marginTop: "2rem",
            }}
          >
            - Seneca
          </p>
        </div>

        <div className={classes.wayPointValues}>
          <Waypoint onEnter={() => onScrollTo("values")}></Waypoint>
        </div>
        <div className={classes.values}>
          {values && (
            <Block tag="values">
              <div className={classes.process}>
                <div className={classes.value}>
                  <HiHashtag className={classes.icon} size="2em" />
                  <strong>
                    Learn<span>.</span>
                  </strong>
                </div>
                <div className={classes.value}>
                  <HiHashtag className={classes.icon} size="2em" />
                  <strong>
                    Apply<span>.</span>
                  </strong>
                </div>
                <div className={classes.value}>
                  <HiHashtag className={classes.icon} size="2em" />
                  <strong>
                    Repeat<span>.</span>
                  </strong>
                </div>
              </div>
              <p>
                I have ingrained that learning is eternal. These skills didn’t
                exist a few years ago and will likely be outdated a few years
                from now. Thus, I am constantly learning new technologies.
              </p>
              <p>
                My current interests are SEO, Accessability, Data Visualization
                and Creative Coding.
              </p>
            </Block>
          )}
        </div>

        <div className={classes.next}>
          <GoNext text="Work" />
        </div>
      </div>
    </>
  );
};

export default Skills;
