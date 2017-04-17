import axios from 'axios';
import {SET_DAILY, SET_WEATHER, SET_HOURLY} from '../constants';
import {setLocation} from './location';
import {setData, formatData, addDailyHistory, setChartView} from './chart';
export const setWeather = (forcast) => ({
  type: SET_WEATHER,
  forcast: forcast,
})
export const setDaily = (dailyData) => ({
  type: SET_DAILY,
  daily: dailyData,
})
export const setHourly = (hourlyData) => ({
  type: SET_HOURLY,
  hourly: hourlyData,
})
const formatHistory = (historyData)=> {
  return historyData.map(arr=>{
    return arr[0];
  })
}
export const getPastTimes = (currentTime, days) => {
  const newTimes = [];
  for(var i=1; i <= days+1; i++){
    newTimes.push(currentTime-(i*86400))
  }
  return newTimes.reverse();

}

export const getHistoryForcast = (location, times) => {
  return (dispatch) => {const newData = times.map(time => {
      return axios.post('api/history',{
        latitude: location.lat, 
        longitude: location.lng,
        time: time,
      })
      .then(result => {
        const weather = result.data;
        const daily = weather.daily.data
        return daily;
      })
    })
    Promise.all(newData).then(values => {
      const theData= formatHistory(values);
      const newData = formatData(theData,'daily');
      dispatch(addDailyHistory(newData))
      dispatch(setChartView(true));
    })}
}

const setImageMap = (forcast) => {
   window.infoWindow.setContent(`<IMG BORDER="0" ALIGN="Left" SRC="img/${forcast.icon}.svg">  Forcast: ${forcast.summary} 
   temp:${forcast.temperature}`);
}
export const getForcast = (location) => {
  window.map.setCenter(location)
  window.infoWindow.setPosition(location);
  return (dispatch) => {
    axios.post('api/weather', {
      latitude: location.lat,
      longitude: location.lng,
    })
    .then(result => {
      const weather = result.data;
      const forcast = weather.currently.summary;
      setImageMap(weather.currently);
      const hourly = weather.hourly.data;
      const daily = weather.daily.data;
      const currentTime = daily[0].time;
      const myPromisses = [
      dispatch(setWeather(forcast)),
      dispatch(setDaily(daily)),
      dispatch(setHourly(hourly)),
      dispatch(setData(daily, 'daily')),
      dispatch(setData(hourly, 'hourly')),
      ];
      Promise.all(myPromisses).then(()=>{
        const testTimes = getPastTimes(currentTime, 2);
        dispatch(getHistoryForcast(location, testTimes))
      });

      })
  }
}



