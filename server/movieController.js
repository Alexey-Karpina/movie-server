const Movie = require("./movieModel");

exports.index = (req, res) => {
  Movie.get((err, movies) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Movies retrieved successfully",
      data: movies,
    });
  });
};

exports.new = (req, res) => {
  const movie = new Movie();
  movie.title = req.body.title ? req.body.title : movie.title;
  movie.release = req.body.release;
  movie.format = req.body.format;
  movie.stars = req.body.stars;

  movie.save((err) => {
    if (err) {
      res.json(err);
    }
    res.json({
      message: "New movie created!",
      data: movie,
    });
  });
};

exports.view = (req, res) => {
  Movie.findById(req.params.movie_id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Movie details loading ...",
      data: movie,
    });
  });
};

exports.delete = (req, res) => {
  Movie.remove(
    {
      _id: req.params.movie_id,
    },
    (err, movie) => {
      if (err) {
        res.send(err);
      }
      res.json({
        status: "success",
        message: "Movie deleted",
      });
    }
  );
};
