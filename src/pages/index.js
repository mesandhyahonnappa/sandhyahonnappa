import React, { useState, useLayoutEffect } from "react"
import Seo from "../components/Seo"
import Home from "../components/Home"
import HomeMini from "../components/HomeMini"
const isBrowser = typeof window !== "undefined"
const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useLayoutEffect(() => {
    setWindowWidth(isBrowser ? window.innerWidth : 1200)
  }, [])

  return (
    <>
      <Seo />
      {windowWidth > 1200 ? <Home /> : <HomeMini />}
    </>
  )
}

export default IndexPage
