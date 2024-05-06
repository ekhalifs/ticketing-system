import React, { Fragment, useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const updateSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header updateSidebarToggle={updateSidebarToggle} />
      <Sidebar sidebarToggle={sidebarToggle} />
      <Home />
    </div>
  );
};

export default App;
