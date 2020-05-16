import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Index";
import "./styles.css";
import Admin from './pages/Admin/Admin'
import Search from "./pages/Search/Index";
import Shoes from "./pages/Shoes/Index"
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home name="Matheus" />
        </Route>
        <Route path="/shoes">
          <Shoes />
        </Route>
        <Route path="/AddItem">
          <Admin />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
