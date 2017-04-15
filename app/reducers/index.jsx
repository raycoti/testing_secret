import { combineReducers } from 'redux';
import weatherReducer from './weather';
import locationReducer from './location';
import chartReducer from './chart';
export default combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  chart: chartReducer,
})
