import React, { useContext } from 'react';
import Input from '../components/Input';
import { Context } from '../Context';

export default function AddItem() {
  const { onSubmit } = useContext(Context);

  return (
    <div>
      <h1>'Admin' page to add the shoes to the DB</h1>
      <h3>Shoes info</h3>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          min="1"
          nax="20"
          placeholder="Nome do Tenis"
          name="name"
        />
        <Input type="number" min="4" max="12" placeholder="drop" name="drop" />
        <Input type="number" placeholder="peso" name="peso" />
        <Input
          type="number"
          min="1"
          max="3"
          name="amortecimento"
          placeholder="Amortecimento"
        />
        <Input
          type="number"
          min="1"
          max="3"
          name="treino"
          placeholder="Tipo de treino"
        />
        <Input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// [13:03, 04/05/2020] Paulo: Amortecimento: Leve, Macio, Extra Macio
// Dropp: pode ser entre 4, 6,8,10,12 (milímetros)
// [13:03, 04/05/2020] Paulo: *drop
// [13:04, 04/05/2020] Paulo: Peso (gramas)
// [13:05, 04/05/2020] Paulo: Tipo de treino: rodagem , tiro / competição
