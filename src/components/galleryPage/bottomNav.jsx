import React from "react";
import { Link } from "gatsby";

import parse from "html-react-parser";
import { getColorByID, ChevronForButton } from "../utils";

function NavButton({ target, direction }) {
  const color = getColorByID(target.frontmatter.eventID);

  return (
    <div
      className={`flex items-center px-2 py-1.5 text-${color} font-semibold bg-white rounded-sm shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl transition duration-100`}
    >
      {direction === "back" && <ChevronForButton direction="back" />}
      <Link to={target.frontmatter.slug}>
        {parse(target.frontmatter.title)}
      </Link>
      {direction === "forward" && <ChevronForButton direction="forward" />}
    </div>
  );
}

function BottomNav({ next, prev }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="sticky mt-4 bottom-0 z-20 font-light uppercase text-xs bigm:text-sm 2xl:text-base"
    >
      <ol className="pb-3 list-none px-1 flex justify-between leading-tight">
        <li className="safe-m-b flex items-center">
          {prev && <NavButton direction="back" target={prev} />}
        </li>
        <li className="safe-m-b flex items-center text-right">
          {next && <NavButton direction="forward" target={next} />}
        </li>
      </ol>
    </nav>
  );
}

export default BottomNav;
