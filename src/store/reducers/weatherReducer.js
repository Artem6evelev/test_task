export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { loading: true, error: null, data: {} };
    case FETCH_WEATHER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FETCH_WEATHER_ERROR:
      return { loading: false, error: action.payload, data: {} };
    default:
      return state;
  }
};
