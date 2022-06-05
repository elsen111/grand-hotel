import React from "react";
import "./main.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomFeatures from "./pages/RoomDetails";
import Error from "./pages/ErrorPage";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={RoomFeatures} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
