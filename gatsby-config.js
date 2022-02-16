/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Sandhya Honnappa`,
    siteUrl: `https://www.sandhyahonnappa.dev`,
    description: `A Pro Web Developer`,
    navItems: [
      {
        label: "About",
        path: "/about",
      },
      {
        label: "Skills",
        path: "/skills",
      },
      {
        label: "Work",
        path: "/work",
      },
      {
        label: "Contact",
        path: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`),
      },
    },
  ],
}
