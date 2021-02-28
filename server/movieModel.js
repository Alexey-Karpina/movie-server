const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  release: {
    type: Date,
    default: Date.now,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  stars: {
    type: Array,
    required: true,
  },
});

const Movie = module.exports = mongoose.model("movie", movieSchema);

module.exports.get = (callback, limit) => {
    Movie.find(callback).limit(limit);
}