import axios from 'axios';
import {SET_DAILY, SET_WEATHER, SET_HOURLY} from '../constants';

export const setWeather = (forcast) => ({
  type: SET_WEATHER,
  forcast: forcast,
})
export const setDaily = (dailyData) => ({
  type: SET_DAILY,
  daily: dailyData,
})
export const setHourly = (hourlyData) => ({
  type: SET_HOURLY,
  hourly: hourlyData,
})

//might be get all forcast;

export const getForcast = (location) => {
  window.map.setCenter(location)
  return (dispatch) => {
    axios.post('api/location',{
      latitude: location.lat, 
      longitude: location.lng,
    })
    .then(result => {
      const weather = result.data;
      const forcast = weather.currently.summary
      const hourly = weather.hourly.data;
      const daily = weather.daily.data;
      dispatch(setWeather(forcast))
      dispatch(setDaily(daily));
      dispatch(setHourly(hourly));
    })
  }
}