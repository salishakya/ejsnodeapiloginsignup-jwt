const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require ('cookie-parser');
const {requireAuth } = require ('./middleware/authmiddleware');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://localhost:27017/UserDB';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true } , () => console.log('connected to db'))
 app.listen(3000, () => console.log('listening'))

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/index', requireAuth , (req, res) => res.render('index'));
app.use(authRoutes);