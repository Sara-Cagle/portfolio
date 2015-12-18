"use strict"
let express = require('express');
let app = express();
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');
let http = require("http");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'/site/public')))

app.use('/', function(req, res, next) {
	res.sendFile(path.join(__dirname,'/site/index.html'))
}) ;

app.set("port", 3000);
http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
