import axios from 'axios';
import {getForcast} from './weather';
const SELECT_LOCATION = 'SELECT_LOCATION';
const SET_LAT_LONG = 'SET_LAT_LONG';
const initialState = {
  location: '',
  lat: 0,
  lng: 0,
}

export default function(state = initialState, action){
  const newState = Object.assign({},state);
  switch (action.type){
    case SELECT_LOCATION:
    newState.location = action.location;
    break;
    case SET_LAT_LONG:
    newState.lat = action.lat;
    newState.lng = action.lng;
    break;
    default:
      return state;
  }
  return newState;
}

export const setLocation = (location) => ({
  type: SELECT_LOCATION,
  location: location,
})

export const setLatLong = (position) =>({
  type: SET_LAT_LONG,
  lat: position.lat,
  lng: position.lng,
})

export const getLocation = (location) => {
  return (dispatch) => {
    axios.post('/api/weather', {
      name: location,
    })
    .then(result => {
      const latLong = result.data;
      dispatch(getForcast(latLong));
      dispatch(setLocation(location));
    })
  }
}