import React from "react";

import { Link } from "gatsby";
import ReactPlayer from "react-player";

import { OutboundLink } from "gatsby-plugin-google-analytics";
import SEO from "../components/seo";
import Layout from "../components/layout";

import shape1D from "../assets/shapes/1d.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`vierde dimensie`, `lustrum`, `virgiel`, `delft`]}
        title="Home"
      />

      <div className="absolute -z-10 inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute opacity-40 lazyload"
          data-src={shape1D}
          id="shape-1d"
        />
      </div>

      <section className="pb-16 xl:pb-24 xl:pb-32">
        <div className="mx-auto sm:mt-12 bigm:px-1 sm:px-6">
          <div className="xl:grid xl:grid-cols-12 xl:gap-8 2xl:gap-12 xl:items-center">
            <div className="sm:text-center w-full md:max-w-2xl md:mx-auto xl:col-span-5 xl:text-left">
              <p className="uppercase text-sm sm:text-base leading-none text-cool-gray-500 2xl:text-cool-gray-400 font-semibold mb-0.5 sm:mb-1">
                Katholieke Studentenvereniging Sanctus Virgilius
              </p>
              <h1 className="text-3xl sm:text-5xl 2xl:text-6xl uppercase font-bold leading-none">
                Herbeleef het lustrum
              </h1>
              <div className="mt-2 sm:mt-4 text-gray-900 text-sm sm:text-base 2xl:text-lg">
                <p>
                  Welkom terug in{" "}
                  <span className="font-semibold">De Vierde Dimensie</span>. Hét
                  thema gekoppeld aan het 24<sup>e</sup> lustrum ter ere van het
                  120-jarig bestaan van onze Delftse studentenvereniging{` `}
                  <OutboundLink
                    className="underline inline-flex items-center"
                    href="https://www.virgiel.nl/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Virgiel
                    <svg
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </OutboundLink>
                </p>
                <p className="mt-2">
                  Of je nou persoonlijk het lustrum hebt meegemaakt, jouw eerste
                  lustrum eraan zit te komen of je misschien wel een
                  buitenstaander bent, via deze site bieden we je een kijkje in{" "}
                  <span className="italic">ons</span> lustrumjaar 2017-2018.
                </p>
                <p className="mt-2">
                  Welkom in...{" "}
                  <span className="font-semibold uppercase">
                    De Vierde Dimensie
                  </span>
                  .
                </p>
              </div>
              <div className="mt-4 bigm:mt-6 sm:flex sm:items-center sm:justify-center xl:justify-start">
                <div>
                  <Link
                    className="transition duration-150 ease-in-out rounded-sm shadow bg-black border-3 border-transparent inline-flex items-center py-1 bigm:py-1.5 sm:py-2 px-2.5 bigm:px-3 sm:px-4 text-white text-sm sm:text-base font-semibold hover:bg-white hover:text-black hover:border-black hover:shadow-md"
                    to="/media"
                  >
                    <span className="">Bekijk media</span>
                    <svg
                      className="flex-shrink-0 fill-current w-5 h-5 ml-1 sm:ml-2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z" />
                    </svg>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    className="transition duration-150 ease-in-out rounded-sm shadow border-3 border-black inline-flex items-center py-1 bigm:py-1.5 sm:py-2 px-2.5 bigm:px-3 sm:px-4 text-sm sm:text-base font-semibold hover:bg-white hover:border-transparent hover:shadow-md"
                    to="/memories"
                  >
                    <span className="">Lees verhalen</span>
                    <svg
                      className="flex-shrink-0 fill-current w-5 h-5 ml-1 sm:ml-2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 relative sm:mx-auto xl:mt-0 xl:mx-0 xl:col-span-7 xl:flex xl:flex-col xl:items-end">
              <div className="xl:absolute xl:top-0 xl:left-0 xl:transform xl:-translate-y-full xl:translate-x-12 2xl:translate-x-32">
                <p className="font-serif text-center text-xs bigm:text-sm 2xl:text-base xl:text-left text-gray-700 xl:max-w-md italic block pb-2 2xl:pb-4 max-w-screen-sm mx-auto">
                  <span className="inline-flex">
                    Bekijk de aftermovie van het complete lustrumjaar
                  </span>{" "}
                  {` `}
                  <span className="inline-flex">
                    (tip: unmute de video voor geluid)
                  </span>
                </p>
              </div>
              <div
                className="relative w-full rounded-lg shadow-lg"
                style={{ paddingBottom: "42.51893939%" }}
              >
                <ReactPlayer
                  controls
                  muted
                  playing
                  className="absolute inset-0"
                  config={{
                    youtube: {
                      playerVars: { modesbranding: 1, rel: 0, start: 7 },
                    },
                  }}
                  height="100%"
                  url="https://www.youtube.com/watch?v=24C1H4FiZbU"
                  volume={1}
                  width="100%"
                />
              </div>
              <div className="xl:absolute xl:transform xl:bottom-0 xl:right-0 xl:translate-y-full text-right">
                <OutboundLink
                  className="inline-flex items-center group pt-3 text-xs sm:text-sm 2xl:text-base text-gray-500 hover:underline"
                  href="https://drive.google.com/uc?export=download&id=1u_qM4jM4AraBBhxZ9t0Zjw3bz3qtNKKh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-3 2xl:w-4 h-3 2xl:h-4 transform group-hover:scale-125 transition duration-200 ease-in-out mr-1 sm:mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>
                    <span className="hidden sm:inline">{`Download de originele video `}</span>
                    <span className="text-xs">(12,75&nbsp;GB)</span>
                  </span>
                </OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
