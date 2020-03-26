import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

function QuickMenu({ events }) {
  return (
    <div className="text-xs bigm:text-sm sm:text-base 2xl:text-lg sticky inset-x-0 top-0 py-2 -mx-4 px-4 md:py-3 shadow-lg z-50 bg-white">
      <h3 className="uppercase font-bold text-gray-400 mb-1">Snel naar</h3>
      <div className="flex flex-wrap justify-start -m-2 2xl:-m-3">
        {events.map((event) => {
          const { eventID } = event;

          return (
            <button
              key={eventID}
              className={`m-2 2xl:m-3 leading-none uppercase pb-0.5 border-b-3 border-${event.color}`}
              type="button"
              onClick={() => scrollTo(`#${eventID}`)}
            >
              {event.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickMenu;
