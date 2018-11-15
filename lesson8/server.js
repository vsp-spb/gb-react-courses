const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const routePosts = require('./routes/posts');
const routeUsers = require('./routes/users');
const routeComments = require('./routes/comments');

mongoose.connect('mongodb://localhost:27017/blog');

let app = express();
app.set('view engine', 'html');

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.use(express.static(__dirname + '/dist'));

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use('/api/posts', routePosts);
app.use('/api/users', routeUsers);
app.use('/api/comments', routeComments);

app.use(function(req, res, next){
    let error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.use(function(error, req, res){
    res.status(error.status || 500);
    res.json({
        message: error.message,
        error
    });
});

app.listen(8082, function(){
    console.log('Server works');
});