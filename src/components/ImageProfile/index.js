import React, { useRef, useEffect } from "react"
import { useSpring, animated } from "@react-spring/web"
import { useGesture } from "@use-gesture/react"
import me from "../../images/profile.jpg"
import * as classes from "./imageProfile.module.scss"
const isBrowser = typeof window !== "undefined"

const calcX = (y, ly) => -(y - ly - isBrowser ? window.innerHeight / 2 : 0) / 20
const calcY = (x, lx) => (x - lx - isBrowser ? window.innerWidth / 2 : 0) / 20
const ImageProfile = () => {
  const domTarget = useRef(null)

  useEffect(() => {
    const preventDefault = e => e.preventDefault()
    document.addEventListener("gesturestart", preventDefault)
    document.addEventListener("gesturechange", preventDefault)

    return () => {
      document.removeEventListener("gesturestart", preventDefault)
      document.removeEventListener("gesturechange", preventDefault)
    }
  }, [])

  const [{ x, y, rotateX, rotateY, rotateZ, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const bind = useGesture({
    onMove: ({ xy: [px, py] }) =>
      api({
        rotateX: calcX(py, y.get()),
        rotateY: calcY(px, x.get()),
        scale: 1.1,
      }),
    onHover: ({ hovering }) => api({ rotateX: 0, rotateY: 0, scale: 1 }),
  })

  return (
    <animated.div
      data-cursor="profile"
      ref={domTarget}
      {...bind()}
      style={{
        transform: "perspective(600px)",
        x,
        y,
        scale,
        rotateX,
        rotateY,
        rotateZ,
      }}
      className={classes.imageProfile}
    >
      <img
        data-cursor="profile"
        src={me}
        className={classes.image}
        alt="sandhyahonnappa"
      />
    </animated.div>
  )
}

export default ImageProfile
