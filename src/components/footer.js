import React from "react";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="bg-black text-sm 2xl:text-base text-white font-light leading-tight py-6 px-3 md:px-8 lg:px-12 2xl:px-20">
      <nav className="flex justify-between items-baseline">
        <p>
          Een project van{` `}
          <Link
            className="font-bold no-underline text-white"
            to="/colofon/#lustrum-media"
          >
            Lustrum Media Commissie
          </Link>
        </p>

        <p className="ml-4 text-right flex items-center">
          <a
            className="no-underline text-white"
            href="https://github.com/TECHMAUS/devierdedimensie.nl"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bekijk op {` `} <span className="font-bold">GitHub</span>
          </a>
          <svg className="fill-current w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
