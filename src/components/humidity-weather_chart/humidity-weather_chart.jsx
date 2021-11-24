import React from "react";

import moment from "moment";

import "./humidity-weather_chart.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend
} from "recharts";

const HumidityWeatherChart = ({ data }) => {
  return (
    <div>
      <div className="chart-container">
        <ResponsiveContainer width="85%" height={350}>
          <AreaChart
            width={500}
            height={400}
            data={data.list}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="dt_txt"
              tickFormatter={(time) => moment(time).format("DD/MM")}
            />
            <YAxis>
              <Label
                value={"Humidity Chart"}
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
            <Area
              type="monotone"
              name="humidity"
              dataKey="main.humidity"
              stackId="1"
              stroke="#87CEFA"
              fill="#87CEFA"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HumidityWeatherChart;
