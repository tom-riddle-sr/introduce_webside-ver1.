import React, { useEffect } from "react";
import { useState } from "react";
import { useAchor } from "../Context/achorContext";

const Sidebar = () => {
  const {achor, setAchor} = useAchor();
  const click_to_changeAchor = (value) => {
    setAchor(value);
    const achorId = document.getElementById(value);
    achorId.scrollIntoView({ behavior: "smooth" });
  
  };
  useEffect(()=>{
    // console.log(achor)
  },[achor])
  return (
    <div className="box9">
      <div onClick={() => click_to_changeAchor("Frontpage")}>
      
        <div></div>
        <div>Frontpage</div>
      </div>
      <div onClick={() => click_to_changeAchor("Intro")}>
        <div></div>
        <div>Intro</div>
      </div>
      <div onClick={() => click_to_changeAchor("Locate")}>
        <div></div>
        <div>Locate</div>
      </div>
      <div onClick={() => click_to_changeAchor("Story")}>
        <div></div>
        <div>Story</div>
      </div>
      <div onClick={() => click_to_changeAchor("Goal")}>
        <div></div>
        <div>Goal</div>
      </div>
    </div>
  );
};

export default Sidebar;
