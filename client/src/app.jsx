import React, { useState } from 'react';


const App = () => {
    //used for send input variable to the server....
    const [ input_var, setVar] = useState("");
    const [rec_var, setRec] = useState("");
    const onSubmitForm = async (e) =>{
        e.preventDefault();
        try {
            const body = {input_var};
            const response = await fetch('http://localhost:5000/',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(body)
            });
            const data = await response.json();
            setRec(data.data_output);

        } catch (err) {
            console.error(err.message);
        }
    }

    //used for receiving processed data value from the server....
    
    // const list_val = async ()=>{
    //     const jsonData = await response.json();
    //     setRec(jsonData);
    // }
    

    return(
        <>
        <form onSubmit={onSubmitForm}>
            <input 
                type="Text" 
                placeholder="Enter name"
                value={input_var} 
                onChange={e => setVar(e.target.value)}
            />
            <button > Submit </button>
        </form>
        <div>
            <p>
            {rec_var}
            </p>
        </div>
        </>
    )
}

export default App;