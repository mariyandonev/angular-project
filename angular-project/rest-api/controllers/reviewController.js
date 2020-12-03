const { userModel, bookModel, reviewModel } = require('../models');

function newReview(text, userId, bookId) {
    return reviewModel.create({ text, userId, bookId })
        .then(book => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { reviews: book._id }, $addToSet: { books: bookId } }),
                bookModel.findByIdAndUpdate({ _id: bookId }, { $push: { reviews: book._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })
}

function getLatestReviews(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    reviewModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('bookId userId')
        .then(reviews => {
            res.status(200).json(reviews)
        })
        .catch(next);
}

function createReview(req, res, next) {
    const { bookId } = req.params;
    const { _id: userId } = req.user;
    const { reviewText } = req.body;

    newReview(reviewText, userId, bookId)
        .then(([_, updatedBook]) => res.status(200).json(updatedBook))
        .catch(next);
}

function editReview(req, res, next) {
    const { reviewId } = req.params;
    const { reviewText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the review.ts, the review.ts will not be updated
    reviewModel.findOneAndUpdate({ _id: reviewId, userId }, { text: reviewText }, { new: true })
        .then(updatedReview => {
            if (updatedReview) {
                res.status(200).json(updatedReview);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteReview(req, res, next) {
    const { reviewId, bookId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        reviewModel.findOneAndDelete({ _id: reviewId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { reviews: reviewId } }),
        bookModel.findOneAndUpdate({ _id: bookId }, { $pull: { reviews: reviewId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function like(req, res, next) {
    const { reviewId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    reviewId.updateOne({ _id: reviewId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getLatestReviews,
    newReview,
    createReview,
    editReview,
    deleteReview,
    like,
}
