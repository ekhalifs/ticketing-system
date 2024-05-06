import React, { Fragment, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthContext } from "./Context/AuthContext";
import TicketContextProvider from "./Context/TicketContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <TicketContextProvider user={user}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/login"} element={user ? <Home /> : <Login />} />
          <Route path={"/home"} element={user ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </TicketContextProvider>
  );
};

export default App;
