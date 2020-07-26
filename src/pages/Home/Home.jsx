import React, { useState } from 'react';
import CardHome from '../../components/Card/Index';
import firebase from '../../utils/Firebase';
import './styles.css';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export default function Welcome() {
  const imgurl = {
    drop:
      'https://as2.ftcdn.net/jpg/03/08/32/01/500_F_308320176_OgvIVJN8dF7YT7Aoe9h4W9w8r1NYHrUV.jpg',
    damping:
      'https://as1.ftcdn.net/jpg/01/78/72/26/500_F_178722625_Vj9is6EuUBcX4xpJKUi3ad0XOU2HUYKq.jpg',
    traninig:
      'https://as2.ftcdn.net/jpg/01/71/13/25/500_F_171132502_LHSAGGBMvJ0LuaqKQwIsmDolEtWqr3u2.jpg',
  };

  const history = useHistory();
  const [email, setEmail] = useState('');
  const dropInfo =
    'É a diferença de altura entre a base do calcanhar e a planta do pé, ou seja, o "salto" do tênis. Quando menor, mais se parece com a pisada natural';
  const dampingInfo =
    'Uma das principais características de um tênis para corrida é o seu poder de amortecimento. Porém, isso não determina se ele é bom ou ruim, apenas define em qual categoria ele se encontra. Por isso, é bom ter em mente outras características que realmente o fazem ser um tênis de amortecimentogit';
  const trainingInfo =
    'Os modelos são separados em 3 categorias: Corrida, Rodagem, Competição';

  function onSubmit(e) {
    // add items to the DB (admin)
    e.preventDefault();
    firebase.firestore().collection('Usuarios').add({ email });
    return history.push('/Search');
  }
  return (
    <Grid container spacing={4}>
      <div className="title">
        <h1>Why choose us ?</h1>
        <div className="wrapper">
          <Grid item xs={12} sm={6} md={4}>
            <CardHome image={imgurl.drop} title="drop" text={dropInfo} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardHome
              image={imgurl.damping}
              title="damping"
              text={dampingInfo}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardHome
              image="https://as2.ftcdn.net/jpg/01/71/13/25/500_F_171132502_LHSAGGBMvJ0LuaqKQwIsmDolEtWqr3u2.jpg"
              title="training"
              text={trainingInfo}
            />
          </Grid>
        </div>
        <Grid container spacing={4}>
          <Grid item>
            <div className="subscription">
              <h2>Start now!</h2>
              <form onSubmit={onSubmit}>
                <Input
                  id="email-field"
                  type="email"
                  placeholder="Digite seu e-mail"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Button type="submit" variant="contained" color="primary">
                  Registrar
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
