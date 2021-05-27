import React, {useState, useEffect} from 'react';

import {CreateDebtorForm} from '../CreateDebtorForm/CreateDebtorForm';
import {TileList} from '../TileList/TileList';

 export const style = {
    section: {
        backgroundColor: 'white',
        color: 'black',
        display: 'block',
        width: '50%',
        height: 'auto',
        margin: '50px auto',
        padding: '20px',
        border: 'none',
        borderRadius: '8px',
        overFlow: 'scroll',
    },

    heading: {
        borderBottom: '1px solid #00000050',
        paddingBottom: '15px',
    },
}

export const CreateDebtor = ({debtors, addDebtor}) => {

    const [name, setName] = useState('');
    const [duplicate, setDuplicate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!duplicate) {
            addDebtor(name);
            setName('');
        }
    }

    useEffect(() => {
        const nameIsDuplicate = () => {
          const found = debtors.find((debtor) => debtor.name === name);
          if (found !== undefined) {
            return true;
          }
          return false;
        };
    
        if (nameIsDuplicate()) {
          setDuplicate(true);
        } else {
          setDuplicate(false);
        }
      }, [name, debtors, duplicate]);



    return (
        <div>
            <section style={style.section}>
                <h2 style={style.heading}>Add Debtor {duplicate ? " - Name Already Exists" : ""}</h2>
                <CreateDebtorForm 
                    name={name}
                    setName={setName}
                    handleSubmit={handleSubmit}/>
            </section>
            <section style={style.section}>
                <h2 style={style.heading}>Debtors</h2>
                <TileList tiles={debtors}/>
            </section>
        </div>
    );
}