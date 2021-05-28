import React, {useState, useEffect} from 'react';

import {CreateDebtorForm} from '../../Components/CreateDebtorForm/CreateDebtorForm';
import {NameTile} from '../../Components/NameTile/NameTile';

export const AddDebtor = ({debtors, createDebtor}) => {
    const [name, setName] = useState('');
    const [duplicate, setDuplicate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!duplicate) {
            createDebtor(name);
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
    return(
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
              <NameTile tiles={debtors}/>
            </div>
          </section>
        </div>
        
    </div>
    )
}

export const style = {
    section: {
        backgroundColor: 'white',
        color: 'black',
        display: 'block',
        width: '100%',
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
        width: '100%',
        height: '25px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    },

    containers: {
      margin: '50px 0px',
    }
}
