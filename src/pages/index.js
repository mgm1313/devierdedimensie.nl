import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import ReactPlayer from "react-player";

import { OutboundLink } from "gatsby-plugin-google-analytics";

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
                      className="fill-current w-4 h-4 ml-1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
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
                  <span className="font-semibold uppercase">De Vierde Dimensie</span>.
                </p>
              </div>
              <div className="mt-4 bigm:mt-6 sm:flex sm:items-center sm:justify-center xl:justify-start">
                <div>
                  <Link
                    className="transition duration-150 ease-in-out rounded-sm shadow bg-black border-3 border-transparent inline-flex items-center py-1 bigm:py-1.5 sm:py-2 px-2.5 bigm:px-3 sm:px-5 text-white text-sm sm:text-base font-semibold hover:bg-white hover:text-black hover:border-black hover:shadow-md"
                    to="/media"
                  >
                    <span className="">{`Bekijk media`}</span>
                    <svg
                      className="fill-current w-3 xl:w-4 h-3 xl:h-4 ml-1 sm:ml-2"
                      viewBox="0 0 12.4 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.2,11.2,12.4,10,2.5,0,0,2.5,7.5,10,0,17.5,2.5,20Z" />
                    </svg>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link className="transition duration-150 ease-in-out rounded-sm shadow border-3 border-black inline-flex items-center py-1 bigm:py-1.5 sm:py-2 px-2.5 bigm:px-3 sm:px-5 text-sm sm:text-base font-semibold hover:bg-white hover:border-transparent hover:shadow-md" to="/media">
                    <span className="">{`Lees verhalen`}</span>
                    <svg
                      className="fill-current w-3 xl:w-4 h-3 xl:h-4 ml-1 sm:ml-2"
                      viewBox="0 0 12.4 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.2,11.2,12.4,10,2.5,0,0,2.5,7.5,10,0,17.5,2.5,20Z" />
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
              <div className="relative aspect-ratio-box aspect-ratio-21_9 w-full rounded-lg shadow-lg">
                <ReactPlayer
                  controls
                  muted
                  playing
                  className="absolute inset-0"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=24C1H4FiZbU`}
                  volume={1}
                  width="100%"
                  youtubeConfig={{
                    playerVars: { modesbranding: 1, rel: 0, start: 7 },
                  }}
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
                    className="fill-current w-3 2xl:w-4 h-3 2xl:h-4 transform group-hover:scale-125 transition duration-200 ease-in-out mr-1 sm:mr-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
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
