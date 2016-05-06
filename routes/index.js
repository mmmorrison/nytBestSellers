var express = require('express');
var router = express.Router();
var unirest = require('unirest');








/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Click To See a List of the New York Times Best Sellers' });
});

router.get('/', function(req, res, next) {
  res.send(result)
})




// var url = "https://api.nytimes.com/svc/books/v3/lists.json";
// url += '?' + $.param({
//   'api-key': "8042db3740c47e5db419e709e562c5a5:0:74024451",
//   'list': "hardcover-fiction"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// })

module.exports = router;
