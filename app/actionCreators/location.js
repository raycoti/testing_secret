import axios from 'axios';
import { getForcast } from './weather';
import {setChartView} from './chart';
import {SELECT_LOCATION, SET_LAT_LONG} from '../constants';

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
    axios.post('/api/location', {
      name: location,
    })
    .then(result => {
      const latLong = result.data.location;
      const name = result.data.name; 
      dispatch(getForcast(latLong));
      dispatch(setLocation(name));
      dispatch(setLatLong(latLong));
      dispatch(setChartView(false));
    })
  }
}
