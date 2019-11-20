import { Link } from "gatsby";
import React from "react";
import vierdedimensie from "../assets/de-vierde-dimensie-text.svg";

function Header() {
  return (
    <header className="px-3 md:px-8 lg:px-12 2xl:px-20 py-6 sm:py-8">
      <div className="flex flex-wrap items-center justify-between">
        <Link className="flex items-center no-underline text-black" to="/">
          <img
            alt="De Vierde Dimensie logo"
            className="h-8 bigm:h-10 sm:h-12 lg:h-16"
            src={vierdedimensie}
          />
        </Link>

        <nav className={`block flex items-center w-auto`}>
          {[
            // Currently under development
            // {
            //   route: `/memories`,
            //   title: `Memories`
            // },
            {
              route: `/media`,
              title: `Media`
            },
            {
              route: `/colofon`,
              title: `Colofon`
            }
          ].map(link => (
            <Link
              activeClassName="underline"
              className="inline-block text-sm bigm:text-base 2xl:text-lg mt-0 ml-3 bigm:ml-4 sm:ml-6 text-black uppercase"
              key={link.title}
              partiallyActive={true}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
