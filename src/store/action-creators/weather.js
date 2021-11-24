import axios from "axios";
import {
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from "../reducers/weatherReducer";

const REACT_APP_API_KEY = "1c25172526330ec5d880f43f77fa130e";

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_WEATHER });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=eng&appid=${REACT_APP_API_KEY}`
        );
      console.log(response);

      dispatch({ 
        type: FETCH_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_WEATHER_ERROR,
        payload: "Oh no something goes wrong",
      });
    }
  };
};
