const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/Homework/Books"
);

db.Book
    .remove({})
    .then(() => db.Book.collection.insertmany(bookSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1);
    })