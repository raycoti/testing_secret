import {SET_CURRENT_CHART, SET_DAILY_CHART, SET_HOURLY_CHART, ADD_DAILY_CHART, TOGGLE_CHART_VIEW} from '../constants';
const moment = require('moment');

export const setChartView = (view) => ({
  type: TOGGLE_CHART_VIEW,
  view: view,
})
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
export const addDailyHistory = (historyData) =>({
  type: ADD_DAILY_CHART,
  daily: historyData,
})
export const formatData = (data, type) => {
  return data.map(( theData ) => {
        const timestamp = moment.unix(theData.time);
        let dataObject;
        if (type === 'daily'){
          dataObject = {
            name: timestamp.format("MM-DD"),
            high: theData.temperatureMax,
            low:  theData.temperatureMin,
          }
        }
        else if(type==='hourly') {
          dataObject = {
            name: timestamp.format("MM-DD HH:mm"),
            temp: theData.temperature,
            low:  0,
          }
        }
        return dataObject;
      })
}
export const setData = (data, type) =>{
  return (dispatch) => {
      const formatedData = formatData(data, type);
      switch (type){
          case 'daily':
          return dispatch(setDailyChart(formatedData));
          case 'hourly':
          return dispatch(setHourlyChart(formatedData));
          default:
      } 
  }
}

