import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({list}) => {
  return (
    <div>
      {list.map((i, j) => {
        return (<Tile
          key={j}
          name={i.name}
          description={i.description}
        />)
      })}
    </div>
  );
};
