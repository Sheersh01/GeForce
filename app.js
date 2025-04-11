const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/userModel');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.redirect('/login');

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.redirect('/login');
    req.user = decoded;
    next();
  });
};

// Home Route
app.get('/', async (req, res) => {
    let user = null;
  
    const { token } = req.cookies;
    if (token) {
      try {
        const decoded = jwt.verify(token, 'secretkey');
        user = await User.findOne({ email: decoded.email });
      } catch (err) {
        // invalid token, keep user as null
      }
    }
  
    res.render('index', { user });
  });
  
// Register Page
app.get('/register', (req, res) => {
  res.render('register');
});

// Register User
app.post('/create', async (req, res) => {
  const { username, password, email, age } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const createdUser = await User.create({ username, password: hash, email, age });
  const token = jwt.sign({ email }, 'secretkey');
  res.cookie('token', token);
  res.redirect('/');
});

// Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

// Login User
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send('User not found');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send('Incorrect password');

  const token = jwt.sign({ email }, 'secretkey');
  res.cookie('token', token);
  res.redirect('/');
});

// Logout
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
