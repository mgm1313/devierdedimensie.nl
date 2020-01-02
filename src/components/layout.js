import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import BackToTopButton from "../components/backToTop";

function Layout({ children }) {
  return (
    <div className="relative flex flex-col font-din min-h-screen overflow-hidden">
      <Header />

      {children}

      <Footer />

      <BackToTopButton />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
