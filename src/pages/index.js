import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import YouTubePlayer from "react-player/lib/players/YouTube";

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
          className="absolute opacity-50 lazyload"
          data-src={shape1D}
          id="shape-1d"
        />
      </div>

      <main className="flex flex-wrap mb-3 bigm:mb-8 lg:mb-12 mt-2 bigm:mt-4 w-full">
        <section className="w-full mb-4 px-3 md:px-8 lg:px-12 2xl:px-20">
          <div className="relative aspect-ratio-box aspect-ratio-21_9 w-full border-4 border-black">
            <YouTubePlayer
              className="absolute inset-0"
              controls={true}
              height="100%"
              url={`https://www.youtube.com/watch?v=24C1H4FiZbU`}
              width="100%"
            />
          </div>
        </section>

        <section className="flex flex-wrap justify-between max-w-6xl 2xl:max-w-75vw mx-auto w-full px-3 md:px-8 lg:px-12 2xl:px-20">
          <div className="flex w-full justify-between mb-16 leading-tight">
            <div className="mr-3">
              <span className="mb-1 sm:mb-0 block text-gray-700 text-xs xl:text-sm">
                Download de originele video
              </span>
              <OutboundLink
                className="bg-transparent sm:hover:bg-black text-gray-900 sm:hover:text-white font-semibold sm:py-1/2 xl:py-1 sm:px-2 xl:px-3 2xl:px-4 sm:border-2 sm:border-black hover:border-transparent inline-flex items-center"
                href="https://drive.google.com/uc?export=download&id=1u_qM4jM4AraBBhxZ9t0Zjw3bz3qtNKKh"
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
                  {`Lustrum Aftermovie `}
                  <span className="text-xs xl:text-sm">(12,75&nbsp;GB)</span>
                </span>
              </OutboundLink>
            </div>

            <div className="justify-end text-right ml-3">
              <span className="mb-1 sm:mb-0 block text-gray-700 text-xs xl:text-sm">
                Bekijk alle media van het 24<sup>e</sup> lustrum
              </span>
              <Link
                className="bg-transparent sm:hover:bg-black text-gray-900 sm:hover:text-white font-semibold sm:py-1/2 xl:py-1 sm:px-2 xl:px-3 2xl:px-4 sm:border-2 sm:border-black hover:border-transparent inline-flex items-center"
                to="/media"
              >
                <span className="text-sm xl:text-base">{`Alle media`}</span>
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
          <div className="w-full sm:w-2/3 sm:pr-8 mb-8">
            <h2 className="text-3xl sm:text-4xl uppercase font-bold leading-none mb-2 tracking-wide">
              De tijd vloog voorbij!
            </h2>
            <div className="text-justify text-sm text-columns max-w-4xl">
              <p className="mb-4">
                De 4<sup>e</sup> Dimensie, de tijd, de periode. Momenten flitsen
                voorbij zonder dat je er erg in hebt. Zo ook het 24<sup>e</sup>
                {` `}
                lustrumjaar der KSV Sanctus Virgilius.
              </p>
              <p className="mb-4">
                Van het{` `}
                <Link className="underline" to="/media#openingsfeest">
                  Openingsfeest
                </Link>
                {` `}
                in september 2017, tot aan de{` `}
                <Link className="underline" to="/media#piekweek">
                  Piekweek
                </Link>
                {` `}
                in juli 2018, heeft studentenvereniging Virgiel zowel in, als
                ver buiten Delft, haar 120-jarig bestaan gevierd.
              </p>
              <p className="mb-4">
                Om al deze herinneringen te vereeuwigen zijn er een hoop foto&quot;s,
                video&quot;s en teksten gemaakt en geschreven. Vereeuwigd in zowel
                een analoog lustrumboek, als digitaal op deze website.
              </p>
              <p className="mb-4">
                Zo kan je af en toe nog eens de tijd terugdraaien, terug naar
                dit bijzondere jaar, terug naar de 4<sup>e</sup> dimensie.{` `}
                <br /> Het is Lustrumtijd.
              </p>
              <p className="text-left leading-tight">
                <span className="text-xs italic">
                  ~ Lustrum Media Commissie, Delft 2019
                </span>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/3 sm:text-right mb-8">
            <h2 className="mb-2 uppercase font-bold text-2xl leading-none tracking-wide">
              Luister naar de 4<sup className="lowercase">e</sup> dimensie!
            </h2>
            <iframe
              allow="encrypted-media"
              allowTransparency="true"
              className="spotify-embed sm:ml-auto mr-0 lazyload"
              data-src="https://open.spotify.com/embed/album/6WA6NormYDlTndkWpR0ZHD"
              frameBorder="0"
              height="400"
              title="spotifyEmbed"
              width="100%"
            ></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default IndexPage;
