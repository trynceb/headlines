const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Connect to the database
require('./config/database');

const app = express();

// Set up CORS middleware
app.use(cors());

// Use Morgan middleware for logging
app.use(logger('dev'));

// Use JSON middleware to parse request bodies
app.use(express.json());

// Serve favicon
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// Apply checkToken middleware to all requests
app.use(require('./config/checkToken'));

// Mount the users route at /api/users
app.use('/api/users', require('./routes/api/users'));

// Serve the index.html file for all other requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Get the port number from the environment or use 3001 as a default
const port = process.env.PORT || 3001;

// Start the express app
app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});
