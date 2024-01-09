const Book = require('../models/book-model');

const fetchBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if (!books.length) {
            return res.status(404).json({ message: 'No books found' });
        }
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const fetchSpecificBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'No book with this id' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: 'Enter a Valid ID' });
    }
}

const fetchSpecificBookByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const book = await Book.find({ title: title });
        if (!book.length) {
            return res.status(404).json({ message: 'No book with this title' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const fetchSpecificBookByAuthor = async (req, res) => {
    try {
        const author = req.params.author;
        const book = await Book.find({ author });
        if (!book.length) {
            return res.status(404).json({ message: 'No book with this author' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const bookData = await Book.create(req.body);
        if (!bookData) {
            return res.status(404).json({ message: 'Failed to Create Book' });
        }
        res.status(201).json(bookData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBookData = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedBookData) {
            return res.status(404).json({ message: 'No book with this id' });
        }
        res.status(200).json(updatedBookData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'No book with this id' });
        }
        res.status(204).json(deleteBook);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = { fetchBooks, fetchSpecificBookById, fetchSpecificBookByTitle, fetchSpecificBookByAuthor, createBook, updateBook, deleteBook };    