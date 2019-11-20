import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="max-w-6xl 2xl:max-w-75vw mx-auto w-full px-3 md:px-8 lg:px-12 2xl:px-20">
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <h2 className="uppercase leading-tight bg-gala text-white text-xl sm:text-2xl font-bold inline-block my-8 p-3">
          Oops, deze pagina is verdwenen in de 4<sup className="lowercase">e</sup> dimensie...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
