import React, { useState } from 'react';

import './App.css';
import {CreateDebtor} from './Components/CreateDebtor/CreateDebtor';
import { DebtorSummary } from './Components/DebtorSummary/DebtorSummary';

function App() {
  const [debtors, setDebtors] = useState([]);
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
      <DebtorSummary addSummary={addSummary}
                      summaries={summaries}/>
    </div>
  );
}

export default App;
