import { Link } from "gatsby";
import React from "react";

import logoBlack from "../assets/de-vierde-dimensie-text.svg";
import logoWhite from "../assets/de-vierde-dimensie-text-white.svg";

function Header({ theme }) {
  return (
    <header className="px-4 md:px-8 py-6 sm:py-8 overflow-x-auto">
      <div className="flex bigm:px-1 sm:px-6 items-center justify-between">
        <Link className="flex-none" to="/">
          <img
            alt="De Vierde Dimensie logo"
            className="h-5 bigm:h-8 md:h-12"
            src={theme === "light" ? logoBlack : logoWhite}
          />
        </Link>

        <nav className="flex flex-initial">
          {[
            {
              route: `/memories`,
              icon: `📜`,
              artiaLabel: `Oud perkament`,
              title: `Verhalen`,
            },
            {
              route: `/media`,
              icon: `🎬`,
              artiaLabel: `Filmklapper`,
              title: `Media`,
            },
            {
              route: `/colofon`,
              icon: `📎`,
              artiaLabel: `Paperclip`,
              title: `Colofon`,
            },
          ].map((link) => (
            <Link
              key={link.title}
              partiallyActive
              activeClassName="menu-current"
              className={`text-xs group bigm:text-sm sm:text-base ml-1 bigm:ml-2 sm:ml-8 font-semibold uppercase ${
                theme === "light" ? `text-gray-500` : `text-gray-50`
              }`}
              to={link.route}
            >
              <div className="flex flex-wrap items-center justify-center">
                <span
                  aria-label={link.artiaLabel}
                  className="py-0.5 px-2"
                  role="img"
                >
                  {link.icon}
                </span>
                <span
                  className={`menu-title leading-none py-2px border-b-0 group-hover:pb-0 group-hover:border-b-2 border-transparent ${
                    theme === "light" ? `border-gray-900` : `border-gray-200`
                  }`}
                >
                  {link.title}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

Header.defaultProps = {
  theme: "light",
};

export default Header;
