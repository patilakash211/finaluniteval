const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');

require('dotenv').config();

const app = express();
const userRoute = require('./src/routes/userRoutes');
const bookRoute = require('./src/routes/bookRoutes');
const googleRoute = require('./src/routes/googleAuthRoutes');
const passport = require('./src/utils/passport');

//Middlewares
app.use(bodyParser.json([]));
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);


//Routes
app.use('/users', userRoute);
app.use('/books', bookRoute);
app.use('/', googleRoute);


const db = process.env.DB_URL;

mongoose.connect(db).then(() => {
  console.log('DB connected');
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
