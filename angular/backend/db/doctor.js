const mongoose = require('mongoose');
const DoctorTable = new mongoose.Schema({
  name:String,
  password:String,
  age:Number,
  email:String,
  contact:Number,
  Role:String
  
      // Other fields as needed
    },{ collection: 'Doctor' });
const DoctorModel = mongoose.model('Doctor', DoctorTable);
module.exports=DoctorModel