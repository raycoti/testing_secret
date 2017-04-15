import { connect } from 'react-redux';
import React, {Component} from 'react';
import WeatherChart from '../components/weatherChart';

const mapStateToProps = (state) => {
  return {
    days: state.chart.daily,
    type: state.chart.current,
    hourly: state.chart.hourly,
  }
}

const ChartContainer = ({days, type, hourly}) => {
  let chartData;
  type === 'daily' ? chartData = days : chartData = hourly;

  return (
    <WeatherChart chartData={chartData} />
  )
}

export default connect(mapStateToProps,null)(ChartContainer)