import React, { useState } from 'react';
import './styles.css';
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
