import React from "react";
import Infj from "../pic/infj.png";
import Entp from "../pic/entp.png";

const Intro = () => {
  return (
    <div id="Intro" className="box3">
      <div data-aos="zoom-in">
        Extraversion (E)（外向) <br></br>
        <p>
          Sensing (S)（感覺）<br></br>
        </p>
        Thinking (T)（思考）<br></br>
        Judging (J)（判斷）
      </div>
      <div data-aos="flip-left">
        <img src={Infj}></img>
      </div>
      <div data-aos="flip-right">
        <img src={Entp}></img>
      </div>
      <div data-aos="zoom-in">
        Introversion (I)（內向）<br></br>
        Intuition (N)（直覺）<br></br>
        Feeling (F)（情感）<br></br>
        Perceiving (P)（感知）
      </div>
    </div>
  );
};

export default Intro;
