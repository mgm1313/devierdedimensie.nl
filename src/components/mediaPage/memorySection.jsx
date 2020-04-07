import React from "react";
import { Link } from "gatsby";

function MemorySection({ event, items }) {
  return (
    <section>
      <h2
        className={`py-2 px-4 text-white bg-${event.color} uppercase font-extrabold leading-none tracking-wide text-xl lg:text-2xl`}
      >
        {` ${event.title} `}
      </h2>
      <div className="py-2">
        {items.map((item) => {
          const { frontmatter } = item.node;

          return (
            <Link
              key={frontmatter.title}
              className="group block capitalize hover:underline leading-none mb-3 text-lg leading-7 font-medium text-gray-900"
              to={frontmatter.slug}
            >
              {`${frontmatter.title}...`}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MemorySection;
