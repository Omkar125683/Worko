const express = require("express");
const app=express();
const dbconnect = require('./src/config/db');
const user = require('./src/routes/userRoutes');
dbconnect();
app.use(express.json());
require('dotenv').config();
// app.post('/api/v1',user)
app.use('/api/v1',user);

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log('server is started')
})