import {SET_CURRENT_CHART, SET_DAILY_CHART, SET_HOURLY_CHART, ADD_DAILY_CHART, TOGGLE_CHART_VIEW} from '../constants';

const initialState = {
  current: 'daily',
  daily: [{}],
  hourly: [{}],
  view: false,
}

export default function(state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type){
    case TOGGLE_CHART_VIEW:
    newState.view = action.view;
    break;
    case SET_CURRENT_CHART:
    newState.current = action.current;
    break;
    case SET_DAILY_CHART:
    newState.daily = action.daily;
    break;
    case SET_HOURLY_CHART:
    newState.hourly = action.hourly;
    break;
    case ADD_DAILY_CHART:
    newState.daily = [...action.daily, ...newState.daily];
    break;
    default:
      return state;
  }
  return newState;
}
