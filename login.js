var express = require('express');
var passport = require('passport');
//var LocalStrategy = require('passport-local');
var crypto = require('crypto');
//var db = require('../db');

/**
 * 2025 09 30 DOESNT WORK AND USE YET 
 */

var routrLogin = express.Router();

routrLogin.get('/auth', function(req, res, next) {
  
    //res.render('login-example');
    res.send('auth')
});

module.exports = routrLogin;