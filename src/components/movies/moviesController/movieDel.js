import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const MovieDel = () => {
  return (
    <Button
      variant="contained"
      color="secondary"
      className="movie__delete btn"
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
  );
};

export default MovieDel;
