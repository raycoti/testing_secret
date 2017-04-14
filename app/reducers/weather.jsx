import axios from 'axios';
const SELECT_LOCATION = 'SELECT_LOCATION';
const SET_WEATHER = 'SET_WEATHER';
const initialState = {
  location: {},
  forcast: {},
}

export default function(state=initialState, action){
  const newState = Object.assign({},state);
  switch (action.type){
    case SELECT_LOCATION:
    newState.location = action.location;
    break;
    case SET_WEATHER:
    newState.forcast = action.forcast;
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
export const setLocation = (location) => ({
  type: SET_WEATHER,
  location: location,
})

export const getForcast = (location) => {
  console.log('location', location);
  return (dispatch) => {
    axios.post('api/location',{
      latitude: 43.075284, 
      longitude: -89.384318
    })
    .then(result => {
      const weather = result.data;
      dispatch(setWeather(weather))
    })
  }
}
export const getLocation = (location) => {
  console.log('where too ',location);
  return (dispatch) => {
    axios.post('/api/weather', {
      name: location,
    })
    .then(result => {
      const stuff = result.data;
      dispatch(setLocation(stuff))
    })
  }
}
