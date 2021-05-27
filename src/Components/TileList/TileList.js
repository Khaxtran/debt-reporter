import React from "react";

import { Tile } from "../Tile/Tile";

const style ={
    listContainer: {
        height: '300px',
    }
}

export const TileList = ({ tiles }) => {
  return (
    <div style={style.listContainer}>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
