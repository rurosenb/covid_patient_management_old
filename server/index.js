const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();
const connectDB=require('./config/dbConfig')
const cors = require('cors');


const app=express();

//middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

connectDB();



app.use("/vaccine", require('./routes/vaccine'));
app.use('/patient', require('./routes/patient'));
//app.get('/hi', (req, res)=> res.end("Hi"));

app.listen(3500, ()=>{
    console.log('Server running');
})