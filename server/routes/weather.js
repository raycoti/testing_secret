//const DarkSkyApi = require('dark-sky-api').default; 
const axios = require('axios');
const router = require('express').Router();
const manualKey = undefined; //manually put api Key if you dont have it as global variable;
const apiKey = manualKey || process.env.DS_API_PASSWORD;
module.exports = router;

router.post('/location', (req, res, next) => {
  console.log('hi', req.body);
  const latitude = req.body.latitude;
  const longitude = req.body.latitude;

  //const forecast = new DarkSkyApi(apiKey);
  axios.get(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`)
  .then(result => {
    console.log('hidfad',result.data.currently)
    res.send('hi').status(200)}
  )
  .catch(next)
})
