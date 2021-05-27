import React from "react";

const style = {
    tile: {
        fontSize: '25px',
        borderBottom: '1px solid #00000050',
        padding: '20px',
        cursor: 'pointer',
    },
}

export const Tile = ({ tile }) => {
  return (
    <div>
      {Object.values(tile).map((value, index) => (
        <div key={index} style={style.tile}>
          {value}
        </div>
      ))}
    </div>
  );
};
