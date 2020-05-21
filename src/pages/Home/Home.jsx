import React, {useContext, useState} from "react";
import Card from "../../components/Card/Index";
import firebase from "../../utils/Firebase"
import "./styles.css"
import { Context } from "../../Context";
import { Link , useHistory } from "react-router-dom"

export default function Welcome() {
    const imgurl = "https://picsum.photos/200";
    const history = useHistory();
    const [email, setEmail] = useState('')
  

   function onSubmit(e) {  // add items to the DB (admin)
    e.preventDefault();
        firebase
        .firestore()
        .collection('Usuarios') 
        .add({ email });
        return history.push('/Search');
       
}
    return (
      <div className="title">
        <h1>Why choose us ?</h1>
        <div className="wrapper">
          <Card name="teste" text="enim sed faucibus" url={imgurl} />
          <Card name="teste 2" text="curabitur vitae nunc" url={imgurl} />
          <Card name="teste3 " text="suspendisse sed nisi" url={imgurl} />
        </div>

        <div className="subscription">
          <h2>Start now!</h2>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Digite seu e-mail" name="email" onChange={(e) => setEmail(e.target.value)} />
              <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    );
}
