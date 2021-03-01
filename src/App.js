import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./components/loader";
import ErrorMessage from "./components/errorBoundry";
import Movies from "./components/movies";

import { getMovies, postMovies } from "./actions";

function App() {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movieReducer.loading);
  const error = useSelector((state) => state.movieReducer.error);

  const getMovie = (event) => {
    event.preventDefault();
    dispatch(getMovies());
    setMovie("");
  };

  return (
    <main className="page__main">
      <Loader />
      <ErrorMessage />
      <Movies />
    </main>
  );
}

export default App;
