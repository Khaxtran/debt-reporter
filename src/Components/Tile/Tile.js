import React, { useState, useRef } from "react";
import useCollapse, { Collapsible } from 'react-hook-collapse';
import { DebtorSummary } from "../DebtorSummary/DebtorSummary";

import {DebtRecorder} from '../DebtRecorder/DebtRecorder';

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

export const Tile = ({ tile }) => {
  const ref = useRef();
  const [state, setState] = useState(false);
  useCollapse(ref, state);

  const [summaries, setSummaries] = useState([]);

  const addSummary = (amount, description, date) => {
    setSummaries([
      ...summaries,
      {
        amount: amount,
        description: description,
        date: date
      }
    ])
  }
  
  return (
    <div>
      {Object.values(tile).map((value, index) => (
        <div 
          key={index} 
          style={style.tile} 
          onClick={() => { setState(!state);}}
          > {value} 
          <div>=</div>
        </div>
      ))}
      <div ref={ref} style={{ overflow: 'hidden', transition: '0.1s' }}>
        <DebtRecorder summaries={summaries}
                      addSummary={addSummary}/>
      </div>
      <DebtorSummary tiles={summaries}/>
    </div>
  );
};
