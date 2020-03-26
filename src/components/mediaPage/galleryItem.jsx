import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function GalleryItem({ gallery, theme, countItems }) {
  const { frontmatter } = gallery;
  const { title } = frontmatter;
  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <li className="group col-span-12 bigm:col-span-6 lg:col-span-4 xl:col-span-3 text-left relative overflow-hidden">
      <Link to={frontmatter.slug}>
        <div className="w-full relative rounded-sm shadow pb-7/12">
          <div className="absolute inset-0">
            <Img
              className="absolute inset-0 h-full w-full transform transition duration-300 ease-in-out group-hover:scale-105"
              fluid={featuredImgFluid}
            />
          </div>
          <div
            className={`bg-${theme} absolute overflow-hidden opacity-20 inset-0`}
            style={{ mixBlendMode: "color" }}
          />
        </div>
        <div className="absolute left-0 bottom-0 ml-0.5 mb-1 sm:ml-1.5 sm:mb-1.5">
          <div className="inline-block tracking-tighter sm:tracking-normal text-xs text-gray-900 px-1 sm:px-1.5 xl:px-2 bg-white">
            <time>{frontmatter.date ? frontmatter.date : `Verzamelalbum`}</time>
            <span className="mx-0.5 sm:mx-1">&middot;</span>
            <span className="font-semibold mr-0.5 sm:mr-1">{countItems}</span>
            <span>foto&rsquo;s</span>
          </div>
          <div className="block">
            <div
              className={`text-sm sm:text-xl uppercase font-semibold px-1 sm:px-1.5 xl:px-2 py-0.5 inline bg-${theme} text-white shadow-md`}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: title,
              }}
              style={{ boxDecorationBreak: "clone", wordBreak: "break-word" }}
            />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default GalleryItem;
