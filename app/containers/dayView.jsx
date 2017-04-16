import { connect } from 'react-redux';
import React, { Component } from 'react';
import DayWeather from '../components/dayWeather';

const mapStateToProps = (state) => {
  return {
    days: state.weather.daily
  }
}

const DayView = ({days})=> {

  return (
    <div id="dayview"className="col-md-3">
    <h4>Daily</h4>
      {days && days.map((day)=>{
        return <DayWeather weather={day} />
      })}
    </div>
  )
}

export default connect(mapStateToProps,null)(DayView)