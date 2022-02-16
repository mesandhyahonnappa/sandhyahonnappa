import React, { useEffect, useRef } from "react";
import * as classes from "./cursor.module.scss";
const isBrowser = typeof window !== "undefined";

const Cursor = () => {
  const dotOutline = useRef(null);
  const dot = useRef(null);

  const delay = 18;
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(isBrowser ? window.innerWidth / 2 : 0); // X position of dot
  const endY = useRef(isBrowser ? window.innerHeight / 2 : 0); // Y position of dot
  const _x = useRef(isBrowser ? window.innerWidth / 2 : 0); // X position of outline
  const _y = useRef(0); // Y position of outline

  const requestRef = useRef(null);

  const toggleCursorVisibility = () => {
    dot.current.style.opacity = cursorVisible.current ? 1 : 0;
    dotOutline.current.style.opacity = cursorVisible.current ? 1 : 0;
  };

  const toggleCursorSize = () => {
    dot.current.style.transform = cursorEnlarged.current
      ? "translate(-50%, -50%) scale(0.75)"
      : "translate(-50%, -50%) scale(1)";
    dotOutline.current.style.transform = cursorEnlarged.current
      ? "translate(-50%, -50%) scale(1.75)"
      : "translate(-50%, -50%) scale(1)";
  };

  const mouseDownEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseUpEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";

    if (e.target.getAttribute("data-cursor") === "link") {
      dotOutline.current.style.setProperty("--outlineColor", "var(--theme)");
    } else {
      dotOutline.current.style.setProperty("--outlineColor", "var(--white)");
    }
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    const mouseEventList = [
      ["mousedown", mouseDownEvent],
      ["mouseup", mouseUpEvent],
      ["mousemove", mouseMoveEvent],
      ["mouseEnter", mouseEnterEvent],
      ["mouseleave", mouseLeaveEvent],
    ];
    mouseEventList.forEach((mouseEvent) => {
      document.addEventListener(mouseEvent[0], mouseEvent[1]);
    });
    animateDotOutline();

    return () => {
      mouseEventList.forEach((mouseEvent) => {
        document.removeEventListener(mouseEvent[0], mouseEvent[1]);
      });
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotOutline} className={classes.cursorDotOutline}></div>
      <div ref={dot} className={classes.cursorDot}></div>
    </>
  );
};

export default Cursor;
