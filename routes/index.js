var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var key = process.env.key;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Click To See a List of the New York Times Best Sellers' });
});
//
// router.get('/list', function (req, res, next) {
//   unirest.get('http://api.nytimes.com/svc/books/v2/lists.json?list=hardcover-fiction')
//     .end(function (results) {
//   res.render('list', {books:results.body.books})
//   })
// });

router.get('/list', function (req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v2/lists.json?list=hardcover-fiction')
    .end(function (response) {
  res.send('list', {books: response.body.results})
})
});


module.exports = router;
