import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="relative flex p-2 bigm:p-3 sm:p-8 items-stretch font-din min-h-screen text-gray-900">
      <div className="border-4 bigm:border-6 sm:border-8 flex flex-col w-full border-black">
        <Header />

        <main className="flex flex-col flex-1 md:justify-center mx-auto px-4 py-2 sm:py-4 md:p-8 w-full">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
