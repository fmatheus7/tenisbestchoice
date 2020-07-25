import React, { useState } from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
import Shoes from '../../pages/Shoes/Index';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
export default function Search() {
  const [shoePreferences, setShoePreferences] = useState({
    drop: 8,
    weight: '',
    damping: '',
    training: '',
  });

  function onSubmit(values, actions) {
    setShoePreferences(values);
    console.log(shoePreferences);
    console.log(values);
  }

  function onChange(e) {
    setShoePreferences({
      ...shoePreferences,
      [e.target.name]: e.target.value,
    });
    console.log(shoePreferences);
  }

  return (
    <div>
      <div className="search-input-container">
        <div className="search-input-item">
          <h3>Amortecimento</h3>
          <Select name="damping" onChange={onChange} filled>
            <MenuItem value={'light'}>Leve</MenuItem>
            <MenuItem value={'soft'}>Suave</MenuItem>
            <MenuItem value={'extra-soft'}>Extra suave</MenuItem>
          </Select>
        </div>
        <div className="search-input-item">
          <h3>Drop</h3>
          <Select name="drop" onChange={onChange}>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </div>
        <div className="search-input-item">
          <h3>Peso</h3>
          <Select name="weight" onChange={onChange}>
            <MenuItem value={'heavy'}>Pesado</MenuItem>
            <MenuItem value={'medium'}>Medio</MenuItem>
            <MenuItem value={'light'}>Leve</MenuItem>
          </Select>
        </div>
        <div className="search-input-item">
          <h3>Tipo de treino</h3>
          <Select name="training" onChange={onChange}>
            <MenuItem value={'running'}>Corrida</MenuItem>
            <MenuItem value={'shooting'}>Rodagem</MenuItem>
            <MenuItem value={'competition'}>Competição</MenuItem>
          </Select>
        </div>
      </div>
      <Shoes busca={shoePreferences} />
    </div>
  );
}

// <Formik
// onSubmit={onSubmit}
// validateOnMount
// initialValues={{
//   drop: 0,
//   weight: '',
//   damping: '',
//   training: '',
// }}
// render={({ values, errors }) => (
//   <Form>
//     <div>
//       <div className="Search-Title">
//         <h1>Selecione as características do seu Tenis</h1>
//       </div>
//       <div className="Search-Container">
//         <div className="Search-item">
//           <h2>Drop desejado (MM)</h2>
//           <Field as="select" name="drop" required>
//             <option value="4">4 Milímetros</option>
//             <option value="6">6 Milímetros</option>
//             <option value="8">8 Milímetros</option>
//             <option value="10">10 Milímetros</option>
//             <option value="12">12 MMilímetros</option>
//           </Field>
//         </div>
//         <div className="Search-item">
//           <h2>Peso desejado (g)</h2>
//           <Field as="select" name="weight" required>
//             <option value="leve">Leve</option>
//             <option value="medio">Médio</option>
//             <option value="pesado">Pesado</option>
//           </Field>
//         </div>
//         <div className="Search-item">
//           <h2>Tipo de amortecimento</h2>
//           <Field as="select" name="damping" required>
//             <option value="leve">Leve</option>
//             <option value="macio">Macio</option>
//             <option value="extramacio">Extra Macio</option>
//           </Field>
//         </div>
//         <div className="Search-item">
//           <h2>Tipo de Treino</h2>
//           <Field as="select" name="training">
//             <option value="running">Corrida</option>
//             <option value="rodagem">Rodagem</option>
//             <option value="competição">Competição</option>
//           </Field>
//         </div>
//         <button
//           className="Search-item"
//           className="buttonteste"
//           type="submit"
//         >
//           Pesquisar
//         </button>
//       </div>
//     </div>
//     <hr />
//   </Form>
// )}
// />
