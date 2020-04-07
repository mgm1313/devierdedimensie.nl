import React, { useState } from "react";

import { graphql, Link } from "gatsby";
import Lightbox from "react-image-lightbox";
import parse from "html-react-parser";
import scrollTo from "gatsby-plugin-smoothscroll";
import ScrollLock from "react-scrolllock";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";
import SEO from "../components/seo";
import textImg from "../assets/xxiv-memories-text.svg";

import { getEventByID, ChevronForButton } from "../components/utils";

import Caption from "../components/galleryPage/caption";
import ScrollProgress from "../components/galleryPage/scrollProgress";
import BottomNav from "../components/galleryPage/bottomNav";

function GalleryPage({ data, pageContext }) {
  const [lockScroll, setlockScroll] = useState(false);
  const [showCaption, setshowCaption] = useState(false);

  const { frontmatter } = data.markdownRemark;
  const { next, prev } = pageContext;
  const qImages = data.allImages.edges;
  const pageTitel = parse(frontmatter.title);

  const event = getEventByID(frontmatter.eventID);

  const [lightboxController, setLightboxController] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const sources = [];
  const thumbnails = [];
  const downloadUrl = [];
  const imgTitel = [];
  const id = [];

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
      />
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
      />
    </OutboundLink>
  );

  const infoBtn = (
    <button
      aria-label="Show info"
      className="ril__infoButton ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton"
      type="button"
      onClick={() => setshowCaption(!showCaption)}
    />
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

      <div className="relative pb-16 xl:pb-24 xl:pb-32 mx-auto sm:mt-12 bigm:px-1 sm:px-6 w-full">
        <ScrollProgress color={event.color} />

        <nav
          aria-label="Breadcrumb"
          className="sticky mb-4 top-0 z-20 font-light text-xs bigm:text-sm 2xl:text-base uppercase"
        >
          <ol className="pt-3 list-none px-1 inline-flex leading-tight">
            <li className="safe-m-t flex items-center">
              <div className="flex items-center px-2 py-1.5 bg-gray-50 rounded-sm shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl transition duration-100">
                <ChevronForButton direction="back" />
                <Link to="/media">Terug naar overzicht</Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex justify-between items-end">
          <h1
            className="gallery-titel text-3xl bigm:text-4xl sm:text-5xl md:text-6xl max-w-75vw uppercase font-bold leading-none tracking-wide"
            style={{ overflowWrap: "break-word" }}
          >
            {pageTitel}
          </h1>
          <div className="flex flex-0 items-stretch justify-end">
            {[...data.allImages.totalCount.toString()].map((integer, index) => (
              <img
                key={index} // eslint-disable-line react/no-array-index-key
                alt={integer}
                className="h-12 bigm:h-16 md:h-24 -z-10 lazyload sm:opacity-100"
                data-src={`/xxiv-numbers/xxiv-${integer}-${event.color}.svg`}
              />
            ))}
            <img
              alt="Number of images"
              className="h-12 bigm:h-16 md:h-24 ml-2 md:ml-4 -z-10 lazyload"
              data-src={textImg}
            />
          </div>
        </div>

        {lightboxController.isOpen && (
          <Lightbox
            animationDisabled
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
              scrollTo(`#${id[lbCurrent]}`);
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

        <section className="grid grid-cols-12 gap-1 2xl:gap-1.5 my-2">
          {qImages.map(({ node }, index) => (
            <button
              key={node.id}
              className="cursor-pointer shadow col-span-6 bigm:col-span-4 lg:col-span-3 2xl:col-span-2 relative pb-2/3"
              id={node.id}
              type="button"
              onClick={() => openLightboxOnSlide(index)}
            >
              <img
                alt={node.name}
                className="absolute w-full h-full object-cover object-center g-image-thumb lazyload"
                data-aspectratio="0.67"
                data-parent-fit="cover"
                data-sizes="auto"
                data-srcset={`
                  ${node.thumbnail} 200w,
                  ${node.small} 400w,
                  ${node.medium} 800w,
                  ${node.large} 1200w,
                  `}
                src={`data:image/jpeg;base64, ${node.placeholder}`}
              />
            </button>
          ))}
        </section>

        <BottomNav next={next} prev={prev} />
      </div>
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
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        slug
        title
        eventID
      }
    }
  }
`;
export default GalleryPage;
