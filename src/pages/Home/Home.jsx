import React, {useContext} from "react";
import Card from "../../components/Card/Index";
import Input from "../../components/Input";
import "./styles.css"
import { Context } from "../../Context";
import { Link } from "react-router-dom"

export default function Welcome({ name }) {
    const imgurl = "https://www.bigstockphoto.com/images/homepage/module-6.jpg";
    const {onSubmit, onEmailChange} = useContext(Context)

    return (
      <div className="title">
        <h1>Why choose us ?</h1>
        <div className="wrapper">
          <Card name="teste" text="Teste 1" url={imgurl} />
          <Card name="teste 2" text="Teste 2" url={imgurl} />
          <Card name="teste3 " text="Teste 13" url={imgurl} />
        </div>
        <div className="subscription">
          <h2>Começe agora a ultilizar nossos serviços!</h2>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Digite seu e-mail" name="email" onChange={onEmailChange} />
            <Link to="Search">
              <button type="submit">Registrar</button>
            </Link>
          </form>

          
        </div>
      </div>
    );
}
