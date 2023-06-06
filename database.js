const mongoose = require('mongoose');

// Connect to MongoDB


mongoose.connect("mongodb+srv://mani16032:mani16032@cluster0.idomekg.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;

// Define a schema for the user
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  password: String,
});

// Define a model for the user collection
const User = mongoose.model('User', userSchema);



  // Function to save user data to the database


  
  
  
  async function saveUserData(username, email, phone, password) {
      try {
          const savedUser = await User.create({
              username,
              email,
              phone,
              password,
            });
            console.log('User data saved successfully:', savedUser);
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    }
    
    // Function to verify user credentials
    async function verifyUser(username, password) {
        try {
            const user = await User.findOne({ username, password });
            return user !== null; // User found in the database if not null
        } catch (error) {
            console.error('Error verifying user:', error);
            return false; // Error occurred while verifying user
        }
    }
    
    module.exports = {
        saveUserData,
        verifyUser,
          };