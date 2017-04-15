import {SET_CURRENT_CHART, SET_DAILY_CHART, SET_HOURLY_CHART} from '../constants';
const moment = require('moment');
const data = [
      {name: '1492286400', low: 38.94, high: 62.42},
      {name: '1492372800', low: 47.23, high: 77.22},
      {name: '1492459200', low: 48.7, high: 48.29},
      {name: '1492545600', low: 45.25, high: 68.66},
      {name: '1492632000', low: 50.28, high: 77.81},
      {name: '1492718400', low: 53.26, high: 73.57},
]
const initialState = {
  current: 'daily',
  daily:data,
  hourly:[],
}
export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case SET_CURRENT_CHART:
    newState.current = action.current;
    break;
    case SET_DAILY_CHART:
    newState.daily = action.daily;
    break;
    case SET_HOURLY_CHART:
    newState.hourly = action.hourly;
    break;
    default:
      return state;
  }
  return newState;
}
