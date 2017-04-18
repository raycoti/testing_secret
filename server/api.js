'use strict'
const api = require('express').Router()
//const db = require('../db') if we want a database;
const routers = require('./routes');

api.get('/hello', (req, res) => res.send({hello: 'world'}))
api.use(routers);
module.exports = api
