const axios = require('axios');
const router = require('express').Router();

module.exports = router;

router.post('/weather', (req, res, next) => {
  console.log('hi', req.body);
  const location = req.body.name; 
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${location}`)
  .then(result => {
    console.log('lolo',result.data.results[0].geometry.location)
    res.send('hi').status(200)}
  )
  .catch(next)
})


const location = 'g'
