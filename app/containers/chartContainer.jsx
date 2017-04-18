import { connect } from 'react-redux';
import React, {Component} from 'react';
import WeatherChart from '../components/weatherChart';

const mapStateToProps = (state) => {
  return {
    days: state.chart.daily,
    type: state.chart.current,
    hours: state.chart.hourly,
    view: state.chart.view,
  }
}

const ChartContainer = ({days, type, hours, view}) => {
  let chartData;
  type === 'daily' ? chartData = days : chartData = hours;
  //turn to switch/case for more options
  return (
    <WeatherChart view={view} name={type} chartData={chartData} />
  )
}

export default connect(mapStateToProps, null)(ChartContainer)
