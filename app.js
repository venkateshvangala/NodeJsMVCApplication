'use strict';

var Promise = global.Promise || require('promise');
var express = require("express");
var pkg = require("./package.json");
var app = express();
app.use(express.static(__dirname + '/assets'));
require("./controller/routes.js")(app);

app.listen(pkg.port);
console.log("application listening on " + pkg.port + " port");
