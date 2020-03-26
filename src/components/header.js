import { Link } from "gatsby";
import React from "react";
import vierdedimensie from "../assets/de-vierde-dimensie-text.svg";

function Header() {
  return (
    <header className="px-4 md:px-8 py-6 sm:py-8 overflow-x-auto">
      <div className="flex bigm:px-1 sm:px-6 items-center justify-between">
        <Link className="flex-none" to="/">
          <img
            alt="De Vierde Dimensie logo"
            className="h-6 bigm:h-8 md:h-12"
            src={vierdedimensie}
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
              activeClassName="underline"
              className="text-xs bigm:text-sm sm:text-base ml-2 sm:ml-8 font-semibold text-gray-500 uppercase border-b-2 border-transparent hover:border-gray-900"
              partiallyActive={true}
              to={link.route}
            >
              <div className="flex flex-wrap items-center justify-center">
                <span aria-label={link.artiaLabel} className="mr-2" role="img">{link.icon}</span>
                <span className="leading-none">{link.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
