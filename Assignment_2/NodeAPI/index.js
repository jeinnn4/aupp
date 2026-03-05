const express = require('express');
const app = express();

app.use(express.json());

app.get('/search', (req, res) => {
    res.send("<html><body><h1>INSIDE SEARCH API</h1></body></html>");
});

app.get('/view', (req, res) => {
    res.send("<html><body><h1>INSIDE VIEW API</h1></body></html>");
});

app.listen(5000, () => {
    console.log('Server is running on port No: 5000');
});