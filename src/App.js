import React from "react";
import Frontpage from "./10_frontpage/Frontpage";
import Intro from "./20_intro/Intro";
import Locate from "./30_locate/locate";
import Story from "./40_story/Story";
import Goal from "./50_goal/Goal";
import Sidebar from "./60_sidebar/Sidebar";
import { AchorProvider } from "./Context/achorContext";
import AOS from "aos";
import "aos/dist/aos.css"; 
import clsx from "clsx";


AOS.init();

function App() {
  return (
    <AchorProvider>
      <div className="App">
        <Frontpage />
        <Intro />
        <Locate />
        <Story />
        <Goal />
        <Sidebar />
      </div>
    </AchorProvider>
  );
}

export default App;
