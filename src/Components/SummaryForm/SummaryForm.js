import React from 'react';

const style = {
    form: {
        backgroundColor: '#Ebebeb',
        margin: '0px 25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    formDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '20px',
        backgroundColor: '#F6f6f7',
        padding: '20px',
        width: '90%',
        borderRadius: '2px',
        marginBottom: '15px',
        fontSize: '15px'
    },

    p: {
        margin: '0',
        paddingBottom: '5px',
    },

    input: {
        height: '30px',
        width: '180px',
        paddingLeft: '10px'
    },

    submit: {
        marginBottom: '10px',
        width: '100px',
        height: '30px',
        cursor: 'pointer',
    }

}

export const SummaryForm = () => {
    
    return(
        <form style={style.form}>
            <div style={style.formDiv}>
                <div>
                    <p style={style.p}>Amount</p>
                    <label>
                        <input 
                            style={style.input}
                            type='number'
                            name='amount'
                            required
                            placeholder="Please enter amount"/>
                    </label>
                </div>
                
                <br />
                <div>
                    <p style={style.p}>Description</p>
                    <label>
                        <input 
                            style={style.input}
                            type='text'
                            name='description'
                            placeholder='Add description'
                            required/>
                    </label>
                </div>
                
                <br />
                
                <div>
                    <p style={style.p}>Date</p>
                    <label>
                        <input 
                            style={style.input}
                            type="date"
                            name="date"
                            required/>
                    </label>
                </div>
                
                
            </div>
            <label >
                <input type='submit' value='Add' style={style.submit}/>
            </label>
        </form>
    )
}