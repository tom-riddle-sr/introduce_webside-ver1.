import React, { useRef, useState } from "react";
import Road from "../pic/road.png";
import Car from "../pic/car.png";
import Prelay from "../pic/prelay.png";
import Runleft from "../pic/runleft.svg";
import Runright from "../pic/runright.svg";
import Laying from "../pic/laying.png";

const Goal = () => {
  const car = useRef(null);

  const [carSwitch, setCarSwitch] = useState("");

  const [disappear1, setDisappear1] = useState(false);
  const [disappear2, setDisappear2] = useState(false);
  const [disappear3, setDisappear3] = useState(false);
  const [disappear4, setDisappear4] = useState(false);
  const [disappear5, setDisappear5] = useState(false);
  const [disappear6, setDisappear6] = useState(false);
  const [disappear7, setDisappear7] = useState(false);
  const [disappear8, setDisappear8] = useState(false);
  const [disappear9, setDisappear9] = useState(false);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  const CarMove = () => {
    const carClass = car.current.classList;

    if (!carClass.contains("first_spot")) {
      carClass.add("first_spot");
      setTimeout(() => {
        setDisappear1(true);
        text1.current.classList.add("fadein")

      }, 2500);
      setTimeout(() => {
        setDisappear1(false);
        setDisappear2(true);

      }, 3000);
      setTimeout(() => {
        setDisappear2(false);
        setDisappear3(true);
      }, 3500);
    } else if (!carClass.contains("second_spot")) {
      carClass.add("second_spot");
      setDisappear3(false);
      setTimeout(() => {
        setDisappear4(true);
        text2.current.classList.add("fadein")
      }, 2500);
      setTimeout(() => {
        setDisappear4(false);
        setDisappear5(true);
      }, 3000);
      setTimeout(() => {
        setDisappear5(false);
        setDisappear6(true);
      }, 3500);
    } else if (!carClass.contains("third_spot")) {
      carClass.add("third_spot");
      setDisappear6(false);
      setTimeout(() => {
        setDisappear7(true);
        text3.current.classList.add("fadein")

      }, 2500);
      setTimeout(() => {
        setDisappear7(false);
        setDisappear8(true);
      }, 3000);
      setTimeout(() => {
        setDisappear8(false);
        setDisappear9(true);
      }, 3500);
    }
  };
  return (
    <div id="Goal" className="box8">
      <img src={Road}></img>
      <img ref={car} src={Car}></img>

      {disappear1 && <img src={Runright} className="runright1"></img>}
      {disappear2 && <img src={Prelay} className="prelay1"></img>}
      {disappear3 && <img src={Laying} className="laying1"></img>}

      {disappear4 && <img src={Runleft} className="runright2"></img>}
      {disappear5 && <img src={Prelay} className="prelay2"></img>}
      {disappear6 && <img src={Laying} className="laying2"></img>}

      {disappear7 && <img src={Runright} className="runright3"></img>}
      {disappear8 && <img src={Prelay} className="prelay3"></img>}
      {disappear9 && <img src={Laying} className="laying3"></img>}

      <div className="line1">short-term goals</div>
      <div className="line2">medium-term goals</div>
      <div className="line3">long-term goals</div>
      <div ref={text1}  className="text1">
        熟悉前端工作<br></br>法文檢定
      </div>
      <div ref={text2} className="text2">
        獨立開發完整的一個APP<br></br>街頭藝人
      </div>
      <div ref={text3} className="text3">
        去法國一段時間<br></br>養貓
      </div>
      <div className="click1" onClick={CarMove}></div>
      <div className="click2"></div>
    </div>
  );
};

export default Goal;
