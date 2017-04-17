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
      dispatch(setCurrentChart(view))
    }
  }
}


const app = function({toggleView,view,name}){
  //turn submit button to a drop down
  return (
    <div id="main">
      <div id="forum" className="row">
        <h1>Weather Checker</h1>
        <WeatherContainer />
      </div>
          {name !== '' && <div id="headTitle" className="row"><h1>Weather in {name}</h1></div>}
        <div id="chart" className ="col-md-10">
          <div className="col-md-1">
            <h4>Data</h4>
            <div id="submitButton" className="col-md-12">
                <select onChange={(e)=> toggleView(e.target.value)} className="soflow2">
                  <option value="daily">Daily</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
          </div>
        <WeatherChart />
        <DayView />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispathToProps)(app)

