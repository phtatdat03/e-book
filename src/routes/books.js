const express = require('express');
const router = express.Router();

const bookController = require('../controllers/BookController');

router.get('/get', bookController.getBook);
router.get('/getTitle', bookController.getBookByTitle);
router.post('/save', bookController.saveBook);
router.get('/:id', bookController.getBookId);
router.get('/slug/:slug', bookController.getBookBySlug);
router.put('/update/:id', bookController.updateBook);
router.delete('/delete/:id', bookController.deleteBook);

module.exports = router;