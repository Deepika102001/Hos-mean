const mongoose = require('mongoose');

const Medicinetable = new mongoose.Schema({
    
dosage:String,
medicineName:String,
price: Number,
gst : Number,
discount:Number

  // Other fields as needed
},{ collection: 'Medicine' });

const MedicineModel = mongoose.model('Medicine', Medicinetable);

module.exports =MedicineModel