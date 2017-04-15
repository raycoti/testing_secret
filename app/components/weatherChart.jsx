const React = require('react');
import { ResponsiveContainer,ComposedChart,Area, LineChart, Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const moment = require('moment');
const weatherChart = ({chartData,view})=> {
  let theData = [{}];
  if(view) theData = chartData;
  return (
    <div className="col-md-9">
       <ResponsiveContainer width='100%' height={600}>
        <ComposedChart
          width={1000}
          height={600}
          data={theData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="high" stroke="#8884d8" activeDot={{r: 2}}/>
            <Line type="monotone" dataKey="low" stroke="#82ca9d" />
            </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default weatherChart;