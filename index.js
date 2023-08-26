// Requires
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const carController = require('./src/controller/carController');

const app = express();
const port = process.env.PORT;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});


// Middleware
app.use(limiter);
app.use(cors());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


app.use('/api', carController);
app.listen(port, () => {
    console.log('listening on port' + ' ' + port)
})