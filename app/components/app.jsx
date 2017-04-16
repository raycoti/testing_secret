import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../containers/chartContainer';
import WeatherContainer from '../containers/weatherContainer';
import DayView from '../containers/dayView';
import {setCurrentChart} from '../actionCreators/chart' 
const mapStateToProps = (state) => {
  return {
    view: state.chart.current,
    name: state.location.location,
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


const app = function({toggleView,view,name}){
  return (
    <div id="main">
      <div id="forum" className="row">
        <h1>Weather Checker</h1>
        <WeatherContainer />
      </div>
          {name !== '' && <div className="row"><h2>Weather in {name}</h2></div>}
        <div id="chart" className ="col-md-10">
          <div className="col-md-1">
          <h4>Toggle</h4>
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

