import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
        <p key={index} style={style.tile}> {value} </p>
      ))}
    </div>
  );
};



const style = {
    tile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '20px',
        backgroundColor: '#Ebebeb',
        padding: '20px',
        cursor: 'pointer',
        margin: '0px 25px',
        marginTop: '10px',
    },
}