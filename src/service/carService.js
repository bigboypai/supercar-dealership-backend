const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.CONNECTION_STRING
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getCars() {
    try {
        await client.connect();
        const db = client.db('main');
        const carsCollection = db.collection('cars');

        const cars = await carsCollection.find({}).toArray();
        return cars;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    } finally {
        client.close();
    }
}

async function getCarById(carId) {
    try {
        await client.connect();
        const db = client.db('main');
        const carsCollection = db.collection('cars');

        const car = await carsCollection.findOne({ _id: ObjectId(carId) });
        return car;
    } catch (error) {
        console.error('Error fetching car by ID:', error);
        throw error;
    } finally {
        client.close();
    }
}

module.exports = {
    getCars,
    getCarById
};
