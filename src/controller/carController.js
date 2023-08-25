const express = require('express');
const router = express.Router();

const carService = require('../service/carService');

router.get('/cars', async (req, res) => {
    try {
        const cars = await carService.getCars();
        res.json(cars)
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
})

router.get('/cars/:id', async (req, res) => {
    try {
        const carId = req.params.id;
        const car = await carService.getCarById(carId);

        if (car) {
            res.json(car);
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router