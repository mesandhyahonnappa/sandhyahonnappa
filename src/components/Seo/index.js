import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default Seo;
