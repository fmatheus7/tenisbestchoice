import React, { useContext, useState } from "react";
import firebase from "../../utils/Firebase"
import "./styles.css"

export default function Admin() {
  
  const initalValue = [{
    shoe: '',
    drop: 0,
    weight: '',
    damping: '',
    training: '',
    addedby: ''
  }]

  const [values, setValues] = useState(initalValue);

  function onSubmit(e) {  // add items to the DB (admin)
    e.preventDefault();
        firebase
        .firestore()
        .collection('Tenis')
        .add({ values })
        .then(() => {
            setValues(initalValue);
        });
}

  function onChange(e) {
    const { name, value } = e.target;
    setValues({...values, [name]: value})
    console.log(values)
  }
  
  return (
    <div className="admin-container">
      <h1>Admin page to add the shoes to the DB</h1>
      <h3>Shoes info</h3>
      <form onSubmit={onSubmit} className="Admin-container">
        <input type="text" minLength="1" maxLength="25" placeholder="Nome do Tenis" name="shoe" onChange={onChange} id="shoe" required />
        
        <select onChange={onChange} name="drop">
          <option value="4">4 Milímetros</option>
          <option value="6">6 Milímetros</option>
          <option value="8">8 Milímetros</option>
          <option value="10">10 Milímetros</option>
          <option value="12">12 MMilímetros</option>
        </select>

        <select onChange={onChange} name="weight">
          <option value="leve">Leve</option>
          <option value="medio">Médio</option>
          <option value="pesado">Pesado</option>
        </select>
       
        <select onChange={onChange} name="damping">
          <option value="leve">Leve</option>
          <option value="macio">Macio</option>
          <option value="extramacio">Extra Macio</option>
        </select>

        <select onChange={onChange} name="training">
          <option value="running">Corrida</option>
          <option value="rodagem">Rodagem</option>
          <option value="competição">Competição</option>
        </select>

        <select onChange={onChange} name="addedby" required>
          <option value="matheus">Matheus</option>
          <option value="paulo">Paulo</option>
        </select>
        <br />

        <button type="submit">Adicionar ao banco de dados</button>
      </form>
    </div>
    
  );
}
