import React, { Component } from "react";

class QuickMenu extends Component {
  render() {
    const events = this.props.events;

    return (
      <div className="pt-2 pb-3 sm:py-4 2xl:py-6 text-xs bigm:text-sm sm:text-base 2xl:text-lg sticky top-0 z-50 bg-white -mb-4 bigm:-mb-5 sm:-mb-8">
        <div className="px-3 md:px-8 lg:px-12 2xl:px-20 max-w-6xl 2xl:max-w-75vw mx-auto w-full">
          <h3 className="uppercase font-bold mb-2">Snel naar</h3>
          <div className="flex flex-wrap justify-start -m-2 2xl:-m-3">
            {events.map((event, i) => {
              const shortName = event.short;

              return (
                <button
                  className={`m-2 2xl:m-3 leading-none uppercase border-b-2 border-${event.color}`}
                  key={i}
                  onClick={() =>
                    document.getElementById(shortName).scrollIntoView({
                      behavior: `smooth`,
                      block: `nearest`
                    })
                  }
                >
                  {event.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default QuickMenu;
