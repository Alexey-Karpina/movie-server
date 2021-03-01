import React from "react";

const MovieItem = () => {
  return (
    <li className="movie__item">
      <p className="movie__title">Title: {`title`}</p>
      <p className="movie__title">Release: {`release`}</p>
      <p className="movie__title">Format: {`format`}</p>
      <p className="movie__title">Stars: {`stars`}</p>
    </li>
  );
};

export default MovieItem;
