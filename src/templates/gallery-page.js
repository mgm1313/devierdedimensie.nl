import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import Lightbox from "react-image-lightbox";
import textImg from "../assets/xxiv-memories-text.svg";
import parse from "html-react-parser";

import Caption from "../components/galleryPage/caption";

import ScrollLock from "react-scrolllock";
import { OutboundLink } from "gatsby-plugin-google-analytics";

function GalleryPage({ data, pageContext }) {
  const [lockScroll, setlockScroll] = useState(false);
  const [showCaption, setshowCaption] = useState(false);

  const { frontmatter } = data.markdownRemark;
  const { next, prev } = pageContext;
  const qImages = data.allImages.edges;
  const pageTitel = parse(frontmatter.title);

  const [lightboxController, setLightboxController] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const sources = [],
    thumbnails = [],
    downloadUrl = [],
    imgTitel = [],
    id = [];

  qImages.forEach(({ node }) => {
    sources.push(node.big);
    thumbnails.push(node.thumbnail);
    downloadUrl.push(node.original);
    imgTitel.push(node.name);
    id.push(node.id);
  });

  const nbrImages = sources.length;
  const lbCurrent = lightboxController.photoIndex;
  const lbPrev = (lbCurrent + nbrImages - 1) % nbrImages;
  const lbNext = (lbCurrent + 1) % nbrImages;

  const downloadBtn = (
    <OutboundLink download href={downloadUrl[lbCurrent]}>
      <button
        aria-label="Download original"
        className="ril__downloadButton ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton"
        type="button"
      ></button>
    </OutboundLink>
  );

  const flagMail = `lustrum-media@googlegroups.com`;
  const flagSubject = `[devierdedimensie.nl] Rapporteer foto`;
  const flagBody = `
---
ID: ${id[lbCurrent]}
Titel: ${imgTitel[lbCurrent]}
---

Motivatie: [Waarom moeten we deze foto verwijderen?]
  `.trim();

  const flagBtn = (
    <OutboundLink
      href={encodeURI(
        `mailto:${flagMail}?subject=${flagSubject}&body=${flagBody}`
      )}
    >
      <button
        aria-label="Report photo"
        className="ril__flagButton ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton"
        type="button"
      ></button>
    </OutboundLink>
  );

  const infoBtn = (
    <button
      aria-label="Show info"
      className="ril__infoButton ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton"
      type="button"
      onClick={() => setshowCaption(!showCaption)}
    ></button>
  );

  const captions = Array.from(
    qImages.map(({ node }) => (
      <Caption key={node.id} node={node} showCaption={showCaption} />
    ))
  );

  function openLightboxOnSlide(number) {
    setLightboxController({
      photoIndex: number,
      isOpen: !lightboxController.isOpen,
    });
  }

  return (
    <Layout>
      <SEO title={pageTitel} />

      <main className="relative mb-3 bigm:mb-8 lg:mb-12 w-full px-3 md:px-8 lg:px-12 2xl:px-20">
        <nav
          aria-label="Breadcrumb"
          className="safe-m-t sticky top-0 z-20 font-light text-xs bigm:text-sm 2xl:text-base uppercase"
        >
          <ol className="list-none py-3 2xl:py-4 pr-3 2xl:pr-4 inline-flex leading-tight bg-white">
            <li className="flex items-center">
              <svg
                className="text-gray-700 fill-current w-3 h-3 mr-1"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
              </svg>
              <Link to="/media">Terug naar overzicht</Link>
            </li>
          </ol>
        </nav>

        <h1 className="gallery-titel text-3xl bigm:text-4xl sm:text-5xl md:text-6xl max-w-75vw uppercase font-bold leading-none tracking-wide">
          {pageTitel}
        </h1>
        <section className="flex flex-1 items-stretch flex-wrap -m-2px relative">
          <div className="right-0 absolute flex flex-1 justify-end mr-2px xxiv-count-label -z-10">
            {[...data.allImages.totalCount.toString()].map((integer, i) => (
              <img
                key={i}
                alt={integer}
                className={`h-12 bigm:h-16 md:h-24 -z-10 lazyload sm:opacity-100
                  ${frontmatter.theme === `normal` ? `opacity-75` : ``}`}
                data-src={`/xxiv-numbers/xxiv-${integer}-${frontmatter.theme}.svg`}
              />
            ))}
            <img
              alt="Number of images"
              className={`h-12 bigm:h-16 md:h-24 ml-2 md:ml-4 -z-10 lazyload`}
              data-src={textImg}
            />
          </div>

          {lightboxController.isOpen && (
            <Lightbox
              animationDisabled={true}
              imageCaption={captions[lbCurrent]}
              imageTitle={`${lbCurrent + 1} / ${nbrImages}`}
              mainSrc={sources[lbCurrent]}
              mainSrcThumbnail={thumbnails[lbCurrent]}
              nextSrc={sources[lbNext]}
              nextSrcThumbnail={thumbnails[lbNext]}
              prevSrc={sources[lbPrev]}
              prevSrcThumbnail={thumbnails[lbPrev]}
              toolbarButtons={[flagBtn, downloadBtn, infoBtn]}
              onAfterOpen={() => setlockScroll(true)}
              onCloseRequest={() => {
                setLightboxController({ isOpen: false });
                setlockScroll(false);
                document.getElementById(id[lbCurrent]).scrollIntoView({
                  behavior: `smooth`,
                  block: `nearest`,
                });
              }}
              onMoveNextRequest={() =>
                setLightboxController({
                  photoIndex: lbNext,
                  isOpen: lightboxController.isOpen,
                })
              }
              onMovePrevRequest={() =>
                setLightboxController({
                  photoIndex: lbPrev,
                  isOpen: lightboxController.isOpen,
                })
              }
            />
          )}

          <ScrollLock isActive={lockScroll} />

          {qImages.map(({ node }, index) => (
            <div
              key={node.id}
              className={`cursor-pointer w-1/2 bigm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2px aspect-ratio-box`}
              id={node.id}
              onClick={() => openLightboxOnSlide(index)}
            >
              <div className="relative w-full h-full">
                <img
                  alt={node.name}
                  className={`absolute w-full h-full object-cover object-center g-image-thumb lazyload`}
                  data-aspectratio="0.67"
                  data-parent-fit="cover"
                  data-sizes={`auto`}
                  data-srcset={`
                  ${node.thumbnail} 200w,
                  ${node.small} 400w,
                  ${node.medium} 800w,
                  ${node.large} 1200w,
                  `}
                  src={`data:image/jpeg;base64, ` + node.placeholder}
                />
              </div>
            </div>
          ))}
        </section>
        <nav
          aria-label="Breadcrumb"
          className="sticky bottom-0 z-20 font-light uppercase text-xs bigm:text-sm 2xl:text-base"
        >
          <ol className="list-none p-0 flex justify-between leading-tight">
            <li
              className={`safe-m-b flex items-center pr-3 2xl:pr-4 py-3 2xl:py-4 ${
                prev && `bg-white`
              }`}
            >
              {prev && (
                <>
                  <svg
                    className="text-gray-700 fill-current w-3 h-3 mr-1"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                  </svg>
                  <Link to={prev.frontmatter.path}>
                    {parse(prev.frontmatter.title)}
                  </Link>
                </>
              )}
            </li>
            <li
              className={`safe-m-b flex items-center text-right pl-3 2xl:pl-4 py-3 2xl:py-4 ${
                next && `bg-white`
              }`}
            >
              {next && (
                <>
                  <Link to={next.frontmatter.path}>
                    {parse(next.frontmatter.title)}
                  </Link>
                  <svg
                    className="text-gray-700 fill-current w-3 h-3 ml-1"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </>
              )}
            </li>
          </ol>
        </nav>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query($category: String!, $path: String!) {
    allImages(
      sort: { fields: [metadata___timestamp____seconds, name], order: ASC }
      filter: { category: { eq: $category } }
    ) {
      totalCount
      edges {
        node {
          id
          name
          category
          metadata {
            format
            height
            width
            size
            timestamp {
              _nanoseconds
              _seconds
            }
          }
          labels {
            description
            score
          }
          placeholder
          thumbnail
          small
          medium
          large
          big
          original
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        theme
        path
        title
      }
    }
  }
`;
export default GalleryPage;
