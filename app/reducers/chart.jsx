import {SET_CURRENT_CHART, SET_DAILY_CHART, SET_HOURLY_CHART, ADD_DAILY_CHART, TOGGLE_CHART_VIEW} from '../constants';
const data = [
      {name: '1492286400', low: 38.94, high: 62.42},
      {name: '1492372800', low: 47.23, high: 77.22},
      {name: '1492372800', low: 48.7, high: 48.29},
      {name: '1492372800', low: 45.25, high: 68.66},
      {name: '1492632000', low: 50.28, high: 77.81},
      {name: '1492718400', low: 53.26, high: 73.57},
]
const data2=[
      {
        name: '21:00',
        temp: 38.9
      },
      {
        name: '22:00',
        temp: 40.28
      },
      {
        name: '23:00',
        temp: 44.05
      },
      {
        name: '00:00',
        temp: 48.8
      },
      {
        name: '01:00',
        temp: 52.67
      },
      {
        name: '02:00',
        temp: 55.23
      },
      {
        name: '03:00',
        temp: 57.48
      },
      {
        name: '04:00',
        temp: 59.75
      },
      {
        name: '05:00',
        temp: 62.01
      },
      {
        name: '06:00',
        temp: 63.75
      },
      {
        name: '07:00',
        temp: 64.4
      },
      {
        name: '08:00',
        temp: 63.43
      },
      {
        name: '09:00',
        temp: 61.45
      },
      {
        name: '10:00',
        temp: 58.8
      },
      {
        name: '11:00',
        temp: 55.36
      },
      {
        name: '12:00',
        temp: 51.66
      },
      {
        name: '13:00',
        temp: 49
      },
      {
        name: '14:00',
        temp: 48.02
      },
      {
        name: '15:00',
        temp: 47.95
      },
      {
        name: '16:00',
        temp: 47.97
      },
      {
        name: '17:00',
        temp: 47.68
      },
      {
        name: '18:00',
        temp: 47.37
      },
      {
        name: '19:00',
        temp: 47.18
      },
      {
        name: '20:00',
        temp: 46.83
      },
      {
        name: '21:00',
        temp: 46.62
      },
      {
        name: '22:00',
        temp: 47.94
      },
      {
        name: '23:00',
        temp: 51.07
      },
      {
        name: '00:00',
        temp: 55.09
      },
      {
        name: '01:00',
        temp: 58.53
      },
      {
        name: '02:00',
        temp: 61.18
      },
      {
        name: '03:00',
        temp: 63.85
      },
      {
        name: '04:00',
        temp: 66.53
      },
      {
        name: '05:00',
        temp: 69.01
      },
      {
        name: '06:00',
        temp: 70.84
      },
      {
        name: '07:00',
        temp: 71.45
      },
      {
        name: '08:00',
        temp: 70.19
      },
      {
        name: '09:00',
        temp: 67.83
      },
      {
        name: '10:00',
        temp: 64.71
      },
      {
        name: '11:00',
        temp: 60.71
      },
      {
        name: '12:00',
        temp: 56.43
      },
      {
        name: '13:00',
        temp: 53.28
      },
      {
        name: '14:00',
        temp: 51.93
      },
      {
        name: '15:00',
        temp: 51.57
      },
      {
        name: '16:00',
        temp: 51.31
      },
      {
        name: '17:00',
        temp: 50.71
      },
      {
        name: '18:00',
        temp: 50.09
      },
      {
        name: '19:00',
        temp: 49.65
      },
      {
        name: '20:00',
        temp: 49.14
      },
      {
        name: '21:00',
        temp: 48.8
      }
    ]
const initialState = {
  current: 'hourly',
  daily: data,
  hourly: data,
  view: true,
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
