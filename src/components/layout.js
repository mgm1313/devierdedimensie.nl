import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import BackToTopButton from "../components/backToTop";

function Layout({ children }) {
  return (
    <div className="relative flex items-stretch font-din min-h-screen text-gray-900">
      <div className="m-2 bigm:m-3 sm:m-8 border-4 bigm:border-6 sm:border-8 flex flex-col w-full border-black">
        <Header />

        <main className="flex flex-col flex-1 md:justify-center mx-auto px-4 py-2 sm:py-4 lg:py-8 md:p-8 w-full">
          {children}
        </main>

        <Footer />

        <BackToTopButton />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
