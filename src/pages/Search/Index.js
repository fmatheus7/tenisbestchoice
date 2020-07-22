import React, { useContext, useState, useEffect } from 'react';
import './styles.css';
import { Context } from '../../Context';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export default function Search() {
  const [shoePreferences, setShoePreferences] = useState({});

  // useEffect(() => {
  //   if (shoePreferences) {
  //     firebase.firestore.QueryDocumentSnapshot.
  //   }
  // }, [shoePreferences]);

  function onSubmit(values, actions) {
    setShoePreferences(values);
    console.log(shoePreferences);
    console.log(values);
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        drop: 0,
        weight: '',
        damping: '',
        training: '',
      }}
      render={({ values, errors }) => (
        <Form>
          <div>
            <div className="Search-Title">
              <h1>Selecione as características do seu Tenis</h1>
            </div>
            <div className="Search-Container">
              <div>
                <h2>Drop desejado (MM)</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Field as="select" name="drop" required>
                  <option value="4">4 Milímetros</option>
                  <option value="6">6 Milímetros</option>
                  <option value="8">8 Milímetros</option>
                  <option value="10">10 Milímetros</option>
                  <option value="12">12 MMilímetros</option>
                </Field>
              </div>
              <div>
                <h2>Peso desejado (g)</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Field as="select" name="weight" required>
                  <option value="leve">Leve</option>
                  <option value="medio">Médio</option>
                  <option value="pesado">Pesado</option>
                </Field>
              </div>
              <div>
                <h2>Tipo de amortecimento</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Field as="select" name="damping" required>
                  <option value="leve">Leve</option>
                  <option value="macio">Macio</option>
                  <option value="extramacio">Extra Macio</option>
                </Field>
              </div>
              <div>
                <h2>Tipo de Treino</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Field as="select" name="training">
                  <option value="running">Corrida</option>
                  <option value="rodagem">Rodagem</option>
                  <option value="competição">Competição</option>
                </Field>
              </div>
            </div>
            <button className="search-submit" type="submit">
              Pesquisar
            </button>
          </div>
        </Form>
      )}
    />
  );
}
