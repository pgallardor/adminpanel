var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/creator');
var Project = require('../models/project');

/*ERASE BEFORE USING ON SERVER*/
/*router.get('/', function (req, res) {
    res.redirect('/admin');
});*/

router.get('/admin/login', loggedOut, function (req, res) {
    var messages = req.flash('error');
    res.render('user/login', {messages: messages, hasErrors: messages.length > 0});
});

router.post('/admin/login', loggedOut, passport.authenticate('local-login', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',
    failureFlash: true
}));

router.use('/', loggedIn, function (req, res, next) {
    next();
});

/* GET home page. */
router.get('/admin', function(req, res) {
  Project.find( function (err, docs) {
      res.render('index', {to_review: docs});
  })
});

router.get('/admin/information/:id', function (req, res) {
    Project.findById(req.params.id, function (err, docs) {
        User.findById(docs.by, function (err, uinfo) {
            console.log(docs);
            console.log(uinfo);
            res.render('details', {uinfo: uinfo, pinfo: docs});
        })

    })
});

router.get('/admin/messages', function (req, res) {
    res.render('messages', {hello: 'You have no messages'});
});

router.post('/admin/accept/:id', function (req, res) {
    Project.findOneAndUpdate({_id: req.params.id}, {$set: {status: 1}}, {upsert: true}, function (err, doc) {
        if (err) return res.send(500, {error: err});
        res.redirect('/');
    })
});

router.post('/admin/reject/:id', function (req, res, next) {
    Project.remove({_id: req.params.id}, function (err) {
        if (!err)
            res.redirect('/');
        else
            console.log(err);
    })
});

router.post('/admin/review/:id', function (req, res) {
    Project.findOneAndUpdate({_id: req.params.id}, {$set: {status: 0}}, {upsert: true}, function (err, doc) {
        if (err) {
            console.log(err);
            return res.send(500, {error: err});
        }
        res.redirect('/admin/write_message/' + doc.name + '/' + doc.byUser);
    })
})

router.get('/admin/users', function (req, res) {
    User.find( function (err, user) {
        res.render('users', {users: user});
    })
})

router.get('/admin/write_message/:project/:username', function (req, res){
   var data = {
       pname: req.params.project,
       username: req.params.username
   };
        res.render('write_message', {details: data});
});

router.get('/admin/add_admin', function (req, res) {
   var messages = req.flash('error');
   res.render('user/add_admin', {messages: messages, hasErrors: messages.length > 0});
});

router.post('/admin/add_admin', passport.authenticate('local-signup', {
    successRedirect: '/admin',
    failureRedirect: '/admin/add_admin',
    failureFlash: true
}));

router.get('/admin/logout', function (req, res) {
    req.logout();
    res.redirect('/admin/login');
})

module.exports = router;

function loggedIn(req, res, next){
    if (req.isAuthenticated())
        return next();

    res.redirect('/admin/login');
}

function loggedOut(req, res, next) {
    if (!req.isAuthenticated())
        return next();

    res.redirect('/admin');
}