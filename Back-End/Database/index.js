const express = require('express');
const mongoose = require('mongoose');
const Buses = require('./models/buses.models');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
  });

app.get( 'api/buses', async (req, res) => {
    try {
        const buses = await Buses.find({});
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.get( 'api/buses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const buses = await Buses.findById(id);
        res.status(200).json(buses);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.post('/api/buses', async (req, res) => {
    try {
        const buses = await Buses.create(req.body);
        res.status(200).json(buses);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


mongoose.connect('mongodb+srv://josantashedrack:7UWbRmeOBStckCHy@backend.d7mqpfu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend')
.then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
        console.log('Hello there, server is running');
    });
})
.catch(() => {
    console.log('Connection failed');
});