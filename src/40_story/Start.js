import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button1: {
    color: "#fffef7",
    backgroundColor: "#de4d4b",
    width: "10vw",
    height: "10vh",
    fontSize: "200%",
    position: "absolute",
    left: "45%",
    top: "45%",
    "&:hover": {
      color: "#de4d4b",
      backgroundColor: "#fffef7",
    },
  },
}));

const Start = () => {
  const classes = useStyles();
  const button = useRef(null);
  useEffect(() => {
    setInterval(() => {
      button.current.classList.add("animate__bounce");
      setTimeout(() => {
        button.current.classList.remove("animate__bounce");
      }, 1000);
    }, 2000);
  }, []);
  return (
    <div>
      <Button ref={button} className={`${classes.button1} animate__animated level`}>
        Start
      </Button>
    </div>
  );
};

export default Start;
