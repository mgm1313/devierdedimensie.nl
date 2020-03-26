import React, { Component } from "react";
import AnimateHeight from "react-animate-height";
import { Link } from "gatsby";

class Caption extends Component {
  render() {
    const showCaption = this.props.showCaption;
    const node = this.props.node;

    // https://gist.github.com/lanqy/5193417
    function bytesToSize(bytes, seperator = ``) {
      const sizes = [`Bytes`, `KB`, `MB`, `GB`, `TB`];
      if (bytes === 0) return `n/a`;
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
      if (i === 0) return `${bytes}${seperator}${sizes[i]}`;
      return `${(bytes / 1024 ** i).toFixed(1)}${seperator}${sizes[i]}`;
    }

    return (
      <AnimateHeight height={showCaption ? `auto` : 0}>
        <div className="text-center mx-auto py-6">
          <h2 className="text-lg text-gray-400 leading-tight">{node.name}</h2>
          <div className="text-gray-200 text-sm leading-snug">
            <span>{`${node.metadata.width} × ${node.metadata.height}`} px</span>
            <span className="mx-2">{`|`}</span>
            <span>{bytesToSize(node.metadata.size, ` `)}</span>
          </div>
          {node.metadata.timestamp._seconds > 1 && (
            <div className="text-gray-200 text-sm leading-snug">
              {new Date(
                node.metadata.timestamp._seconds * 1000
              ).toLocaleDateString(`nl`, {
                weekday: `short`,
                year: `numeric`,
                month: `short`,
                day: `2-digit`,
                hour: `2-digit`,
                minute: `2-digit`,
                second: `2-digit`,
                timeZoneName: `short`,
              })}
            </div>
          )}
          {null !== node.labels && (
            <div>
              {` `}
              {node.labels.map((label, i) => (
                <span
                  key={i}
                  className="inline-block lowercase bg-gray-800 px-2 py-px text-xs text-gray-500 mr-2 mt-2"
                >
                  {label.description}
                </span>
              ))}
              <Link
                className="inline-block"
                style={{ verticalAlign: `super` }}
                to="/colofon#Google-Vision"
              >
                <span
                  className="inline-block text-gray-500 fill-current h-3 w-3"
                  title="Over deze tags"
                >
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z" />
                  </svg>
                </span>
              </Link>
            </div>
          )}
        </div>
      </AnimateHeight>
    );
  }
}

export default Caption;
