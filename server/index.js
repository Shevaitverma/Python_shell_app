const { PythonShell } = require('python-shell');
const express = require('express');
const cors = require('cors');

//initializing express...
const app = express();
const PORT = 5000;

//middleware...
app.use(cors());
app.use(express.json());


// API
app.post("/",async(req,res)=>{
    try{
        const { input_var } = req.body;

        // console.log(req.body);
        // console.log(input_var);

        let options = {
            scriptPath:"./", //default path for script...
            args: [input_var],
        };
        var val_op;
        PythonShell.run("script.py",options,(err,res_o)=>{
            if(err) console.log(err);
            if(res_o) {res.json({data_output : res_o }); 
            return} ; // res.json used to send value to react
        });

        // res.send({data_output : res_o });

    } catch(err){
        console.error(err.message);
    }
})


//Listening to the server.
app.listen(PORT, ()=>{
    console.log(`server running at port: ${PORT}`);
})