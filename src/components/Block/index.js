import React, { useState } from "react";
import { useChain, useSpring, useSpringRef, animated } from "react-spring";
import useMeasure from "react-use-measure";
import * as classes from "./block.module.scss";

import { AiOutlineEllipsis } from "react-icons/ai";

const Block = ({ tag, children }) => {
  const [open, setOpen] = useState(true);
  const [ref, { height }] = useMeasure();

  const [ellipseRef, { height: ellipseHeight }] = useMeasure();

  const springBlockContentRef = useSpringRef();
  const styleBlockContent = useSpring({
    ref: springBlockContentRef,
    from: { height: 0 },
    to: { height: open ? height : 0 },
    config: { duration: 1000 },
  });

  const springEllipseRef = useSpringRef();
  const styleEllipse = useSpring({
    ref: springEllipseRef,
    from: { height: 0 },
    to: { height: open ? 0 : ellipseHeight },
  });

  useChain(
    open
      ? [springEllipseRef, springBlockContentRef]
      : [springBlockContentRef, springEllipseRef],
    [0, open ? 0 : 0.9]
  );

  return (
    <section className={classes.block}>
      <div className={classes.tag}>
        <span
          onClick={() => setOpen(!open)}
          data-cursor="link"
          className={classes.tagText}
        >{`<${tag}>`}</span>
      </div>

      <animated.div
        onClick={() => setOpen(!open)}
        style={{ overflow: "hidden", ...styleEllipse }}
      >
        <div
          ref={ellipseRef}
          style={{
            display: "flex",
            alignItems: "center",
            height: open ? "0px" : "6px",
          }}
        >
          <AiOutlineEllipsis
            data-cursor="link"
            style={{ overflow: "hidden", ...styleEllipse }}
            className={classes.icon}
            size="2rem"
          />
        </div>
      </animated.div>

      <animated.div style={{ overflow: "hidden", ...styleBlockContent }}>
        <div
          style={{ overflow: "hidden", ...styleBlockContent }}
          ref={ref}
          className={classes.blockContent}
        >
          {children}
        </div>
      </animated.div>
      <div className={classes.tag}>
        <span
          onClick={() => setOpen(!open)}
          data-cursor="link"
          className={classes.tagText}
        >{`</${tag}>`}</span>
      </div>
    </section>
  );
};
export default Block;
