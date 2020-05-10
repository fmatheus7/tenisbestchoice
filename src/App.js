import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles.css";
import AddItem from "./pages/AddItem";
import Search from "./pages/Search";
import Shoes from "./pages/Shoes";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Welcome name="Matheus" />
        </Route>
        <Route path="/shoes">
          <Shoes />
        </Route>
        <Route path="/AddItem">
          <AddItem />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
