var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {page: "accueil" });
});

router.get('/:page', function(req, res, next) {

  if(req.params.page == "institut"){

    res.render('index_p.ejs', {page: 'institut' });

  } else {

    res.render('index.ejs', {page: req.params.page });
  }
});


router.get('/employees/statistique_agent/:number', function(req, res, next) {

  const data= fs.readFileSync("/home/pi/DEV raspberry/app/"+req.params.number+".js", {encoding:'utf8', flag:'r'})

  res.render('index.ejs', {page: "statistique_agent", data: data});
});


module.exports = router;
