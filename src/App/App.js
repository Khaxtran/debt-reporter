import React, { useState } from 'react';

import './App.css';
import {style} from '../containers/AddDebtor/AddDebtor';
import {AddDebtor} from '../containers/AddDebtor/AddDebtor';
import {SummaryContainer} from '../containers/SummaryContainer/SummaryContainer';



function App() {

  const [debtors, setDebtors] = useState([]);

  const createDebtor = (name) => {
    setDebtors([
      ...debtors,
      {name: name,}
    ])
  }

  return (  
    <div className="App">
      <h1>Debt Reporter</h1>
      <div className="Left-Right-Container">
        <div className="Left">
        <section>
          <AddDebtor debtors={debtors}
                      createDebtor={createDebtor}/>
        </section>
      </div>

      <div className="Right" style={style.containers}>
          <div style={style.heading}>
            <h2>Summary</h2>
          </div>
          <section style={style.section}>
            <div className='debtors'>
              <SummaryContainer />
            </div>
          </section>
        </div>
      </div>
      
      

    </div>
  );
}

export default App;
