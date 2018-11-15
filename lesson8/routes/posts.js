const express = require('express');
const PostModel = require('../models/posts');
const CommentModel = require('../models/comments');

let router = express.Router();

router.get('/', function(req, res, next){
    PostModel.find({}, {_id: false}, function(err, posts){
        if(err){
            return next(err);
        }
        res.json(posts);
    });
});

router.get('/:postId', function(req, res, next){
    let postId = req.params.postId;
    PostModel.findOne({id: postId}, {_id: false}, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});

router.post('/', function(req, res, next){
    PostModel.create(req.body, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});

router.put('/:postId', function(req, res, next){
    let postId = req.params.postId;
    PostModel.findOneAndUpdate({id: postId}, {title: req.body.title, body: req.body.body}, {new: true}, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});

router.delete('/:postId', function(req, res, next){
    let postId = req.params.postId;
    PostModel.remove({id: postId}, function(err){
        if(err){
            return next(err);
        }
        res.json(postId);
    });
});

router.get('/:postId/comments', function(req, res, next){
    let postId = req.params.postId;
    CommentModel.find({postId: postId}, {_id: false}, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});

module.exports = router;