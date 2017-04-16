const React = require('react');
import { ResponsiveContainer,ComposedChart,Area, LineChart, Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const moment = require('moment');
const weatherChart = ({chartData,view,name})=> {
  let theData = [{}];
  if(view) theData = chartData;
  let label1="high";
  if(name==="hourly") label1="temp"
  console.log('thedata',theData[0])
  return (
    <div className="col-md-8">
    <h4>Chart</h4>
       <ResponsiveContainer  minWidth={300} height={600} minHeight={200}>
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