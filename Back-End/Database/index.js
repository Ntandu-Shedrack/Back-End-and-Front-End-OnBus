const express = require('express');
const mongoose = require('mongoose');
const Buses = require('./models/buses.models');
const busesRoute = require('./routes/buses.route.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use("/api/buses", busesRoute.route);



app.get('/', (req, res) => {
    res.send('Hello World');
});




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