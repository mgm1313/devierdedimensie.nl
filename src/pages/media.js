import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { events } from "../assets/eventsInfo";

import QuickMenu from "../components/mediaPage/quickMenu";
import GallerySection from "../components/mediaPage/gallerySection";

import shape2D from "../assets/shapes/2d.svg";
import shape3D from "../assets/shapes/3d.svg";
import shape4D from "../assets/shapes/4d.svg";

function GalleryOverviewPage({ data }) {
  const shapes = [shape2D, shape3D, shape4D];

  return (
    <Layout>
      <SEO title="Media" />

      <div className="absolute -z-10 inset-0 overflow-hidden" id="page-media">
        {[2, 3, 4].map((i) => (
          <img
            key={i}
            alt=""
            className="absolute opacity-25 lazyload"
            data-src={shapes[i - 2]}
            id={`shape-${i}d`}
          />
        ))}
      </div>

      <QuickMenu events={events} />

      <main className="max-w-6xl 2xl:max-w-75vw mx-auto w-full px-3 md:px-8 lg:px-12 2xl:px-20">
        {events.map((event, i) => (
          <GallerySection
            key={i}
            event={event}
            gallery={data[event.short]}
            index={i}
          />
        ))}
      </main>
    </Layout>
  );
}

export const query = graphql`
  {
    opening: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 0, lt: 100 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, grayscale: true) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    gala: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 100, lt: 200 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 600
                  duotone: {
                    highlight: "#e50074"
                    shadow: "#2d2c86"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    wispo: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 200, lt: 300 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 600
                  duotone: {
                    highlight: "#4BB9EF"
                    shadow: "#F86F41"
                    opacity: 40
                  }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    lustrumweek: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 300, lt: 400 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 600
                  duotone: {
                    highlight: "#2D2C86"
                    shadow: "#9E2C51"
                    opacity: 40
                  }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    theater: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 400, lt: 500 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 600
                  duotone: {
                    highlight: "#62B017"
                    shadow: "#A41E34"
                    opacity: 40
                  }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    piekweek: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 500, lt: 600 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 600
                  duotone: {
                    highlight: "#2BB198"
                    shadow: "#BD2432"
                    opacity: 40
                  }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    revival: allMarkdownRemark(
      filter: { frontmatter: { sort: { gte: 600, lt: 700 } } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, grayscale: true) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GalleryOverviewPage;
