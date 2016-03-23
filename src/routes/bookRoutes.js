var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
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

    bookRouter.route('/')
        .get(function (req,res) {
            res.render('bookListView',{
                title: 'Books',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req,res) {
            var id = req.param('id');
            res.render('bookView',{
                title: 'Books',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
}


module.exports = router;