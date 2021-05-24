import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Pokemon from "./components/Some";
import Navbar from "./components/Navbar";

import "./App.css";
const App = () => {
  return (
    <div className='App'>
      <Navbar />

      {/* route akan active, untuk styling. */}

      {/* <ImgSlider /> */}
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
};

export default App;
