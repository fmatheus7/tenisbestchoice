import React, { useContext, useState } from 'react';
import Card from '../../components/Card/Index';
import firebase from '../../utils/Firebase';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';

export default function Welcome() {
  const imgurl = {
    drop:
      'https://blogfitness.com.br/wp-content/uploads/2017/01/drop-tenis.jpg',
    damping:
      'https://cdn.autodoc.de/uploads/custom-catalog/matd/categories/200x200/10111.png',
    traninig:
      'https://blogeducacaofisica.com.br/wp-content/uploads/2018/03/competi%C3%A7%C3%A3o-capa.png',
  };

  const history = useHistory();
  const [email, setEmail] = useState('');
  const dropInfo =
    'É a diferença de altura entre a base do calcanhar e a planta do pé, ou seja, o "salto" do tênis. Quando menor, mais se parece com a pisada natural';
  const dampingInfo =
    'Uma das principais características de um tênis para corrida é o seu poder de amortecimento. Porém, isso não determina se ele é bom ou ruim, apenas define em qual categoria ele se encontra. Por isso, é bom ter em mente outras características que realmente o fazem ser um tênis de amortecimento';
  const trainingInfo =
    'Os modelos são separados em 3 categorias: Corrida, Rodagem, Competição';

  function onSubmit(e) {
    // add items to the DB (admin)
    e.preventDefault();
    firebase.firestore().collection('Usuarios').add({ email });
    return history.push('/Search');
  }
  return (
    <div className="title">
      <h1>Why choose us ?</h1>
      <div className="wrapper">
        <Card name="Drop" text={dropInfo} url={imgurl.drop} />
        <Card name="Amortecimento" text={dampingInfo} url={imgurl.damping} />
        <Card
          name="Tipo de Treino"
          text={trainingInfo}
          url={imgurl.trainingInfo}
        />
      </div>

      <div className="subscription">
        <h2>Start now!</h2>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" required>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
