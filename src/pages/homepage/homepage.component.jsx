import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MainWeatherChart from "../../components/temperature-weather_chart/temperature-weather_chart.component";
import HumidityWeatherChart from "../../components/humidity-weather_chart/humidity-weather_chart";
import SeaAndGrdn from "../../components/sea_and_grdn-weather-chart/sea_and_grdn-weather-chart.component";

import { useActions } from "../../hooks/useActions";

export const HomePage = () => {
  const { data, loading, error } = useSelector((state) => state.weather);

  const { fetchWeather } = useActions();
  useEffect(() => {
    fetchWeather("Moscow");
  }, []);

  return (
    <div>
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>No Cities was found</h1>}
        {Object.keys(data) != 0 && <MainWeatherChart data={data}></MainWeatherChart>}
        {Object.keys(data) != 0 && <HumidityWeatherChart data={data}></HumidityWeatherChart>}
        {Object.keys(data) != 0 && <SeaAndGrdn data={data}></SeaAndGrdn>} 
      </div>
    </div>
  );
};
