import React from "react";
import { HiHashtag } from "react-icons/hi";
import * as classes from "./experience.module.scss";

const Experience = ({ duration, title, organization, url }) => {
  return (
    <article className={classes.experience}>
      <div>
        <HiHashtag className={classes.icon} size="2em" />
      </div>
      <div>
        <h5>{title}</h5>
        <em>{duration}</em>
        <h6>
          <a href={url}>{organization}</a>
        </h6>
      </div>
    </article>
  );
};

export default Experience;
