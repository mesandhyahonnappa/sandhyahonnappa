import React from "react";
import { useSpring, animated, config } from "react-spring";
import * as classes from "./hash.module.scss";

const Hash = () => {
  const { x: xX } = useSpring({
    from: { x: 0 },
    x: 1,
    delay: 200,
    config: { ...config.molasses, duration: 1000 },
  });

  const { x: xY } = useSpring({
    from: { x: 0 },
    x: 1,
    delay: 1100,
    config: { ...config.molasses, duration: 1000 },
  });

  return (
    <div className={classes.hash}>
      <svg className={classes.svg}>
        <g transform="translate(60,60)">
          <animated.line
            id="lX1"
            className={classes.line}
            x1="-50"
            y1="-20"
            x2="50"
            y2="-20"
            strokeDasharray={110}
            strokeDashoffset={xX.to((x) => (1 - x) * 110)}
          ></animated.line>
          <animated.line
            id="lX2"
            className={classes.line}
            x2="-50"
            y2="20"
            x1="50"
            y1="20"
            strokeDasharray={110}
            strokeDashoffset={xX.to((x) => (1 - x) * 110)}
          ></animated.line>
          <animated.line
            id="lY1"
            className={classes.line}
            x2="-30"
            y2="50"
            x1="-10"
            y1="-50"
            strokeDasharray={110}
            strokeDashoffset={xY.to((x) => (1 - x) * 110)}
          ></animated.line>
          <animated.line
            id="lY2"
            className={classes.line}
            x1="10"
            y1="50"
            x2="30"
            y2="-50"
            strokeDasharray={110}
            strokeDashoffset={xY.to((x) => (1 - x) * 110)}
          ></animated.line>
        </g>
      </svg>
    </div>
  );
};

export default Hash;
