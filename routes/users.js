var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../mongo/test.js');


/* GET users listing. */
router.post('/save', function(req, res, next) {
    var context = {
        username : req.body.username,
        password : req.body.password
    };

    db.save(context,function(){
        res.send({responseCode:0,responseMsg:'注册成功'})
    },function(err){
        res.send(err)
    })
});

router.post('/save2', function(req, res, next) {
    var context = {
        username : req.body.username,
        password : req.body.password
    };
    console.log(context)
    if(!req.body.username||!req.body.username){
        res.send({responseCode:1,responseMsg:'用户名或密码不能为空'})
    }else {
        db.find({username: req.body.username}, function (data) {
            if (data && data.length > 0) {
                console.log(data)
                res.send({responseCode: 1, responseMsg: '用户名已占用'})
            } else {
                db.save(context, function () {
                    res.send({responseCode: 0, responseMsg: '注册成功'})
                }, function (err) {
                    res.send(err)
                })
            }
        })
    }

});

router.get('/login', function(req, res, next) {
    res.render('login');
});

module.exports = router;
