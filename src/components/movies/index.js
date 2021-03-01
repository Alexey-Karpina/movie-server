import React from "react";
import MovieList from "./movieList";
import MovieDel from "./moviesController/movieDel";
import MovieFind from "./moviesController/movieFind";
import MovieAdd from "./moviesController/movieAdd";

const Movies = () => {
  return (
    <section className="page__movies">
      <div className="movies__controll">
        <MovieDel />
        <MovieAdd />
        <button className="movies__sort">Sort Movies</button>
        <MovieFind />
      </div>
      <MovieList />
    </section>
  );
};

export default Movies;
