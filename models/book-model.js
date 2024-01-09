const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    publication: {
        type: String,
    },
    genre: {
        type: String,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('BookDetail', bookSchema);