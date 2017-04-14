import axios from 'axios';
const SET_WEATHER = 'SET_WEATHER';
const SET_DAILY = 'SET_DAILY';
const SET_HOURLY = 'SET_HOURLY';
const initialState = {
  forcast: '',
  daily: [],
  hourly: [],
}


export default function(state = initialState, action){
  const newState = Object.assign({},state);
  switch (action.type){
    case SET_WEATHER:
    newState.forcast = action.forcast;
    break;
    case SET_DAILY:
    newState.daily = action.daily;
    break;
    case SET_HOURLY:
    newState.hourly = action.hourly;
    break;
    default:
      return state;
  }
  return newState;
}
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
      const hourly = weather.hourly;
      const daily = weather.daily;
      dispatch(setWeather(forcast))
      dispatch(setDaily(daily));
      dispatch(setHourly(hourly));
    })
  }
}

