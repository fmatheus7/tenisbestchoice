import React, { useState } from 'react';
import './styles.css';
import Shoes from '../Shoes/Index';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default function Search() {
  // Typography text

  // Hooks
  const [shoePreferences, setShoePreferences] = useState({
    drop: 8,
    weight: '',
    damping: '',
    training: '',
  });
  // HandleChanges
  function onChange(e) {
    setShoePreferences({
      ...shoePreferences,
      [e.target.name]: e.target.value,
    });
    console.log(shoePreferences);
  }
  // Page

  return (
    <div className="search-input-grid">
      <Grid
        container
        direction="colum"
        alignContent="space-between"
        justify="space-evenly"
        alignItems="center"
        lg={12}
        md={8}
        sm={4}
      >
        <Grid item>
          <Typography variant="h4">Amortecimento</Typography>
          <Select name="damping" onChange={onChange} filled>
            <MenuItem value={'light'}>Leve</MenuItem>
            <MenuItem value={'soft'}>Suave</MenuItem>
            <MenuItem value={'extra-soft'}>Extra suave</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Typography variant="h4">Drop</Typography>
          <Select name="drop" onChange={onChange}>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Typography variant="h4">Peso</Typography>
          <Select name="weight" onChange={onChange}>
            <MenuItem value={'heavy'}>Pesado</MenuItem>
            <MenuItem value={'medium'}>Medio</MenuItem>
            <MenuItem value={'light'}>Leve</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Typography variant="h4">Tipo de Treino</Typography>
          <Select name="training" onChange={onChange}>
            <MenuItem value={'running'}>Corrida</MenuItem>
            <MenuItem value={'shooting'}>Rodagem</MenuItem>
            <MenuItem value={'competition'}>Competição</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Shoes busca={shoePreferences} />
    </div>
  );
}
