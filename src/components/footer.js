import React from "react";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="bg-black text-sm 2xl:text-base text-white font-light leading-tight py-4 sm:py-6 px-4 md:px-8 w-full">
      <div className="bigm:px-1 sm:px-6 flex flex-col sm:flex-row text-center sm:text-left items-center justify-between sm:items-baseline">
        <p className="">
          Een project van de{` `}
          <Link
            className="font-bold underline hover:no-underline"
            to="/colofon/#lustrum-media"
          >
            Lustrum Media Commissie
          </Link>
        </p>

        <p className="mt-3 sm:mt-0 sm:ml-4 sm:text-right flex items-center">
          <a
            className="no-underline"
            href="https://github.com/TECHMAUS/devierdedimensie.nl"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bekijk op {` `}{" "}
            <span className="font-bold underline hover:no-underline">
              GitHub
            </span>
          </a>
          <svg className="fill-current w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
