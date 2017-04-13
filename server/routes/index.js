const weatherRouter = require('./weather');

const router = require('express').Router();

module.exports = router;

router.use(weatherRouter);
