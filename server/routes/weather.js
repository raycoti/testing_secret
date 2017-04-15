//const DarkSkyApi = require('dark-sky-api').default; 
const axios = require('axios');
const router = require('express').Router();
const manualKey = undefined //; //manually put api Key if you dont have it as global variable;
const apiKey = manualKey || process.env.DS_API_PASSWORD;
module.exports = router;

router.post('/weather', (req, res, next) => {
  const latitude = req.body.latitude;
  const longitude = req.body.latitude;

  //const forecast = new DarkSkyApi(apiKey);
  axios.get(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`)
  .then(result => {
    const weather = result.data;
    res.send(weather).status(200)}
  )
  .catch(next)
})
//also get one for the history
router.post('/history', (req, res, next) => {
  const latitude = req.body.latitude;
  const longitude = req.body.latitude;
  const time = req.body.time;
  //const forecast = new DarkSkyApi(apiKey);
  axios.get(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude},${time}?exclude=currently,hourly`)
  .then(result => {
    const weather = result.data;
    res.send(weather).status(200)}
  )
  .catch(next)
})