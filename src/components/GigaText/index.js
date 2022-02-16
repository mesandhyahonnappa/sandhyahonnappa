import React from "react";
import * as classes from "./gigaText.module.scss";
import { Spring, animated } from "react-spring";

const GigaText = ({ text }) => {
  return (
    <Spring
      from={{ opacity: 0, right: -500 }}
      to={{ opacity: 0.06, right: 0 }}
      config={{ duration: 2000 }}
    >
      {(styles) => (
        <animated.div className={classes.gigaMaskedText} style={styles}>
          {text}
        </animated.div>
      )}
    </Spring>
  );
};

export default GigaText;
