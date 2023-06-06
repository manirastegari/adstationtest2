const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



// Handle the form submission
app.post('/register', (req, res) => {
    const { username, email, phone, password } = req.body;
    database.saveUserData(username, email, phone, password);
    res.send('User data saved successfully. Click <a href="/login.html">here</a> to proceed to login.');
  });

  // Handle the login form submission
app.post('/login',async (req, res) => {
    const { username, password } = req.body;
    const isAuthenticated = await database.verifyUser(username, password);
    if (isAuthenticated) {
      res.redirect('/addetails.html');
    } else {
      res.send('Invalid username or password. Click <a href="/login.html">here</a> to try again.');
    }
  });

// Handle the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Replace 'index.html' with your desired HTML file
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
