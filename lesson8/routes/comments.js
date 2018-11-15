const express = require('express');
const CommentModel = require('../models/comments');

let router = express.Router();

router.get('/', function(req, res, next){
    CommentModel.find({}, {_id: false}, function(err, items){
        if(err){
            return next(err);
        }
        res.json(items);
    });
});

module.exports = router;