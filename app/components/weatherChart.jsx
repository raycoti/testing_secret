const React = require('react');
import { ResponsiveContainer,ComposedChart,Area, LineChart, Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const moment = require('moment');
const weatherChart = ({chartData,view,name})=> {
  let theData = [{}];
  if(view) theData = chartData;
  let label1="high";
  if(name==="hourly") label1="temp"
  let height = 600;
  if(window.innerHeight < 800) height=300;//mobile friendly version
  return (
    <div className="col-md-8">
    <h4>Chart</h4>
       <ResponsiveContainer  minWidth={300}  minHeight={height}>
        <ComposedChart
          data={theData}>
            <XAxis label="DATE" dataKey="name"/>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={label1} stroke="#8884d8" activeDot={{r: 2}} />
            {label1 ==="high" &&<Line type="monotone" dataKey="low" stroke="#82ca9d" />}
            </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default weatherChart;