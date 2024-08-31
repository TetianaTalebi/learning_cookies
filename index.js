// Creating an Express application
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/greet', (req, res) => {
    console.log(req.cookies);

    // Destructuring name from req.cookies
    // Giving default value to the name in case there is no cookie with name
    const {name = "Noname"} = req.cookies;
    res.send(`Hi there, ${name}`);
})

app.get('/setname', (req, res) => {

    // Cookies are send back as a part of a response
    res.cookie('name', 'Rosa');
    res.cookie('animal', 'cat');

    // A response itself
    res.send('Sending a cookie!');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'apple', {signed: true});
    res.cookie('vegetable', 'potato', {signed: true});
    res.send('Signed fruit and vegetable cookies!');
})

// Starting a web server and listening to the connections on the port 3000
app.listen(3000, () => {
    console.log('Serving on port 3000 !');
})