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
          <svg
            className="w-4 h-4 ml-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
