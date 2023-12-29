const mongoose = require('mongoose');

const Usertable = new mongoose.Schema({
    patient_id:Number,
    name:String,
    password:String,
    age:Number,
    gender:String,
    email:String,
    contact:Number,
    Role:String
  // Other fields as needed
},{ collection: 'Usertable' });

const UserModel = mongoose.model('Usertable', Usertable);

module.exports =UserModel
