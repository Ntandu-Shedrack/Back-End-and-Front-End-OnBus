const express = require('express');
const mongoose = require('mongoose');
const busesRoute = require('./routes/buses.route.js');
const cors = require('cors');
const routesRoute = require('./routes/routes.route.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use("/api/buses", busesRoute);
app.use("/api/routes", routesRoute)

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect('mongodb+srv://josantashedrack:OYecT9mZ32ojh7Af@back-end.tywzftt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Back-End')
    .then(() => {
        console.log('Connected to database');
        app.listen(5000, () => {
            console.log('Hello there, server is running');
        });
    })
    .catch(() => {
        console.log('Connection failed');
    });
