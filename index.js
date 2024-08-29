// Creating an Express application
const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hey there!');
})

app.get('/setname', (req, res) => {

    // Cookies are send back as a part of a response
    res.cookie('name', 'Rosa');
    res.cookie('animal', 'cat');

    // A response itself
    res.send('Sending a cookie!');
})

// Starting a web server and listening to the connections on the port 3000
app.listen(3000, () => {
    console.log('Serving on port 3000 !');
})