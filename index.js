const express = require('express');
const app = express();
const morgan = require('morgan');
const cats = require('./cats');
// 3rd party middleware morgan will log req info on every call
app.use(morgan('dev'));

// "custom" defined middleware
app.use('/dogs', (req, res, next) => {
  console.log('Wow middlewareZ on your dogs page!');
  next();
});

// more middleware that will run for every req
app.use((req, res, next) => {
  console.log('Wow more middlewareZ everywhereZ!');
  next();
});

app.use('/cats', cats);

app.get('/', (req, res) => {
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF WOOF!');
});

app.listen(3000, () => {
  console.log('App is running on localhost:3000');
});
