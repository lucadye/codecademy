import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description.map((i, j) => {
        return (
          <p className="tile" key={j}>{i}</p>
        );
      })}
    </div>
  );
};
