var express = require('express');
var people = express.Router();

function Person(name, bio, photo) {
  this.name = name;
  this.bio = bio;
  this.photo = photo;
  this.likes = likes;
}

var Dave = new Person('Dave','');
var Liz = new Person('Liz','');
var Denny = new Person('Denny','');
var Jake = new Person('Jake','');
