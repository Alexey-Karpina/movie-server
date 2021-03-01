import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
