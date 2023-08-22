import * as React from "react";
import { useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Me from "../pic/me3.png";
import "animate.css";
import { useAchor } from "../Context/achorContext";


const Frontpage = () => {
  const {achor} = useAchor();


  const bonce1 = useRef(null);
  const bonce2 = useRef(null);
  const bonce3 = useRef(null);

  

  useEffect(()=>{
    const intervalId1 = setInterval(() => {
      if (bonce2.current) {
        setTimeout(() => {
          bonce1.current.classList.add('animate__animated', 'animate__fadeInDown')
        }, 0)
        setTimeout(() => {
          bonce2.current.classList.add('animate__animated', 'animate__fadeInDown')
        }, 300)
        setTimeout(() => {
          bonce3.current.classList.add('animate__animated', 'animate__fadeInDown')
        }, 500)
      }
    }, 0)

  },[])

  return (
    <Grid
      id="Frontpage"
      className=""
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid
        className="box1"
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <p id="title" className="">{achor}</p>
      </Grid>
      <Grid
        className="box2"
        container
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <p ref={bonce1}>Introduce:)</p>
        <p ref={bonce2}>Loti Chang</p>
        <p ref={bonce3}>
         嗨！我榕家啦～～ 殼以叫我西西就好ㄏ一ㄏ一<br></br>
         ( ε:)⌒ﾞ(.ω.)⌒ﾞ(:3 )
        </p>
        {/* js設定時間依序跳 */}
        <div className="">
          <img src={Me} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Frontpage;
