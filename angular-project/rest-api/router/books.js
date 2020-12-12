const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { bookController, reviewController } = require('../controllers');

// middleware that is specific to this router

router.get('/', bookController.getBooks);
router.post('/', auth(), bookController.createBook);

router.get('/:bookId', bookController.getBook);
router.post('/:bookId', auth(), reviewController.createReview);
router.put('/:bookId', auth(), bookController.subscribe);
router.put('/:bookId', bookController.editBookInfo);
router.put('/:bookId/reviews/:reviewId', auth(), reviewController.editReview);
router.delete('/:bookId/reviews/:reviewId', auth(), reviewController.deleteReview);

module.exports = router
