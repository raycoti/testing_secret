import React, { Component } from 'react';
const moment = require('moment');
const dayWeather = ({weather}) => {
  const timestamp = moment.unix(weather.time);
  const name = timestamp.format("MM-DD");
  return (
    <div className="col-md-12">
      <p>
        {name}
        <img height="42" width="42" src={`img/${weather.icon}.svg`} />
          {weather.summary} <br />
          Low: {weather.temperatureMin}°
          High: {weather.temperatureMax}°
      </p>
    </div>
  )
}

export default dayWeather;