import React from "react";
import "./styles.css"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Tenis best Choice</h1>
      </Link>
     
      <i className="fas fa-running" />
      <i className="fas fa-database" />

    </header>
  );
}
