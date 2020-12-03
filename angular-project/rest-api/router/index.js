const router = require('express').Router();
const users = require('./users');
const books = require('./books');
const reviews = require('./reviews');
const likes = require('./likes');
const test = require('./test');

router.use('/users', users);
router.use('/books', books);
router.use('/reviews', reviews);
router.use('/likes', likes);
router.use('/test', test);

module.exports = router;
