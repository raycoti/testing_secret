const weatherRouter = require('./weather');
const locationRouter = require('./location');
const router = require('express').Router();

module.exports = router;

router.use(weatherRouter);
router.use(locationRouter);
