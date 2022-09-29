import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div> 
    <BrowserRouter>
      <NavBar />
        <Route>
          <Route path="/">
            <Home />
          </Route>
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
    </BrowserRouter>
  </div>
}

export default App;
