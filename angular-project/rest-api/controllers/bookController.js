const { bookModel } = require('../models');
const { newReview } = require('./reviewController')

function getBooks(req, res, next) {
    bookModel.find()
        .populate('userId')
        .then(books => res.json(books))
        .catch(next);
}

function getBook(req, res, next) {
    const { bookId } = req.params;

    bookModel.findById(bookId)
        .populate({
            path : 'reviews',
            populate : {
              path : 'userId'
            }
          })
        .then(book => res.json(book))
        .catch(next);
}

function createBook(req, res, next) {
    const { bookName, bookPrice, bookAuthor, reviewText } = req.body;
    const { _id: userId } = req.user;

    bookModel.create({ bookName, bookPrice, bookAuthor, userId, subscribers: [userId] })
        .then(book => {
            newReview(reviewText, userId, book._id)
                .then(([_, updatedBook]) => res.status(200).json(updatedBook))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const bookId = req.params.bookId;
    const { _id: userId } = req.user;
    bookModel.findByIdAndUpdate({ _id: bookId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedBook => {
            res.status(200).json(updatedBook)
        })
        .catch(next);
}

module.exports = {
    getBooks,
    createBook,
    getBook,
    subscribe,
}
