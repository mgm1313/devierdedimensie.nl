import React from "react";
import ScrollToTop from "react-scroll-up";
import arrowTop from "../assets/scroll-arrow-top.svg";

const BackToTopButton = () => (
  <ScrollToTop showUnder={300} style={{ zIndex: 50 }}>
    <button
      aria-label="Back to Top"
      className="shadow bg-contain overflow-hidden rounded-none"
      style={{
        background: `rgba(0,0,0,0.85) url(${arrowTop}) no-repeat center`,
        width: `35px`,
        height: `35px`,
      }}
      type="button"
    ></button>
  </ScrollToTop>
);

export default BackToTopButton;
