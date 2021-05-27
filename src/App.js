import React, { useState } from 'react';

import './App.css';
import {Debtor} from './Components/Debtor/Debtor';

function App() {
  const [debtors, setDebtors] = useState([]);

  const addDebtor = (name) => {
    setDebtors([
      ...debtors,
      {name: name,}
    ])
  }

  return (
    <div className="App">
      <h1>Debt Reporter</h1>
     <Debtor addDebtor={addDebtor}
            debtors={debtors}/>
    </div>
  );
}

export default App;
