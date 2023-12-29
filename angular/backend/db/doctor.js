const mongoose = require('mongoose');
const DoctorTable = new mongoose.Schema({
   
name:String,
email:String,
password:String,
role:String
      // Other fields as needed
    },{ collection: 'Doctor' });
const DoctorModel = mongoose.model('Doctor', DoctorTable);
module.exports=DoctorModel