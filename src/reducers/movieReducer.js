import { Satellite } from "@material-ui/icons";

const initialState = {
  data: {},
};
const movieReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case "GET_MOVIES_REQUEST":
      state = {
        ...state,
        loading: true,
      };
      break;

    case "GET_MOVIES_SUCCESS":
      state = {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
      break;

    case "GET_WEATHER_ERROR":
      state = {
        ...state,
        error: error,
        loading: false,
        data: {},
      };
      break;
    default:
      return state;
  }
};

export default movieReducer;