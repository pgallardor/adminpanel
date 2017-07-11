var express = require('express');
var router = express.Router();
var User = require('../models/creator');
var Project = require('../models/project');

/* GET home page. */
router.get('/', function(req, res, next) {
  Project.find( function (err, docs) {
      res.render('index', {to_review: docs});
  })
});

router.get('/information/:id', function (req, res, next) {
    Project.findById(req.params.id, function (err, docs) {
        User.findOne({'userId': docs.clientId}, function (err, uinfo) {
            console.log(docs);
            console.log(uinfo);
            res.render('details', {uinfo: uinfo, pinfo: docs});
        })

    })
});

router.post('/accept/:id', function (req, res, next) {
    Project.findOneAndUpdate({_id: req.params.id}, {$set: {accepted: true}}, {upsert: true}, function (err, doc) {
        if (err) return res.send(500, {error: err});
        res.redirect('/');
    })
});

router.post('/reject/:id', function (req, res, next) {
    Project.remove({_id: req.params.id}, function (err) {
        if (!err)
            res.redirect('/');
        else
            console.log(err);
    })
});


module.exports = router;
