"use strict";

 module.exports = function(app){
   var request = require("request")
   var expressHandlbar  = require('express-handlebars');
   var handlebars = expressHandlbar.create({
      extname: '.html',
      layoutsDir: './',
      defaultLayout: 'index'
   });

  app.set('views', './templates');
  app.set('view engine', 'handlebars');
  app.engine('handlebars', handlebars.engine);
  app.enabled('view cache');

  app.get('/', function (req, res) {
      res.render('home');
  });

  app.get('/post-list', function (req, res) {
    request('http://jsonplaceholder.typicode.com/posts', function (success, response, body) {
        res.render('post-list', {"postList": JSON.parse(body)})
    });
  });

  app.get('/comment-list', function (req, res) {
    request('http://jsonplaceholder.typicode.com/comments', function (success, response, body) {
      res.render('comments-list', {"commentList": JSON.parse(body)})
    });
  });

  app.get('/albums-list', function (req, res) {
    request('http://jsonplaceholder.typicode.com/albums', function (success, response, body) {
      res.render('albums-list', {"albumsList": JSON.parse(body)})
    });
  });

  app.get('/photos-list', function (req, res) {
    request('http://jsonplaceholder.typicode.com/photos', function (success, response, body) {
      var test = JSON.parse(body);
      test.length = 12;
      res.render('photos-list', {"photosList": test})
    });
  });

  app.get('/todo-list', function (req, res) {
    request('http://jsonplaceholder.typicode.com/todos', function (success, response, body) {
      res.render('todo-list', {"todoList": JSON.parse(body)})
    });
  });

  app.get('/user-list', function (req, res) {
    request('http://jsonplaceholder.typicode.com/users', function (success, response, body) {
      res.render('user-list', {"userList": JSON.parse(body)})
    });
  });

};
