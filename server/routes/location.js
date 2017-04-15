const axios = require('axios');
const router = require('express').Router();

module.exports = router;

router.post('/location', (req, res, next) => {
  const location = req.body.name; 
  if (!req.session.queries) req.session.queries = [];
  req.session.queries.push(location)
  console.log('past queries', req.session.queries)
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${location}`)
  .then(result => {
    console.log(result.data.results[0]);
    const place = result.data.results[0].geometry.location;
    const name = result.data.results[0].formatted_address;
    res.send({location: place, name: name}).status(200)}
  )
  .catch(next)
})

router.get('/queries', (req, res, next) => {
  if (!req.session.queries) req.session.queries = [];
  res.send(req.session.queries).status(200)
})
