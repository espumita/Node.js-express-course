var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'title1',
        genre: 'genre1',
        author: 'author1',
        read: false
    },
    {
        title: 'title2',
        genre: 'genre2',
        author: 'author2',
        read: false
    },
    {
        title: 'title3',
        genre: 'genre3',
        author: 'author3',
        read: false
    },
    {
        title: 'title4',
        genre: 'genre4',
        author: 'author4',
        read: false
    },
    {
        title: 'title5',
        genre: 'genre5',
        author: 'author5',
        read: false
    }
];

var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    });
            });
        });

    return adminRouter;
};

module.exports = router;