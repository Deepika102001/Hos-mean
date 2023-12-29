
const express = require('express');
const mongoose = require('mongoose');
const UserModel=require('./user')
const AppoinmentModel=require('./Appointment')
const MedicineModel=require('./Medicine')
const OfficialModel=require('./official')
const DoctorModel=require('./doctor')
const PharmacistModel=require('./pharmacist')


const cors =require("cors")

const app = express();
const port = 1111;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware 

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/hospital'; // Change this to your actual database name

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {});
const db = mongoose.connection;

// ===================================== USER ===============================================

// get all
app.get('/users', async (req, res) => {
    
    try {
      const user = await UserModel.find(); // get all
      // Send the data as JSON response
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get user by email
app.post('/getEmail', async (req, res) => {
  const userEmail = req.body.email;
  console.log(userEmail);
    
    try {
    const user = await UserModel.findOne({ email: userEmail }); 
     console.log(user);
      // Send the data as JSON response
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create user  --------------imp register pat
app.post('/user', async (req, res) => {
const userData = req.body;
    
    try {
    const newUser = await UserModel.create(userData)

      // Send the data as JSON response
      if (newUser) {
        res.json(newUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// update user details by email
app.put('/updateUser', async (req, res) => {
  const userEmail = req.body.email;
  const updatedData=req.body;

  if (!userEmail) {
    return res.status(400).json({ error: 'Email is required in the request body' });
  }

  try {
    
    const updatedUser = await UserModel.findOneAndUpdate(
        { email: userEmail },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ========================================== APPOINTMENT =============================================================================


// get all Appoinment
app.get('/appoinment', async (req, res) => {
    
    try {
      const datas = await AppoinmentModel.find(); // get all
      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get Appointment  by id
app.get('/appoinmentid/', async (req, res) => {
  const AppointmentId = req.body.appointmentId;
    
    try {
    const datas = await UserModel.findOne({ appointmentId: AppointmentId }); 

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create user
app.post('/newAppoinment', async (req, res) => {
const newAppoinment = req.body;
    
    try {
    const datas = await AppoinmentModel.create(newAppoinment)

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// update user details by email
app.put('/updateAppoint', async (req, res) => {
  const AppointmentId = req.body.appointmentId;
  const updatedData=req.body;

  if (!AppointmentId) {
    return res.status(400).json({ error: 'AppointmentId is required in the request body' });
  }

  try {
    
    const datas = await AppoinmentModel.findOneAndUpdate(
        { appointmentId: AppointmentId },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// ========================================== MEDICINE =============================================================================


// get all Medicine
app.get('/Medicine', async (req, res) => {
    
    try {
      const datas = await MedicineModel.find(); // get all
      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get medicine  by name
app.get('/medicineName/', async (req, res) => {
  const MedicineName = req.body.medicineName;
    
    try {
    const datas = await MedicineModel.findOne({ medicineName: MedicineName }); 

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create user
app.post('/newmedicine', async (req, res) => {
const newMedicine = req.body;
    
    try {
    const datas = await MedicineModel.create(newMedicine)

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });   

// update user details by email
app.put('/updatemedicine', async (req, res) => {
    const MedicineName = req.body.medicineName;
  const updatedData=req.body;
  console.log(MedicineName);

  if (!MedicineName) {
    return res.status(400).json({ error: 'MedicineName is required in the request body' });
  }

  try {
    
    const datas = await MedicineModel.findOneAndUpdate(
        { medicineName: MedicineName },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete user details by email
app.delete('/deletemedicine/:medicineName', async (req, res) => {
    console.log(req.body);
    const MedicineName = req.params.medicineName;
    console.log(MedicineName);
//   const updatedData=req.body;
console.log(MedicineName);
  if (!MedicineName) {
    return res.status(400).json({ error: 'MedicineName is required in the request body' });
  }

  try {
    
    const datas = await MedicineModel.deleteOne({ medicineName: MedicineName })

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// ========================================== OFFICIAL =============================================================================


// get all Official
app.get('/Official', async (req, res) => {
    
    try {
      const datas = await OfficialModel.find(); // get all
      // Send the data as JSON response
      console.log(datas);
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// get official  by name
app.post('/officialEmail/', async (req, res) => {
    console.log(req);
  const userEmail = req.body.email;
    console.log(userEmail);
    try {
    const datas = await OfficialModel.findOne({ email: userEmail }); 
    console.log(datas);

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //create user
app.post('/newofficial', async (req, res) => {
const newofficial = req.body;
    console.log(newofficial);
    try {
    const datas = await OfficialModel.create(newofficial)

      // Send the data as JSON response
      if (datas) {
        res.json(datas);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Doctor Register
  app.post('/newdoctor', async (req, res) => {
    const newdoctor = req.body;
        console.log(newdoctor);
        try {
        const datas = await DoctorModel.create(newdoctor)
    
          // Send the data as JSON response
          if (datas) {
            res.json(datas);
          } else {
            res.status(404).json({ error: 'User not found' });
          }
        } catch (error) {
          console.error('Error fetching data from MongoDB:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
    // Pharmacist Register
    app.post('/newpharmacist', async (req, res) => {
      const newpharmacist = req.body;
          console.log(newpharmacist);
          try {
          const datas = await PharmacistModel.create(newpharmacist)
      
            // Send the data as JSON response
            if (datas) {
              res.json(datas);
            } else {
              res.status(404).json({ error: 'User not found' });
            }
          } catch (error) {
            console.error('Error fetching data from MongoDB:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        });
        

// update user details by email
app.put('/updateUser', async (req, res) => {
  const userEmail = req.body.email;
  const updatedData=req.body;

  if (!userEmail) {
    return res.status(400).json({ error: 'email is required in the request body' });
  }

  try {
    
    const datas = await OfficialModel.findOneAndUpdate(
        { email: userEmail },
        { $set: updatedData },
        { new: true }
      )

    // Send the data as JSON response
    if (datas) {
      res.json(datas);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// update Doctor Password by email
app.put('/doctorupdate', async (req, res) => {
  const doctorEmail = req.body.email;
  const doctorUpdatePassword = req.body.password; // Corrected variable name

  if (!doctorEmail || !doctorUpdatePassword) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  try {
    const data = await DoctorModel.findOne({ email: doctorEmail });

    if (!data) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    data.password = doctorUpdatePassword; // Update the password field

    await data.save(); // Save the updated data

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// update user Password by email
app.put('/userupdate', async (req, res) => {
  const userEmail = req.body.email;
  const userUpdatePassword = req.body.password; // Corrected variable name

  if (!userEmail || !userUpdatePassword) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  try {
    const data = await UserModel.findOne({ email: userEmail });

    if (!data) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    data.password = userUpdatePassword; // Update the password field

    await data.save(); // Save the updated data

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// update frontoffice Password by email
app.put('/frontofficeupdate', async (req, res) => {
  const frontofficeEmail = req.body.email;
  const frontofficeUpdatePassword = req.body.password; // Corrected variable name

  if (!frontofficeEmail || !frontofficeUpdatePassword) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  try {
    const data = await OfficialModel.findOne({ email: frontofficeEmail });

    if (!data) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    data.password = frontofficeUpdatePassword; // Update the password field

    await data.save(); // Save the updated data

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// update Pharmacist Password by email
app.put('/pharmacistupdate', async (req, res) => {
  const pharmacistEmail = req.body.email;
  const pharmacistUpdatePassword = req.body.password; // Corrected variable name

  if (!pharmacistEmail || !pharmacistUpdatePassword) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  try {
    const data = await PharmacistModel.findOne({ email: pharmacistEmail });

    if (!data) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    data.password = pharmacistUpdatePassword; // Update the password field

    await data.save(); // Save the updated data

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// Endpoint for doctor login
app.post('/doctorlogin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await DoctorModel.findOne({ email });

    if (!doctor || doctor.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', doctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Endpoint for  pharmacistlogin
app.post('/pharmacistlogin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const pharmacist = await PharmacistModel.findOne({ email });

    if (!pharmacist || pharmacist.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', pharmacist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//User Login ----------imp

app.post('/userlogin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Frontoffice login

app.post('/frontofflogin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const frontoffice = await OfficialModel.findOne({ email });

    if (!frontoffice || frontoffice.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', frontoffice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Endpoint to get doctor details by email
app.get('/getDoctorByEmail/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const doctor = await DoctorModel.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor details found', doctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Endpoint to get User details by email
app.get('/getUserByEmail/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User details found', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get Pharmacist details by email
app.get('/getPharmacistByEmail/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const pharmacist = await PharmacistModel.findOne({ email });

    if (!pharmacist) {
      return res.status(404).json({ message: 'Pharmacist not found' });
    }

    res.status(200).json({ message: 'Pharmacist details found', pharmacist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get FrontOffice details by email
app.get('/getFrontOfficeUserByEmail/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const official = await OfficialModel.findOne({ email });

    if (!official) {
      return res.status(404).json({ message: 'Frontoffice not found' });
    }

    res.status(200).json({ message: 'Frontoffice details found', official });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
