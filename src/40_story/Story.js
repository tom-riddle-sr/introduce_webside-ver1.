import React, { useState } from "react";
import Skateboard from "../pic/skateboard.png";
import Basketball from "../pic/basketball.png";
import Guitar from "../pic/guitar.png";
import Mountain from "../pic/mountain.png";
import Mountain1 from "../pic/2-1.png";
import Mountain2 from "../pic/2-2.png";
import Podcast from "../pic/podcast.png";
import Climbing from "../pic/climbing.png";
import Coffee from "../pic/coffee.png";
import Book from "../pic/book.png";
import Walk from "../pic/walk.png";
import Modal from "./Modal";
import Start from "./Start";

const Story = () => {
  const [modalSwitch, setModalSwitch] = useState(false);
  const [name, setName] = useState([]);
  // const [pauseSwitch, setPauseSwitch] = useState(false);
  // const aa = () => {
  //   setPauseSwitch((pauseSwitch) => !pauseSwitch);
  // };
  const modelbox = (value1, value2) => {
    setModalSwitch(true);
    setName([value1, value2]);
  };

  return (
    <div id="Story" className="layout_row">
      {/* <Start /> */}
      {modalSwitch && <Modal name={name} setModalSwitch={setModalSwitch}/>}
      <div className="layout_column item">
        <div
          className="slot"
          onClick={() => {
            modelbox("Skateboard","Skateboard 滑板");
          }}
        >
          <img src={Skateboard}></img>
        </div>
        <div
          className="slot"
          onClick={() => {
            modelbox("Basketball","Basketball 籃球");
          }}
        >
          <img src={Basketball}></img>
        </div>
        <div
          className="slot"
          onClick={() => {
            modelbox("Guitar","Guitar 吉他");
          }}
        >
          <img src={Guitar}></img>
        </div>
      </div>
      <div className="layout_column item">
        <div
          className=""
          onClick={() => {
            modelbox("Mountain", "Hiking 爬山");
          }}
        >
          <img src={Mountain}></img>
        </div>
        <div
          className=""
          onClick={() => {
            modelbox("Podcast","Podcast 播客");
          }}
        >
          <img src={Podcast}></img>
        </div>
        <div
          className=""
          onClick={() => {
            modelbox("Climbing","Climbing 攀岩");
          }}
        >
          <img src={Climbing}></img>
        </div>
      </div>
      <div className="layout_column item">
        <div
          className=""
          onClick={() => {
            modelbox("Coffee","Food 食物");
          }}
        >
          <img src={Coffee}></img>
        </div>
        <div
          className=""
          onClick={() => {
            modelbox("Book","Reading 看書");
          }}
        >
          <img src={Book}></img>
        </div>
        <div
          className=""
          onClick={() => {
            modelbox("Walk","Walking 走路");
          }}
        >
          <img src={Walk}></img>
        </div>
      </div>
    </div>
  );
};

export default Story;
