const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  console.log('GET /')
  res.send('<h1>Hello! Welcone to Express to Vercel Deployment</h1>');
});

// v1 api routes
app.use('/v1', router);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.send(new Error('NOT_FOUND', 'Not found'));
});

module.exports = app;
