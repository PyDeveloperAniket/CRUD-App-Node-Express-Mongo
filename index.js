require('dotenv').config();
const express = require('express');
const homeRoute = require('./routers/home');
const app = express();
const db = require('./config/mongoose');
var path = require('path');

const port = process.env.port || 4000;

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));


app.use('/', homeRoute);



app.listen(port, ()=> console.log("Server is running fine."));