const router = require('express').Router();
const booksController = requrie('../../controllers/bookController');

router.route('/')
.get(booksController.findAll)
.post(booksController.create);

router
    .route('/:id')
    .get(booksController.findById)
    .put(booksController.update)
    .delete(books.Controller.remove)
module.exports = router;