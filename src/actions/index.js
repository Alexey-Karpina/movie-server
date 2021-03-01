import axios from "axios";
import config from "config";

const API_URL = config.get("apiUrl");

const getMovies = () => {
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    return axios
      .get(API_URL)
      .then(({ data }) => {
        const { error } = data;
        if (error) throw new Error();
        dispatch({ type: "GET_MOVIES_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "GET_WEATHER_ERROR", error: error });
      });
  };
};

const postMovie = (title, release, format, stars) => {
  return (dispatch) => {
    dispatch({ type: "POST_NEW_MOVIE" });
    return axios
      .post(API_URL, { title, release, format, stars })
      .catch((error) => {
        dispatch({ type: "POST_NEW_MOVIE_ERROR", error: error });
      });
  };
};
export {
    getMovies,
    postMovie,
}
