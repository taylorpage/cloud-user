const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Routes
const users = require('./api/routes/user-routes');
const affiliates = require('./api/routes/affiliate-routes');

// Create express app
const app = express();

// Mixins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Router URLs
app.use('/api/v1/users', users);
app.use('/api/v1/affiliates', affiliates);

module.exports = app;
