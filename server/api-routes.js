const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "Api its wotking",
    message: "Welcome to MovieServer crafted with love!",
  });
});

const movieController = require("./movieController");

router.route('/movies').get(movieController.index).post(movieController.new);

router.route('/movies/:_id').get(movieController.view).delete(movieController.delete);


module.exports = router;