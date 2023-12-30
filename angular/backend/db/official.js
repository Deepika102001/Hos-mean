const mongoose = require('mongoose');
const OfficialTable = new mongoose.Schema({
   
  name:String,
  password:String,
  age:Number,
  email:String,
  contact:Number,
  Role:String
      // Other fields as needed
    },{ collection: 'official' });
const OfficialtModel = mongoose.model('official', OfficialTable);
module.exports=OfficialtModel