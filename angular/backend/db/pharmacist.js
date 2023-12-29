const mongoose = require('mongoose');
const PharmacistTable = new mongoose.Schema({
   
name:String,
email:String,
password:String,
role:String
      // Other fields as needed
    },{ collection: 'pharmacist' });
const PharmacistModel = mongoose.model('pharmacist', PharmacistTable);
module.exports=PharmacistModel