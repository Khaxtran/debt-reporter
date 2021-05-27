import React from "react";
import '../../style.css';

import { Tile } from "../Tile/Tile";

const style ={
    listContainer: {
        overFlow: 'scroll',
        height: '200px'
    }
}

export const TileList = ({ tiles }) => {
  return (
    <div className='TileList' style={style.listContainer}>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
