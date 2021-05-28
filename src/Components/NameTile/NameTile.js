import React from "react";

import {Tile} from '../Tile/Tile';

export const NameTile = ({ tiles }) => {
  return (
    <div style={style.listContainer}>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};


const style ={
    listContainer: {
        height: '300px',
    }
}