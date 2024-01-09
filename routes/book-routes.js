const { Router } = require('express');
const router = Router();

const BooksController = require('../controllers/books-contoller');
const validation = require('../middlewares/validation-middleware');
const { bookSchema } = require('../controllers/validation-controller');

router.route('/books').get(BooksController.fetchBooks).post(validation(bookSchema), BooksController.createBook);
router.route('/books/:id').get(BooksController.fetchSpecificBookById);
router.route('/books/author/:author').get(BooksController.fetchSpecificBookByAuthor);
router.route('/books/title/:title').get(BooksController.fetchSpecificBookByTitle);
router.route('/books/edit/:id').patch(validation(bookSchema), BooksController.updateBook);
router.route('/books/delete/:id').delete(BooksController.deleteBook);

module.exports = router;