const express = require('express');
const bodyParser = require('body-parser');

const carController = require('./src/controller/carController');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


app.use('/api', carController);
app.listen(port, () => {
    console.log('listening on port' + ' ' + port)
})