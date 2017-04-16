
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
    expect(formatData(dailyData,'daily')).to.eql([ { name: '04-13', high: 52.05, low: 43.94 },
  { name: '04-14', high: 57.54, low: 39.05 },
  { name: '04-15', high: 62.42, low: 38.94 },
  { name: '04-16', high: 77.22, low: 47.23 },
  { name: '04-17', high: 76.91, low: 48.7 },
  { name: '04-18', high: 68.66, low: 45.25 },
  { name: '04-19', high: 77.81, low: 50.28 },
  { name: '04-20', high: 73.57, low: 53.26 } ]
);
  });
});

describe('formats hourly', function(){
  it('formats data for hours', function(){
    expect(formatData(hourlyData, 'hourly')).to.eql([ { name: '04-14 14:00', temp: 43.94, low: 0 },
  { name: '04-14 15:00', temp: 43.06, low: 0 },
  { name: '04-14 16:00', temp: 42.1, low: 0 },
  { name: '04-14 17:00', temp: 40.96, low: 0 },
  { name: '04-14 18:00', temp: 39.87, low: 0 } ]
);
  })
})

