const express = require('express');

const app = express();

const middleware = require('../Middleware/middleware');
const {
  allBooks,
  createBooks,
  createComments,
} = require('../controllers/book.controller');

app.get('/:id', allBooks);
app.post('/upload', middleware, createBooks);
app.post('/upload', middleware, createComments);


module.exports = app;
