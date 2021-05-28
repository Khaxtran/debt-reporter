import React, { useState } from 'react';

import './App.css';
import {CreateDebtor} from './Components/CreateDebtor/CreateDebtor';

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
     <CreateDebtor addDebtor={addDebtor}
            debtors={debtors}/>
    </div>
  );
}

export default App;
