const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email:{
            type:String,
            require:true,
            unique:true,
    },
    name:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    city: { 
        type: String, 
        required: true 
    },
  zipCode: { 
    type: String, 
    required: true ,
},
  isDeleted: { 
    type: Boolean,
     default: false 
    }
});
module.exports = mongoose.model('User',userschema);