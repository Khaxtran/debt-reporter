import React, {useState, useEffect} from 'react';

import '../../style.css';
import {CreateDebtorForm} from '../CreateDebtorForm/CreateDebtorForm';
import {TileList} from '../TileList/TileList';

 export const style = {
    section: {
        backgroundColor: 'white',
        color: 'black',
        display: 'block',
        width: '50%',
        height: 'auto',
        margin: '0px auto',
        padding: '20px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    },

    heading: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#40843e',
        color: 'white',
        margin: '0px auto',
        width: '50%',
        height: '25px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    },

    containers: {
      margin: '50px 0px',
    }
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
            <div style={style.containers}>
              <div style={style.heading}>
                <h2 >Add Debtor {duplicate ? " - Name Already Exists" : ""}</h2>
              </div>
              <section style={style.section}>
                <CreateDebtorForm 
                    name={name}
                    setName={setName}
                    handleSubmit={handleSubmit}/>
              </section>
            </div>
            
            <div style={style.containers}>
              <div style={style.heading}>
                <h2 >Debtors</h2>
              </div>
              <section style={style.section}>
                <div className='debtors'>
                  <TileList tiles={debtors}/>
                </div>
              </section>
            </div>
            
        </div>
    );
}