const mongoose = require('mongoose');
const AppointmentTable = new mongoose.Schema({
   
    appointmentId:Number,
    doctorName:String,
    patientName:String,
    status:Boolean,
    description:String
      // Other fields as needed
    },{ collection: 'Appoinment' });
const AppoinmentModel = mongoose.model('Appoinment', AppointmentTable);
module.exports=AppoinmentModel