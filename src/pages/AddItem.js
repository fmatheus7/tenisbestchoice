import React, { useContext } from "react";
import Input from "../components/Input";
import { Context } from "../Context";

export default function AddItem() {
  const { onSubmit } = useContext(Context);

  return (
    <div>
      <h1>Admin page to add the shoes to the DB</h1>
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
