import React, {useContext} from 'react';
import "./styles.css";
import {Context} from "../../Context"

export default function Search() {
  

  function onChange(e) {
    const { name, value } = e.target;
    setSubmitedShoe({...submitedShoe, [name]: value})
    console.log(submitedShoe)
  }
  

  const {searchSubmit, handleSearchChange, submitedShoe, setSubmitedShoe} = useContext(Context)
  
  return (
    <div>
      <div className="Search-Title">
        <h1>Selecione as características do seu Tenis</h1>
      </div>
      <div className="Search-Container">
        <h2>Drop desejado (MM)</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <form onSubmit={searchSubmit}>

          <select onChange={onChange} name="drop" required>
            <option value="4">4 Milímetros</option>
            <option value="6">6 Milímetros</option>
            <option value="8">8 Milímetros</option>
            <option value="10">10 Milímetros</option>
            <option value="12">12 MMilímetros</option>
           </select>

          <h2>Peso desejado (g)</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
        <select onChange={onChange} name="weight" required>
          <option value="leve">Leve</option>
          <option value="medio">Médio</option>
          <option value="pesado">Pesado</option>
        </select>
          <h2>Tipo de amortecimento</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 
          <select onChange={onChange} name="damping" required>
            <option value="leve">Leve</option>
            <option value="macio">Macio</option>
            <option value="extramacio">Extra Macio</option>
          </select>

          <h2>Tipo de Treino</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

         <select onChange={onChange} name="training" >
          <option value="running">Corrida</option>
          <option value="rodagem">Rodagem</option>
          <option value="competição">Competição</option>
        </select>
          <br />
          <button type="submit" value="submit">Pesquisar</button>
          
        </form>
       




      </div>

    </div>
     
    );
}
