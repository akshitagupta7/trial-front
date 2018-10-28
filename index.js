var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var server = app.listen(8000, function(){
    console.log('Server listening on port 8000');
});