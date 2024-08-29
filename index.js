// Creating an Express application
const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hey there!');
})

// Starting a web server and listening to the connections on the port 3000
app.listen(3000, () => {
    console.log('Serving on port 3000 !');
})