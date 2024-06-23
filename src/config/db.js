const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect = async()=>{
    try{

        await mongoose.connect(process.env.DATABASE_URL);

        console.log('database connect sucessfully');

    }catch(err){
        console.log(err);
        console.log('database not connect sucessfully');
    }
}

module.exports = dbconnect;