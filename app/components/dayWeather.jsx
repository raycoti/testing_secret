import React, { Component } from 'react';

const dayWeather = ({weather}) => {
  return (
    <div className="col-md-12">
      <p>Summary: {weather.summary} Low:{weather.temperatureMin}
      High: {weather.temperatureMax}
      </p>
    </div>
  )
}

export default dayWeather;