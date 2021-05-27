import React from 'react';

import {style} from '../CreateDebtor/CreateDebtor';
import {SummaryTile} from '../../SummaryTile/SummaryTile';

export const DebtorSummary = ({tiles}) => {
    
    return(
        <div>
            <div style={style.heading}>
                <h2>Summary</h2>
            </div>
            
            <section style={style.section}>
            {tiles.map((tile, index) => (
        <SummaryTile key={index} tile={tile} />
      ))}
            </section>
        </div>
    )
}