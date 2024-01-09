const express = require('express');
const app = express();
const cors = require('cors');

const bookRoutes = require('./routes/book-routes');

var corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PUT, PATCH, DELETE, HEAD',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json()); 

app.use('/api/v1', bookRoutes);

module.exports = app;