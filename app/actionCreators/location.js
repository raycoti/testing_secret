import axios from 'axios';
import { getForcast } from './weather';
import {setChartView} from './chart';
import {SELECT_LOCATION, SET_LAT_LONG, SET_SEARCHES, ADD_TO_SEARCH} from '../constants';

export const setLocation = (location) => ({
  type: SELECT_LOCATION,
  location: location,
})

export const setLatLong = (position) => ({
  type: SET_LAT_LONG,
  lat: position.lat,
  lng: position.lng,
})

export const addTOSearch = (name) => ({
  type: ADD_TO_SEARCH,
  search: name
})

export const setSearches = (searchesArr) => ({
  type: SET_SEARCHES,
  searches: searchesArr.reverse()
})
export const getSearches = () => {
  return (dispatch) => {
    axios.get('/api/queries')
    .then(result => {
      const searches = result.data.searches;
      dispatch(setSearches(searches));
    })
  }
}

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
