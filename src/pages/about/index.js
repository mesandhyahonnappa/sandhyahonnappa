import React from "react"
import Block from "../../components/Block"
import GigaText from "../../components/GigaText"
import ImageProfile from "../../components/ImageProfile"
import * as classes from "./about.module.scss"
import GoNext from "../../components/GoNext"
import Seo from "../../components/Seo"

const About = () => {
  return (
    <>
      <Seo title="About | Sandhya Honnappa" />
      <GigaText text="About" />
      <div className={classes.aboutContainer}>
        <div className={classes.about}>
          <Block tag="about">
            <p>Hello, there!!!</p>
            <p>
              I am passionate about building things for
              <em className={classes.themeText}> Web</em>.
            </p>
            <p>I live in Bangalore, the Silicon City of India.</p>
          </Block>
        </div>
        <div className={classes.profilePic}>
          <ImageProfile />
        </div>

        <div className={classes.more}>
          <Block tag="more">
            {/* <p>
              My interest in Web Development started in 2016, when my team
              collectively decided to migrate a traditional web app to high
              performant, easy to extend, modern UI application using Angular.
            </p> */}
            <p>
              I enjoy on the Front-End ecosystems, with an extra fondness for
              Design and interactivity.
            </p>
            <p>
              I'm not the typical designer working on Sketch/Illustrator, but I
              <span style={{ color: "var(--complement)" }}> &#10084; </span>
              to design, engrossed in tweaking CSS, creating device ergonomic
              layouts.
            </p>
            <p>
              Outside my work and learning, I like to cook, read, and spend time
              with my family.
            </p>
          </Block>
        </div>
        <div className={classes.journey}>
          <Block tag="journey">
            <h2>My Journey...</h2>
            <p>I've over a decade of experience in programming for the web.</p>
            <p>
              I've worked with startups and MNC, building several web projects
              ranging from websites to complex data-driven web applications from
              domain across
              <em className={classes.complementText}> payroll</em>,
              <em className={classes.complementText}> banking</em>,
              <em className={classes.complementText}> healthcare</em>,
              <em className={classes.complementText}> retail</em> and
              <em className={classes.complementText}> telecommunication</em>.
            </p>
            <p>
              I have initially built web apps using ASP.NET web forms, ASP.NET
              MVC and JQuery. Eventually, I worked hard to gain expertise in
              pillars of WEB -<em className={classes.complementText}> HTML</em>,{" "}
              <em className={classes.complementText}> CSS</em>, and
              <em className={classes.complementText}> JavaScript</em>.
            </p>
            <p>
              I was fascinated by how JQuery enabled us to write less and
              achieve more. As a result, I grew interest for the emerging JS
              Frameworks Angular and React.
            </p>

            <p>
              I <span className={classes.complementText}>&#10084;</span>{" "}
              building web apps using
              <em className={classes.complementText}> React</em> and other JS
              frameworks.
            </p>
            <p>
              I've been entirely into front-end development for over 5 years
              now.
            </p>
            <p>
              I have worked as a
              <em className={classes.complementText}>
                {" "}
                Principal Frontend Specialist
              </em>
              .
            </p>
            <p>
              I've worked on a Design System, building simple UI to complex data
              visualization framework-agnostic web components.
            </p>
            <p>
              I am humbled to have executed the Frontend capability Building
              Program, which helped fellow engineers to master frontend
              technologies and honed them to become valuable assets to any team
              they have worked.
              <br /> As a result, we could win and execute many client projects,
              which best served the company's growth.
            </p>
          </Block>
        </div>
        <div className={classes.next}>
          <GoNext text="Skills" />
        </div>
      </div>
    </>
  )
}

export default About
