import React from "react";
import moment from "moment"
import "./style.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



export function JumboGraph(props) {
    const chartData = props.weatherData
    const time = props.weatherData.map(data => moment(data.dt_txt).format('dddd'))
    console.log(time)
    return (
        <div className="jumbotron-fluid">
        
            <h1>Temperature Forecast for {props.city}</h1>
            <LineChart width={900} height={400} data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt"/>
                <YAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="main.temp_min" stroke="#8884d8" />
                <Line type="monotone" dataKey="main.temp_max" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}


export default JumboGraph