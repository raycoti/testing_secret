import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../containers/chartContainer';
import WeatherContainer from '../containers/weatherContainer';
import DayView from '../containers/dayView';
import {setCurrentChart} from '../actionCreators/chart' 
const mapStateToProps = (state) => {
  return {
    view: state.chart.current,
  }
}

const mapDispathToProps = (dispatch)=> {
  return {
    toggleView(view){
      let newView ='daily'
      if(view ==='daily') newView ='hourly';
      dispatch(setCurrentChart(newView))
    }
  }
}


const app = function({toggleView,view}){
  return (
    <div id="main">
      <div className="row">
        <h1>Weather Checker</h1>
        <WeatherContainer />
      </div>
        <div className ="col-md-10">
          <div className="col-md-1">
            <button type="submit"
              className="btn btn-success" onClick={()=>toggleView(view)} > Toggle</button>
          </div>
          <WeatherChart />
          <DayView />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispathToProps)(app)

