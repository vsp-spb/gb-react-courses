const express = require('express');
const UserModel = require('../models/users');

let router = express.Router();

router.get('/', function(req, res, next){
    UserModel.find({}, {_id: false}, function(err, items){
        if(err){
            return next(err);
        }
        res.json(items);
    });
});

router.get('/:id', function(req, res, next){
    let id = req.params.id;
    UserModel.findOne({id: id}, {_id: false}, function(err, item){
        if(err){
            return next(err);
        }
        res.json(item);
    });
});

module.exports = router;