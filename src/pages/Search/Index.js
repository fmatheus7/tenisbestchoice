import React, {useContext} from 'react';
import Input from "../../components/Input"
import "./styles.css";
import {Context} from "../../Context"

export default function Search() {
  
  const {searchSubmit, handleSearchChange} = useContext(Context)
  
  return (
    <div>
      <div className="Search-Title">
        <h1>Selecione as características do seu Tenis</h1>
      </div>
      <div className="Search-Container">
        <h2>Drop desejado (MM)</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <form onSubmit={searchSubmit}>
          <input 
            type="number"
            min="4"
            max="12"
            placeholder="MM"
            name="drop"
            required
            onChange={handleSearchChange}
          />
          <h2>Peso desejado (g)</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <input 
            type="number"
            placeholder="peso"
            name="peso"
            onChange={handleSearchChange}
          />
          <h2>Tipo de amortecimento</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <select name="amortecimento" onChange={handleSearchChange}>
            <option value="leve">Leve</option>
            <option value="macio">Macio</option>
            <option value="extraMacio">Extra Macio</option>
          </select>
          <h2>Tipo de Treino</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <select name="treino" onChange={handleSearchChange}>
            <option value="rodagem">Rodagem</option>
            <option value="tiro">Tiro</option>
            <option value="competicao">Competição</option>
          </select>
          <input type="email" required size="30" />
          <br />
          <button type="submit" value="submit">Pesquisar</button>
          
        </form>
       




      </div>

    </div>
     
    );
}
