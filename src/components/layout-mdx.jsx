import PropTypes from "prop-types";
import React from "react";

import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Image from "gatsby-image";

import Header from "./header";
import Footer from "./footer";
import { getEventByID } from "./utils";

const MyH2 = ({ children }) => (
  <h2 className="w-full mb-2 mt-6 sm:my-4 px-4 md:px-8 max-w-md mx-auto font-bold uppercase leading-none text-3xl md:text-4xl">
    {children}
  </h2>
);

const MyBlockquote = ({ align, children }) => (
  <blockquote className="max-w-md w-full mx-auto px-4 md:px-0 my-6">
    <p
      className={`max-w-sm font-bold uppercase leading-tight text-lg ${
        align === "left" ? `text-left mr-auto` : `text-right ml-auto`
      } `}
    >
      {children}
    </p>
  </blockquote>
);

const MyParagraph = ({ children }) => (
  <p className="my-2 px-4 md:px-8 w-full font-light max-w-md mx-auto">
    {children}
  </p>
);

const Introduction = ({ color, title, children }) => (
  <div
    className={`bg-${color} mb-6 md:mb-8 lg:mb-12 min-h-screen flex flex-col`}
  >
    <div className="flex-none">
      <Header theme="dark" />
    </div>
    <div className="pt-6 pb-12 px-4 md:px-8 max-w-screen-sm mx-auto flex flex-col justify-center flex-1">
      <h1 className="uppercase font-extrabold text-white text-left sm:text-center mb-4 text-4xl sm:text-5xl lg:text-6xl leading-none tracking-wide">
        {title}
      </h1>
      <p className="text-white font-light col-2 max-w-xs sm:max-w-none text-justify">
        {children}
      </p>
    </div>
    <div className="hidden sm:block text-center text-white mb-8 flex-none overflow-hidden">
      <div className="flex flex-col items-center justify-end slideInDown">
        <span className="font-thin mb-2 block">Scroll</span>
        <div className="h-16 w-0.5 bg-white block" />
      </div>
    </div>
  </div>
);

const Committee = ({ commiteeName, members, image }) => (
  <div className="flex flex-col md:flex-row justify-between items-end mx-auto max-w-screen-xl w-full px-4 md:px-8 my-6 md:my-8 lg:my-12">
    <div className="w-full max-w-sm mx-auto md:pr-4">
      <h2 className="mb-2 text-center uppercase font-extrabold text-3xl md:text-5xl leading-none tracking-wider">
        {commiteeName}
      </h2>
      <table className="mx-auto table-fixed">
        <tbody>
          {members.map((member) => (
            <tr key={member.name} className="align-baseline leading-tight">
              {member.function && (
                <td className="w-1/2 uppercase text-xs text-right font-light py-0.5 pr-2">
                  {member.function}
                </td>
              )}
              <td
                className={`${
                  member.function && `w-1/2`
                } uppercase font-bold py-0.5`}
              >
                {member.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="w-full flex-auto min-w-xl mt-4 md:mt-0">
      <a href={image.publicURL} rel="noopener noreferrer" target="_blank">
        <Image fluid={image.childImageSharp.fluid} />
      </a>
    </div>
  </div>
);

const MediaHighlighter = ({ event }) => {
  const eventData = getEventByID(event);

  return (
    <div className="bg-gray-100 rounded-sm my-6 md:my-8 lg:my-12 px-4 md:px-8 max-w-screen-md w-full mx-auto text-center">
      <div className="py-8">
        <Link className="group block" to={`/media/#${eventData.eventID}`}>
          <h3
            className={`uppercase font-bold leading-tight text-lg text-${eventData.color} mb-2`}
          >
            Op zoek naar meer {eventData.title} foto&rsquo;s en video&rsquo;s?
          </h3>
          <span
            className={`text-gray-800 leading-snug group-hover:text-${eventData.color} underline`}
          >
            Bekijk dan de{" "}
            <span className="lowercase">{`'${eventData.title}'`}</span> media
            pagina...
          </span>
          <span aria-label="eyes" className="ml-1" role="img">
            👀
          </span>
        </Link>
      </div>
    </div>
  );
};

function pathToGithub(fileAbsolutePath) {
  const gitHub = "https://github.com/TECHMAUS/devierdedimensie.nl/blob/master/";

  const absolutePath = fileAbsolutePath.split("/");
  let relativePath = [];

  for (let i = absolutePath.length; i > 0; i -= 1) {
    relativePath.push(absolutePath[i]);
    if (absolutePath[i] === "src") break;
  }

  relativePath.reverse();
  relativePath = relativePath.join("/");

  return gitHub + relativePath;
}

const Feedback = ({ filePath }) => (
  <div className="bg-gray-50 rounded-sm my-6 md:my-8 lg:my-12 px-4 md:px-8 max-w-screen-sm w-full mx-auto text-center">
    <div className="py-6">
      <h3 className="uppercase font-bold mb-2 leading-tight text-gray-900">
        <span aria-label="eyes" className="mr-1" role="img">
          💪🏼
        </span>{" "}
        Help mee deze pagina te verbeteren!
      </h3>
      <div className="text-gray-500 leading-snug">
        <p className="my-2">Een fout ontdekt? Of mis je verhalen?</p>
        <Link
          className="underline block sm:inline-block hover:text-black"
          to="/colofon"
        >
          Stuur ons feedback...
        </Link>
        <span className="mx-2 hidden sm:inline-block">||</span>
        <a
          className="mt-1 sm:mt-0 underline block sm:inline-block hover:text-black"
          href={pathToGithub(filePath)}
          rel="noopener noreferrer"
          target="_blank"
        >
          Bewerk deze pagina op GitHub...
        </a>
      </div>
    </div>
  </div>
);

const components = {
  h2: MyH2,
  p: MyParagraph,
  Blockquote: MyBlockquote,
  Introduction,
  Committee,
  MediaHighlighter,
  Feedback,
};

function Layout({ children }) {
  return (
    <MDXProvider components={components}>
      <div className="mdx-content relative p-2 bigm:p-3 sm:p-8 flex items-stretch font-din min-h-screen text-gray-900">
        <div className="border-4 bigm:border-6 sm:border-8 flex flex-col w-full border-black">
          <div className="flex flex-col flex-1 md:justify-center mx-auto w-full pb-2 sm:pb-4 md:pb-8">
            {children}
          </div>

          <Footer />
        </div>
      </div>
    </MDXProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
