import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import firebase from '../../utils/Firebase';
import './styles.css';
import schema from '../../schema';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function Admin() {
  function onSubmit(values, actions) {
    firebase.firestore().collection('Teste 1234').add({ values });
    alert('submetido com sucesso');
  }

  return (
    <div className="admin-page">
      <div className="admin-tittle">
        <Typography variant="h3">Adicionar Tênis ao banco de dados</Typography>
        <br />
        <Typography variant="h4">informação do tênis</Typography>
      </div>
      <Grid
        container
        alignContent="space-between"
        alignItems="center"
        direction="row"
        justify="center"
        lg={12}
        md={8}
        sm={4}
      >
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
              <Grid item>
                <Field
                  type="text"
                  minLength="1"
                  maxLength="25"
                  name="name"
                  as={TextField}
                  label="Nome do tenis"
                />
              </Grid>
              <Grid item>
                <Typography variant="button" display="block">
                  Tamanho do drop
                </Typography>
                <Field as={TextField} name="drop" select>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </Field>
              </Grid>
              <Grid item>
                <Typography variant="button" display="block">
                  Peso
                </Typography>
                <Field as={TextField} name="weight" select>
                  <MenuItem value="light">Leve</MenuItem>
                  <MenuItem value="medium">Medio</MenuItem>
                  <MenuItem value="heavy">Pesado</MenuItem>
                </Field>
              </Grid>
              <Grid item>
                <Typography variant="button" display="block">
                  Amortecimento
                </Typography>
                <Field as={TextField} name="damping" select>
                  <MenuItem value="light">Leve</MenuItem>
                  <MenuItem value="soft">Macio</MenuItem>
                  <MenuItem value="extra-soft">Extra Macio</MenuItem>
                </Field>
              </Grid>
              <Grid item>
                <Typography variant="button" display="block">
                  Tipo de treino
                </Typography>
                <Field as={TextField} name="training" select>
                  <MenuItem value="running">Corrida</MenuItem>
                  <MenuItem value="shooting">Rodagem</MenuItem>
                  <MenuItem value="competition">Competição</MenuItem>
                </Field>
              </Grid>
              <Grid item>
                <Typography variant="button" display="block">
                  Adicionado por
                </Typography>
                <Field as={TextField} name="addedby" select>
                  <MenuItem value="Paulo">Paulo</MenuItem>
                  <MenuItem value="Matheus">Matheus</MenuItem>
                </Field>
                <Grid item>
                  <Typography variant="button" display="block">
                    Imagem
                  </Typography>
                  <Field as={TextField} type="text" name="imgUrl" />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Form>
          )}
        />
      </Grid>
    </div>
  );
}
