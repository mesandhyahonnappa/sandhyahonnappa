import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Page not found!!!</h1>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage
