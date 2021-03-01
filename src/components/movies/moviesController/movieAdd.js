import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";

const MovieAdd = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new movie</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Movie Title"
            type="title"
            fullWidth
          />
          <TextField
            margin="dense"
            id="release"
            label="Release Date"
            type="release"
            fullWidth
          />
          <TextField
            margin="dense"
            id="format"
            label="Movie Format"
            type="format"
            fullWidth
          />
          <TextField
            margin="dense"
            id="stars"
            label="List of Stars"
            type="stars"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="movie__submit"
            endIcon={<Icon>send</Icon>}
          >Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MovieAdd;
