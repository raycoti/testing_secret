import {SET_CURRENT_CHART, SET_DAILY_CHART, SET_HOURLY_CHART} from '../constants';
const moment = require('moment');


export const setCurrentChart = (chartType) => ({
  type: SET_CURRENT_CHART,
  current: chartType,
});

export const setDailyChart = (dailyData) => ({
  type: SET_DAILY_CHART,
  daily: dailyData,
});

export const setHourlyChart = (hourlyData) => ({
  type: SET_HOURLY_CHART,
  hourly: hourlyData,
});
export const setData = (data, type) =>{
  return (dispatch) => {
      const formatedData = data.map(( theData ) => {
        var timestamp = moment.unix(theData.time);
        var name = timestamp.format("MM-DD-YYYY");
        return {
          name: name,
          high: theData.temperatureMax,
          low:  theData.temperatureMin,
        }
      })
      switch (type){
          case 'daily':
          return dispatch(setDailyChart(formatedData));
          case 'hourly':
          return dispatch(setHourlyChart(formatedData));
          default:
      } 
  }
  //{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
}
