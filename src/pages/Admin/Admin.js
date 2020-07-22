import React, { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import firebase from '../../utils/Firebase';
import './styles.css';
import schema from '../../schema';
export default function Admin() {
  function onSubmit(values, actions) {
    firebase.firestore().collection('Shoes').add({ values });
  }

  return (
    <div className="admin-container">
      <h1>Admin page to add the shoes to the DB</h1>
      <h3>Shoes info</h3>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          name: '',
          drop: 0,
          weight: '',
          damping: '',
          training: '',
          addedby: '',
          imgUrl: 'https://image.flaticon.com/icons/svg/2996/2996892.svg',
        }}
        render={({ values, errors }) => (
          <Form>
            <div>
              <Field
                type="text"
                minLength="1"
                maxLength="25"
                placeholder="Nome do Tenis"
                name="name"
              />
              <ErrorMessage name="name " />
              <label htmlFor="drop">Tamanho do drop</label>
              <Field as="select" name="drop" Required>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
              </Field>
              <ErrorMessage name="drop " />
              <label htmlFor="weight">Peso do tenis</label>
              <Field as="select" name="weight">
                <option value="light">Leve</option>
                <option value="medium">Medio</option>
                <option value="heavy">Pesado</option>
              </Field>
              <ErrorMessage name="weight" />
              <label htmlFor="damping">Maciez</label>
              <Field as="select" name="damping">
                <option value="light">Leve</option>
                <option value="soft">Macio</option>
                <option value="extra-soft">Extra Macio</option>
              </Field>
              <ErrorMessage name="damping" />
              <label htmlFor="training">Tipo de treino</label>
              <Field as="select" name="training">
                <option value="running">Corrida</option>
                <option value="shooting">Rodagem</option>
                <option value="competition">Competição</option>
              </Field>
              <ErrorMessage name="training" />
              <label htmlFor="addedby">Adicionado por </label>
              <Field as="select" name="addedby">
                <option value="Paulo">Paulo</option>
                <option value="Matheus">Matheus</option>
              </Field>
              <ErrorMessage name="addedby" />
              <Field type="text" name="imgUrl" />
              <button type="submit">Cadastrar Tenis</button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
