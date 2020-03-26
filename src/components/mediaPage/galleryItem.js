import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

class GalleryItem extends Component {
  render() {
    const gallery = this.props.gallery;
    const featuredImgFluid =
      gallery.node.frontmatter.featuredImage.childImageSharp.fluid;

    return (
      <li className="gallery-item flex-none w-1/2 bigm:w-1/3 lg:w-1/4 p-2px aspect-ratio-box">
        <Link to={gallery.node.frontmatter.path}>
          <div
            className={`shadow hover:shadow-md relative flex justify-between overflow-hidden items-end bg-transparent text-white p-1 lg:p-2 h-full text-left uppercase font-bold tracking-wider leading-none`}
          >
            <span
              className="gallery-item-title text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl"
              dangerouslySetInnerHTML={{
                __html: gallery.node.frontmatter.title,
              }}
              style={{
                wordBreak: `break-word`,
                textShadow: `0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)`,
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
  }
}

export default GalleryItem;
