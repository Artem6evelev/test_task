import React from "react";

import moment from "moment";

import "./temperature-weather_chart.styles.css";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";

const MainWeatherChart = ({ data }) => {
  return (
    <div>
      <div className="title">
        <h1>Your City: {data.city.name}</h1>
        <h2>5 Days weather forecast</h2>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="85%" height={350}>
          <LineChart
            data={data.list}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid horizontal="true" vertical="" />
            <XAxis
              dataKey="dt_txt"
              tickFormatter={(time) => moment(time).format("DD/MM")}
            />
            <YAxis>
              <Label
                value={"Temperature & Humidity Chart"}
                position="left"
                angle={-90}
                style={{ textAnchor: "middle", fontSize: "18px" }}
              />
            </YAxis>
            <Tooltip
              labelFormatter={(time) => moment(time).format("DD/MM HH:MM")}
              formatter={(value) => `${Math.round(value, 2)}`}
            />
            <Legend />
            <Line
              name="Temperature"
              unit={"°C"}
              type="monotone"
              dataKey="main.temp"
              stroke="#0000FF"
              dot={false}
            />
            <Line
              type="monotone"
              name="Feels like"
              unit={"°C"}
              dataKey="main.feels_like"
              stroke="#FF8C00"
              dot={false}
            />
            <Line
            type="monotone"
            name="humidity"
            unit={"°C"}
            dataKey="main.humidity"
            stroke="#87CEFA"
            dot={{ r: 8 }}
          />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MainWeatherChart;
