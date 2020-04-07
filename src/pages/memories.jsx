import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { getAllEvents } from "../components/utils";
import MemorySection from "../components/mediaPage/memorySection";

import shape3D from "../assets/shapes/3d.svg";

function MemoriesPage({ data }) {
  const shapes = [shape3D];

  return (
    <Layout>
      <SEO title="Memories" />

      <div className="absolute -z-10 inset-0 overflow-hidden" id="page-media">
        {[2].map((i) => (
          <img
            key={i}
            alt=""
            className="absolute opacity-25 lazyload"
            data-src={shapes[i - 2]}
            id={`shape-${i}d`}
          />
        ))}
      </div>

      <div className="pb-16 xl:pb-24 xl:pb-32 mx-auto sm:mt-12 bigm:px-1 sm:px-6 w-full max-w-screen-xl">
        <div className="bg-yellow-50 p-4 rounded mb-6 shadow-sm">
          <h2 className="text-yellow-600 font-semibold">
            <span aria-label="alert icon" className="pr-2" role="img">
              ⚠️
            </span>
            Work in Progress
          </h2>
          <p className="mt-1 text-yellow-500 text-sm">
            Deze pagina is nog in ontwikkeling, het design is nog niet op niveau
            en sommige dingen werken misschien niet lekker. <br />
            Laat het je niet tegenhouden, want de verhalen werken wel! Klik de
            linkjes aan onder de verschillende categoriën en laat je meenemen
            naar de wondere wereld van het lustrum.
          </p>
        </div>

        <div>
          <h2 className="text-3xl leading-9 uppercase font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Lees de lustrum verhalen
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-500 sm:mt-4">
            Gedurende 2017 en 2018 hebben alle lustrum commissies zich
            ontzettend hard ingezet en is er als één grote lustrum familie voor
            gezorgd dat het lustrumjaar onvergetelijk was.{" "}
          </p>
          <p className="mt-2 text-lg leading-7 text-gray-500">
            Deze website is er op gericht om het lustrum te (her)ontdekken.
            Twijfel dus niet om rond te dwalen door de vele verhalen en je mee
            te laten nemen in een achtbaanrit tussen de pieken en dalen van het
            lustrum.
          </p>
        </div>

        <div className="grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-gap-4 row-gap-12 my-8">
          {getAllEvents().map((event) => {
            const items = data.allMdx.group.find(
              (el) => el.fieldValue === event.eventID
            ).edges;

            return (
              <MemorySection key={event.eventID} event={event} items={items} />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx {
      group(field: frontmatter___eventID) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
        fieldValue
      }
    }
  }
`;

export default MemoriesPage;
