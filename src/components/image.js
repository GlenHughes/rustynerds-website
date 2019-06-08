import React from "react";
import Img from 'gatsby-image'
import { graphql, StaticQuery } from "gatsby"

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          alt={props.alt}
          fluid={imageSizes}
        />
      );
    }}
  />
)

export default Image
