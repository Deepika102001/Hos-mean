const mongoose = require('mongoose');
const PharmacistTable = new mongoose.Schema({
  name:String,
  password:String,
  age:Number,
  email:String,
  contact:Number,
  Role:String
      // Other fields as needed
    },{ collection: 'pharmacist' });
const PharmacistModel = mongoose.model('pharmacist', PharmacistTable);
module.exports=PharmacistModel