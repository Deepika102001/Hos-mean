
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON request bodies

// // MongoDB connection URI
// const mongoURI = 'mongodb://localhost:27017/hospital'; // Change this to your actual database name

// // Connect to MongoDB using Mongoose
// mongoose.connect(mongoURI, { });
// const db = mongoose.connection;

// // Mongoose User Schema
// const userSchema = new mongoose.Schema({
//     patient_id:Number,
//     name:String,
//     password:String,
//     age:Number,
//     gender:String,
//     email:String,
//     contact:Number,
//     Role:String
//   // Other fields as needed
// },{ collection: 'Usertable' });

// // Mongoose User Model
// const UserModel = mongoose.model('Usertable', userSchema);

// // Example endpoint to fetch data from MongoDB based on email ID in the request body
// app.post('/api/user', async (req, res) => {
//   const userEmail = req.body.email;
//   const updatedData=req.body;
//   console.log(userEmail);

//   if (!userEmail) {
//     return res.status(400).json({ error: 'Email is required in the request body' });
//   }

//   try {
//     // Fetch data from MongoDB based on email ID using Mongoose
//     //post
//     // const user = await UserModel.findOne({ email: userEmail }); 
//     const user = await UserModel.find(); // get all
//     //put
//     // const updatedUser = await UserModel.findOneAndUpdate(
//     //     { email: userEmail },
//     //     { $set: updatedData },
//     //     { new: true }
//     //   )

//     // Send the data as JSON response
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching data from MongoDB:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
