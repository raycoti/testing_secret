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
       <ResponsiveContainer width='100%' height={600}>
        <ComposedChart
          width={1000}
          height={600}
          data={theData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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