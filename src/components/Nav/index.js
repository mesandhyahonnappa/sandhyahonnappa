import React, { useState, useLayoutEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as classes from "./nav.module.css";
import NavMenu from "../NavMenu";
const isBrowser = typeof window !== "undefined";

const Nav = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  useLayoutEffect(() => {
    const width = isBrowser ? window.innerWidth : 0;

    setSmallScreen(width <= 1200);
  }, []);

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navItems {
            label
            path
          }
        }
      }
    }
  `);
  const navItems = data.site.siteMetadata.navItems;

  return !smallScreen ? (
    <nav className={classes.nav}>
      {navItems.map((item, index) => {
        return (
          <Link
            data-cursor="link"
            key={index}
            to={item.path}
            className={classes.link}
          >
            {`<${item.label} />`}
          </Link>
        );
      })}
    </nav>
  ) : (
    <NavMenu />
  );
};

export default Nav;
