import {SELECT_LOCATION, SET_LAT_LONG} from '../constants';
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
