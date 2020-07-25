import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Index';
import './styles.css';
import Admin from './pages/Admin/Admin';
import Search from './components/Search/index';
import Shoes from './pages/Shoes/Index';
import Home from './pages/Home/Home';
import Login from './pages/Login/Index';

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
        <Route path="/UserLogin">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
