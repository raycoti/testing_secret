import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../containers/chartContainer';
import WeatherContainer from '../containers/weatherContainer';
import DayView from '../containers/dayView';
const mapStateToProps = (store) => {
  return {

  }
}

const mapDispathToProps = (dispatch)=> {
  return {
     }
}


const app = function(){
  return (
    <div id="main">
      <div className="row">
        <h1>Weather Checker</h1>
        <WeatherContainer />
      </div>
        <div className ="col-md-10">
          <WeatherChart />
          <DayView />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispathToProps)(app)

