import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Plane from "../pic/plane.png";
import Arrow from "../pic/arrow.png";
import Sun from "../pic/sun.png";

const locate = () => {
  const arrow_pic = useRef(null);
  useEffect(() => {
    setInterval(() => {
      arrow_pic.current.classList.add("animate__fadeInLeft");
      setTimeout(() => {
        arrow_pic.current.classList.remove("animate__fadeInLeft");
      },500);
    }, 1000);
  }, []);
  return (
    <Grid container id="Locate" className="box4" direction="column">
      <Grid
        container
        className="box5"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          className=""
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Plane} alt="Plane"></img>
        </Grid>

        <Grid
          className=""
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <img
            ref={arrow_pic}
            className="animate__animated"
            src={Arrow}
            alt="Arrow"
          ></img>
        </Grid>

        <Grid
          className=""
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Sun} alt="Sun"></img>
        </Grid>
      </Grid>
      <Grid
        container
        className="box6"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <p>Taoyuan</p>
        <p>Taichung</p>
      </Grid>
      <Grid
        container
        className="box7"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <p>桃園</p>
        <p>台中</p>
      </Grid>
    </Grid>
  );
};

export default locate;
