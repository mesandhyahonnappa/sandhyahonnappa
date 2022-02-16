import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import * as classes from "./goNext.module.scss";

const GoNext = ({ text }) => {
  const style = useSpring({
    from: { opacity: 0.5, x: -10 },
    to: { opacity: 1, x: 0 },
    config: { duration: 600 },
    loop: { reverse: true },
  });
  return (
    <animated.div className={classes.next} style={style}>
      <Link
        data-cursor="link"
        to={`/${text.toLowerCase()}`}
        className={classes.link}
      >
        <span
          data-cursor="link"
          className={classes.tagText}
        >{`<${text.toLowerCase()}>`}</span>
        ...
        <span
          data-cursor="link"
          className={classes.tagText}
        >{`</${text.toLowerCase()}>`}</span>
      </Link>
    </animated.div>
  );
};

export default GoNext;
