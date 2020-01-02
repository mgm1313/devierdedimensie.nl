import React from "react";

import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { OutboundLink } from "gatsby-plugin-google-analytics";
import shape from "../assets/shapes/xxiv-shape-colofon.svg";

function ColofonPage({ data }) {
  return (
    <Layout>
      <SEO title="Colofon" />

      <main className="max-w-4xl 2xl:max-w-50vw mx-auto w-full px-3 md:px-8 lg:px-12 2xl:px-20 my-10">
        <img
          alt=""
          className="absolute -z-10 lazyload"
          id="shape-colofon"
          src={shape}
        />

        <h1 className="text-3xl sm:text-4xl uppercase font-bold leading-none mb-2 tracking-wide">
          Colofon
        </h1>
        <section>
          <p className="text-lg">
            Voor vragen of reacties: {` `}
            <OutboundLink
              className="underline"
              href="mailto:lustrum-media@googlegroups.com"
            >
              lustrum-media@googlegroups.com
            </OutboundLink>
          </p>
        </section>

        <section className="mt-8" id="Google-Vision">
          <h3 className="font-bold uppercase text-lg">Google Vision</h3>
          De 'tags' die zichtbaar zijn onder de foto's in de gallerijen, zijn
          automatisch gegenereerd met behulp van de{` `}
          <OutboundLink
            className="underline"
            href="https://cloud.google.com/vision/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Vision AI
          </OutboundLink>
          . Meer over dit proces kan je vinden op de genoemde pagina.{` `}
          <br />
          Google bewaart of verkoopt deze data niet, meer hierover{` `}
          <OutboundLink
            className="underline"
            href="https://cloud.google.com/vision/docs/data-usage"
            rel="noopener noreferrer"
            target="_blank"
          >
            op deze pagina
          </OutboundLink>
          .
        </section>

        <section className="mt-8">
          <h3 className="font-bold uppercase text-lg">Techniek</h3>
          Deze website is gemaakt met behulp van{` `}
          <OutboundLink
            className="underline"
            href="https://www.gatsbyjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gatsby
          </OutboundLink>
          . Hosting vind plaats via{` `}
          <OutboundLink
            className="underline"
            href="https://zeit.co/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Zeit Now
          </OutboundLink>
          . <br />
          Foto's worden gehost via{` `}
          <OutboundLink
            className="underline"
            href="https://firebase.google.com/products/storage"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cloud Storage for Firebase
          </OutboundLink>
          , video's via{` `}
          <OutboundLink
            className="underline"
            href="https://www.youtube.com/channel/UCskGv0_BmsrLEFuZJ83IEaA"
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube
          </OutboundLink>
          .
          <br />
          Code is geschreven in{` `}
          <OutboundLink
            className="underline"
            href="https://code.visualstudio.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Visual Studio Code
          </OutboundLink>
          .
          <br />
          Alle broncode is te vinden via de openbare{` `}
          <OutboundLink
            className="underline"
            href="https://github.com/TECHMAUS/devierdedimensie.nl"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub repo
          </OutboundLink>
          .
        </section>

        <section className="mt-8">
          <h3 className="font-bold uppercase text-lg">Met bijdragen van</h3>
          <table class="table-auto border-collapse uppercase leading-snug mt-4">
            <tbody>
              <tr>
                <td class="border-b pr-4 pb-3 font-light align-top">Video</td>
                <td class="border-b pb-3 font-bold">
                  <span className="text-sm font-normal">Vaste partner:</span>
                  {` `}
                  <OutboundLink
                    className="underline"
                    href="https://springstofmedia.nl/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Springstofmedia
                    <svg
                      className="fill-current inline align-middle w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                  </OutboundLink>
                  {` `}
                  <br />
                  <span className="text-sm font-normal">Openingsfeest:</span>
                  {` `}
                  Toek.tv (Daniel Smith)
                </td>
              </tr>
              <tr>
                <td class="border-b pr-4 py-3 font-light align-top">
                  Fotografie
                </td>
                <td class="border-b py-3 font-bold">
                  <span className="text-sm font-normal">Vaste partner:</span>
                  {` `}
                  <OutboundLink
                    className="underline"
                    href="https://www.instagram.com/jarethsky/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Jareth Sky (Kenny Stroobandt)
                    <svg
                      className="fill-current inline align-middle w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                  </OutboundLink>
                  <br />
                  <span className="text-sm font-normal">Verder:</span> Fotoko |
                  Wouter Slits | Anand Sie | Husk
                </td>
              </tr>
              <tr>
                <td class="pr-4 pt-3 font-light align-top">Website & Design</td>
                <td class="pt-3 font-bold">
                  <OutboundLink
                    className="underline"
                    href="https://www.mauritsmisana.nl/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    TECHMAUS (Maurits Misana)
                    <svg
                      className="fill-current inline align-middle w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                  </OutboundLink>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-12">
          <p>
            Met veel liefde hebben we nog aan dit project gewerkt{` `}
            <span aria-label="heart" role="img">{`\u2764`}</span> <br />
            Reacties worden gewaardeerd, jullie weten ons te vinden. <br />
            We zien jullie in 2022-2023 voor het 25<sup>e</sup> lustrum! <br />
          </p>
          <p className="mt-4">
            Liefs, <br />
            <i>Lustrum Media Commissie</i>
          </p>
          <p className="mt-2">
            Leidy Kupers <br />
            Lorenzo Flipse <br />
            Leanne van Bentem <br />
            Maurits Misana <br />
            Amy den Dekker <br />
            Anand Sie <br />
          </p>
          <Img
            alt="Foto Lustrum Media Commissie"
            className="w-full mt-8"
            fluid={data.fileName.childImageSharp.fluid}
          />
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "lustrum-media.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ColofonPage;
