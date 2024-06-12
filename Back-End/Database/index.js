const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.get('/', (req,res) => {
    res.send("Hello from Node API");
});

mongoose.connect("mongodb+srv://josantashedrack:YBXMy5TZsoo7z7Bc@backend.d7mqpfu.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('server is running')
    });
})
.catch(() =>{
    console.log("Connection failed!")
})