import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skateboard from "../pic/1.JPG";
import Mountain1 from "../pic/2-1.png";
import Mountain2 from "../pic/2-2.png";
import Coffee1 from "../pic/3-1.png";
import Coffee2 from "../pic/3-2.png";
import Basketball from "../pic/4.png";
import Podcast from "../pic/5.png";
import Book from "../pic/6.jpeg";
import Guitar from "../pic/7.png";
import Climb from "../pic/8.png";
import Walk from "../pic/9.png";
import Close from "../pic/close.png";

const Modal = (props) => {
  Modal.propTypes = {
    name: PropTypes.node.isRequired,
    setModalSwitch: PropTypes.node.isRequired,
  };

  const title = () => {
    switch (props.name[0]) {
      case "Skateboard":
        return [Skateboard];
      case "Basketball":
        return [Basketball];
      case "Guitar":
        return [Guitar];
      case "Mountain":
        return [Mountain1, Mountain2];
      case "Podcast":
        return [Podcast];
      case "Climbing":
        return [Climb];
      case "Coffee":
        return [Coffee1, Coffee2];
      case "Book":
        return [Book];
      case "Walk":
        return [Walk];
      default:
        return [];
    }
  };

  const images = title();

  return (
    <div className="modalbox">
      <div>
        <p>{props.name[1]}</p>
        <div>
          <img
            onClick={() => {
              props.setModalSwitch(false);
            }}
            className="close"
            src={Close}
          ></img>
        </div>
      </div>
      <div>
        <img src={images[0]} alt="Image 1"></img>
        {images[1] && <img src={images[1]} alt="Image 2"></img>}
      </div>
    </div>
  );
};

export default Modal;
