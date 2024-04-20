// import express
const express = require('express');

// create express app

const app = express();

// define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// start the server

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
