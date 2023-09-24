const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { connectToDatabase } = require('./src/service/carService'); // Import the connectToDatabase function

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
app.use(cors());
app.use(limiter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Connect to the MongoDB database
connectToDatabase()
    .then(() => {
        // Routes
        app.use('/api', carController);

        // Start the Express app
        app.listen(port || 5000, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
