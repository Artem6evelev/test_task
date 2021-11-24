import React from "react";

import moment from "moment";

import "./sea_and_grdn-weather-chart.styles.css";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const SeaAndGrdn = ({ data }) => {
  return (
    <div>
      <div className="chart-container">
        <ResponsiveContainer width="85%" height={350}>
          <BarChart
            width={500}
            height={300}
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
                value={"Sea & Ground Level Chart"}
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
            <Bar
              type="monotone"
              name="Sea level"
              dataKey="main.sea_level"
              fill="#8884d8"
            />
            <Bar
              type="monotone"
              name="Ground Level"
              dataKey="main.grnd_level"
              fill="#82ca9d"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SeaAndGrdn;
