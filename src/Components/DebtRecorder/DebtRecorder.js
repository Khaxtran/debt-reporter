import React, {useState} from 'react';

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
        fontSize: '15px',
        backgroundColor: '#F6f6f7',
        padding: '20px',
        width: '90%',
        borderRadius: '2px',
        marginBottom: '15px',
    },

    p: {
        margin: '0',
        paddingBottom: '5px',
        paddingLeft: '4px'
    },

    input: {
        height: '30px',
        width: '180px',
        paddingLeft: '10px',
        border: 'none'
    },

    submit: {
        marginBottom: '10px',
        width: '100px',
        height: '30px',
        cursor: 'pointer',
    }

}

export const DebtRecorder = ({summaries, addSummary}) => {
    const [amount, setAmount] = useState(0.00);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSummary(amount, description, date);
        setAmount(0.00);
        setDescription('');
        setDate('');
    }
    
    return(
        <form style={style.form} onSubmit={handleSubmit}>
            <div style={style.formDiv}>
                <div>
                    <p style={style.p}>Amount</p>
                    <label>
                        <input 
                            style={style.input}
                            type='number'
                            name='amount'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            step=".01"
                            required
                            placeholder="How much they own you?"/>
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Food? or maybe Drinks?'
                            required/>
                    </label>
                </div>
                
                <br />
                
                <div>
                    <p style={style.p}>Date</p>
                    <label>
                        <input 
                            style={style.input}
                            name="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder='When?'
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