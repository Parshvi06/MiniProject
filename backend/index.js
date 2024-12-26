const express = require('express');     //importing express
const PetRouter = require('./routers/PetRouter');
const userRouter = require('./routers/userRouter');
const contactRouter = require('./routers/contactRouter');

const cors = require('cors');              //shortcut for importing is req

const app = express();             //initializing express

const port = 5000;
    
//middleware
app.use(cors({
    origin:'http://localhost:3000'
}));
 

app.use(express.json());
app.use('/Pet', PetRouter);
app.use('/userLog', userRouter );
app.use('/cont', contactRouter );
 


//route or endpoint
app.get('/',(req,res)=>{
    res.send('Response from express');
});

app.get('/add',(req,res)=>{
    res.send('Response from add');
});

app.get('/getall',(req,res)=>{
    res.send('Response from getall');
});

app.get('/update',(req,res)=>{
    res.send('Response from update');
});


app.listen(port,()=>{console.log('server started')});