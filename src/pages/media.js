import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { events } from "../components/galleryConstants";
import Img from "gatsby-image";

import { OutboundLink } from "gatsby-plugin-google-analytics";
import VideoItem from "../components/mediaPage/videoItem";

import shape2D from "../assets/shapes/2d.svg";
import shape3D from "../assets/shapes/3d.svg";
import shape4D from "../assets/shapes/4d.svg";

function GalleryOverviewPage({ data }) {
  return (
    <Layout>
      <SEO title="Media" />

      <div className="absolute -z-10 inset-0 overflow-hidden" id="page-media">
        <img
          alt=""
          className="absolute opacity-25 lazyload"
          id="shape-2d"
          src={shape2D}
        />
        <img
          alt=""
          className="absolute opacity-25 lazyload"
          id="shape-3d"
          src={shape3D}
        />
        <img
          alt=""
          className="absolute opacity-25 lazyload"
          id="shape-4d"
          src={shape4D}
        />
      </div>

      <div className="pt-2 pb-3 sm:py-4 2xl:py-6 text-xs bigm:text-sm sm:text-base 2xl:text-lg sticky top-0 z-50 bg-white -mb-4 bigm:-mb-5 sm:-mb-8">
        <div className="px-3 md:px-8 lg:px-12 2xl:px-20 max-w-6xl 2xl:max-w-75vw mx-auto w-full">
          <h3 className="uppercase font-bold mb-2">Snel naar</h3>
          <div className="flex flex-wrap justify-start -m-2 2xl:-m-3">
            {events.map((event, i) => {
              const shortName = event.short;

              return (
                <button
                  className={`m-2 2xl:m-3 leading-none uppercase border-b-2 border-${event.color}`}
                  key={i}
                  onClick={() =>
                    document.getElementById(shortName).scrollIntoView({
                      behavior: `smooth`,
                      block: `nearest`
                    })
                  }
                >
                  {event.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-6xl 2xl:max-w-75vw mx-auto w-full px-3 md:px-8 lg:px-12 2xl:px-20">
        {events.map((event, i) => {
          const shortName = event.short;

          return (
            <section
              className={`my-8 bigm:my-10 sm:my-16 xl:my-20 ${
                i % 2 !== 0 ? `text-right` : ``
              }`}
              id={shortName}
              key={i}
            >
              <h2
                className={`text-${event.color} uppercase font-bold leading-none tracking-wide text-3xl bigm:text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl`}
              >
                {event.title}
              </h2>

              <div className="download-all mt-2 mb-4">
                <span className="block text-gray-700 text-xs xl:text-sm">
                  Download het originele
                  {` `}
                  <span className="lowercase">{event.title}</span> materiaal
                </span>

                <div className="-mx-1">
                  {event.downloads.map((download, i) => (
                    <OutboundLink
                      className={`bg-transparent sm:hover:bg-${event.color} text-gray-900 sm:hover:text-white font-semibold sm:py-1/2 xl:py-1 sm:px-2 xl:px-3 2xl:px-4 mx-2 sm:mx-1 sm:border-2 sm:border-${event.color} hover:border-transparent inline-flex items-center`}
                      href={download.url}
                      key={i}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="fill-current w-3 xl:w-4 h-3 xl:h-4 mr-1 sm:mr-2"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <span className="text-sm xl:text-base">
                        {download.title}
                        {` `}
                        <span className="text-xs xl:text-sm">
                          ({download.size})
                        </span>
                      </span>
                    </OutboundLink>
                  ))}
                </div>
              </div>

              <div className="gallerys">
                <ul
                  className={`flex flex-wrap -mx-2px ${
                    i % 2 !== 0 ? `justify-end` : ``
                  }`}
                >
                  {event.videos.map((video, i) => (
                    <VideoItem key={i} video={video} />
                  ))}

                  {data[shortName].edges.map(gallery => {
                    let featuredImgFluid =
                      gallery.node.frontmatter.featuredImage.childImageSharp
                        .fluid;

                    return (
                      <li
                        className="gallery-item flex-none w-1/2 bigm:w-1/3 lg:w-1/4 p-2px aspect-ratio-box"
                        key={gallery.node.id}
                      >
                        <Link to={gallery.node.frontmatter.path}>
                          <div
                            className={`shadow hover:shadow-md relative flex justify-between overflow-hidden items-end bg-transparent text-white p-1 lg:p-2 h-full text-left uppercase font-bold tracking-wider leading-none`}
                          >
                            <span
                              className="gallery-item-title text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl"
                              dangerouslySetInnerHTML={{
                                __html: gallery.node.frontmatter.title
                              }}
                              style={{
                                wordBreak: `break-word`,
                                textShadow: `0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)`
                              }}
                            ></span>
                            <span>
                              <svg
                                className="fill-current w-3 2xl:w-4 h-3 2xl:h-4 mb-2px"
                                viewBox="0 0 12.5 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11.2,11.2l1.2-1.2L2.5,0L0,2.5L7.5,10L0,17.5L2.5,20L11.2,11.2z" />
                              </svg>
                            </span>
                            <Img
                              className={`featured-image -z-10 inset-0 object-cover object-center`}
                              fluid={featuredImgFluid}
                              style={{ position: `absolute` }}
                            />
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          );
        })}
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
