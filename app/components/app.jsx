import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getForcast} from '../reducers/weather.jsx';
const mapStateToProps = (store) => {
  return {

  }
}

const mapDispathToProps = (dispatch)=> {
  return {
    forcast(location){
      dispatch(getForcast(location))
      window.map.setCenter({lat: 20, lng: 150})
    }
  }
}

const app = function({forcast}){
  console.log('hi',window.map.setCenter);
  console.log(window.infoWindow)
  return (
    <div id="main">
      <h1>Hello</h1>
      <button onClick={()=> forcast({}) }>forcast</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispathToProps)(app)

