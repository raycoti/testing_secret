
var expect = require('chai').expect;

import {getPastTimes} from '../app/actionCreators/weather';
import {formatData} from '../app/actionCreators/chart';
import {dailyData, hourlyData} from '../testData/data';

describe('get times for history request', function () {
  it('get moments of previous days', function () {
    expect(getPastTimes(1496620800,4)).to.eql([ 1496188800, 1496275200, 1496361600, 1496448000, 1496534400 ]);
  });
});
describe('formats daily', function () {
  it('formats data for days', function () {
    expect(formatData(dailyData,'daily')).to.eql([ { name: '04-13',
    high: 52.05,
    low: 43.94,
    hum: 92,
    wind: 5.22,
    cloud: 58,
    rain: 80 },
  { name: '04-14',
    high: 57.54,
    low: 39.05,
    hum: 83,
    wind: 1.64,
    cloud: 25,
    rain: 56 },
  { name: '04-15',
    high: 62.42,
    low: 38.94,
    hum: 73,
    wind: 2.28,
    cloud: 1,
    rain: 8 },
  { name: '04-16',
    high: 77.22,
    low: 47.23,
    hum: 60,
    wind: 5.3,
    cloud: 16,
    rain: 0 },
  { name: '04-17',
    high: 76.91,
    low: 48.7,
    hum: 64,
    wind: 1.37,
    cloud: 51,
    rain: 6 },
  { name: '04-18',
    high: 68.66,
    low: 45.25,
    hum: 78,
    wind: 1.37,
    cloud: 46,
    rain: 11 },
  { name: '04-19',
    high: 77.81,
    low: 50.28,
    hum: 58,
    wind: 4.82,
    cloud: 20,
    rain: 0 },
  { name: '04-20',
    high: 73.57,
    low: 53.26,
    hum: 58,
    wind: 1.39,
    cloud: 49,
    rain: 16 } ]
);
  });
});

describe('formats hourly', function(){
  it('formats data for hours', function(){
    expect(formatData(hourlyData, 'hourly')).to.eql([ { name: '04-14 14:00',
    temp: 43.94,
    low: 0,
    hum: 94,
    wind: 5.13,
    cloud: 71,
    rain: 62 },
  { name: '04-14 15:00',
    temp: 43.06,
    low: 0,
    hum: 95,
    wind: 3.84,
    cloud: 79,
    rain: 56 },
  { name: '04-14 16:00',
    temp: 42.1,
    low: 0,
    hum: 95,
    wind: 2.75,
    cloud: 77,
    rain: 42 },
  { name: '04-14 17:00',
    temp: 40.96,
    low: 0,
    hum: 95,
    wind: 2.14,
    cloud: 74,
    rain: 27 },
  { name: '04-14 18:00',
    temp: 39.87,
    low: 0,
    hum: 95,
    wind: 1.76,
    cloud: 71,
    rain: 27 } ]

);
  })
})

