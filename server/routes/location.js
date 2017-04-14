const axios = require('axios');
const router = require('express').Router();

module.exports = router;

router.post('/weather', (req, res, next) => {
  console.log('hi', req.body);
  const location = req.body.name; 
  if (!req.session.queries) req.session.queries = [];
  req.session.queries.push(location)
  console.log('past queries', req.session.queries)
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${location}`)
  .then(result => {
    const place = result.data.results[0].geometry.location;
    res.send(place).status(200)}
  )
  .catch(next)
})

