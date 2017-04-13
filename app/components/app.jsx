import React, { Component } from 'react';
import {connect} from 'react-redux';

import WeatherContainer from './weatherContainer';
const mapStateToProps = (store) => {
  return {

  }
}

const mapDispathToProps = (dispatch)=> {
  return {
     }
}


const app = function({forcast}){
  console.log('hi',window.map.setCenter);
  console.log(window.infoWindow)
  return (
    <div id="main">
      <h1>Hello</h1>
     <WeatherContainer />
    </div>
  )
}

export default connect(mapStateToProps, mapDispathToProps)(app)

