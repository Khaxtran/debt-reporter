import React from 'react';

const style = {
    form: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    searchBar: {
        width: '300px',
        height: '30px',
        borderRadius: '10px',
        border: '1px solid #00000070',
        paddingLeft: '15px',
        fontSize: '15px'
    },

    submit: {
        fontSize: '20px',
        width: '130px',
        height: '40px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#2c7c47',
        color: 'white',
    },

}

export const CreateDebtorForm = ({name, setName, handleSubmit}) => {

    return(
        <form onSubmit={handleSubmit} style={style.form}>
            <label>
                <input 
                    style={style.searchBar}
                    name='name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Please enter debtor's name"
                    />
            </label>
            <br />
            <label>
                <input style={style.submit} type='submit' value='Add'/>
            </label>
        </form>
    )
}