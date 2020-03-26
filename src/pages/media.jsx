import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { getAllEvents } from "../components/utils";

// import QuickMenu from "../components/mediaPage/quickMenu";
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

      <div className="pb-16 xl:pb-24 xl:pb-32 mx-auto sm:mt-12 bigm:px-1 sm:px-6 w-full max-w-screen-xl">
        {/* <QuickMenu events={events} /> */}

        {getAllEvents().map((event, index) => {
          const items = data.allMarkdownRemark.group.find(
            (el) => el.fieldValue === event.eventID
          ).edges;

          return (
            <GallerySection
              key={event.eventID}
              event={event}
              index={index}
              items={items}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
      group(field: frontmatter___eventID) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date(formatString: "dd D MMM Y", locale: "nl-NL")
              eventID
              category
              sort
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
        fieldValue
      }
    }
  }
`;

export default GalleryOverviewPage;
