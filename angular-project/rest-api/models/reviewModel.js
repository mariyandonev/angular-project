const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const reviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    bookId: {
        type: ObjectId,
        ref: "Book"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Review', reviewSchema);
