import {SET_DAILY, SET_WEATHER, SET_HOURLY} from '../constants'

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


