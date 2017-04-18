const React = require('react');
import { ResponsiveContainer, ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const weatherChart = ({chartData, view, name}) => {
  let theData = [{}];// default empty
  if (view) theData = chartData;
  let label1 = 'high';
  if (name === 'hourly') label1 = 'temp';
  let height = 600;
  if (window.innerHeight < 800) height = 300;//scale if mobile
  return (
    <div className="col-md-8">
    <h4>Chart</h4>
       <ResponsiveContainer  minWidth={300}  minHeight={height}>
        <ComposedChart
          data={theData}>
          <defs>
            <linearGradient id="humid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ee3d3d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ee3d3d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="cloud" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a1a9a4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#a1a9a4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="rain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#81e3e1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#81e3e1" stopOpacity={0} />
            </linearGradient>
             <linearGradient id="wind" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D9D6BF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#D9D6BF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis label="DATE" dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={label1} stroke="#8884d8" activeDot={{r: 2}} />
           {label1 === 'high' && <Line type="monotone" dataKey="low" stroke="#82ca9d" />}
          <Area type="monotone" dataKey="hum" stroke="#ee3d3d" fillOpacity={1} fill="url(#humid)" />
          <Area type="monotone" dataKey="wind" stroke="#D9D6BF" />
          <Area type="monotone" dataKey="cloud" stroke="#a1a9a4" fillOpacity={1} fill="url(#cloud)" />
          <Area type="monotone" dataKey="rain" stroke="#81e3e1" fillOpacity={1} fill="url(#rain)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default weatherChart;
