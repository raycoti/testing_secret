import {SELECT_LOCATION, SET_LAT_LONG, SET_SEARCHES, ADD_TO_SEARCH} from '../constants';

const initialState = {
  location: '',
  lat: 0,
  lng: 0,
  searches: [],
}

export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case SELECT_LOCATION:
    newState.location = action.location;
    break;
    case SET_LAT_LONG:
    newState.lat = action.lat;
    newState.lng = action.lng;
    break;
    case ADD_TO_SEARCH:
    newState.searches = [action.search, ...newState.searches];
    break;
    case SET_SEARCHES:
    newState.searches = action.searches;
    break;
    default:
      return state;
  }
  return newState;
}
