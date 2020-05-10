import React from "react";
import Card from "../components/Card/Index";
import Input from "../components/Input";

export default function Welcome({ name }) {
    const imgurl = "https://www.bigstockphoto.com/images/homepage/module-6.jpg";

    return (
      <div className="title">
        <h1>Why choose us ?</h1>
        <div className="wrapper">
          <Card name="teste" text="Teste 1" url={imgurl} />
          <Card name="teste 2" text="Teste 2" url={imgurl} />
          <Card name="teste3 " text="Teste 13" url={imgurl} />
        </div>
        <div className="subscription">
          <form>
            <Input type="text" placeholder="Digite seu e-mail" name="email" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
}
