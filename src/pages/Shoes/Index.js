import React, { useEffect, useState } from 'react';
import Firebase from '../../utils/Firebase';
import "./styles.css";
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export default function Shoes({ busca }) {
  const [tenis, setTenis] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = Firebase.firestore();
      db.collection('Shoes')
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setTenis(data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredShoes(
      tenis.filter(
        (shoe) =>
          shoe.values.drop.includes(busca.drop) &&
          shoe.values.weight.includes(busca.weight) &&
          shoe.values.damping.includes(busca.damping) &&
          shoe.values.training.includes(busca.training),
      ),
    );
  }, [busca]);

  return (
    <div>
      <Grid
        container
        direction="row"
        // alignContent="center"
        justify="space-evenly"
        alignContent="center"
        alignItems="center"
        lg={12}
        md={10}
        sm={6}
      >
        {filteredShoes.map((shoe) => (
          <Grid item>
            <div className="shoe-item">
              <ul>
                <li>
                  <img src={shoe?.values.imgUrl} alt="shoe-img" />
                </li>
                <li>
                  <Typography variant="h3">{shoe?.values.name}</Typography>
                </li>
                <li>
                  <Typography variant="body1">TAMANHO DO DROP</Typography>
                  <Typography variant="overline" color="textPrimary">
                    {shoe?.values.drop}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">AMORTECIMENTO</Typography>

                  <Typography variant="overline" color="textPrimary">
                    {shoe?.values.damping}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">TIPO DE TREINO</Typography>

                  <Typography variant="overline" color="textPrimary">
                    {shoe?.values.traning}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">PESO</Typography>

                  <Typography variant="overline" color="textPrimary">
                    {shoe?.values.weight}
                  </Typography>
                </li>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <ShoppingCartIcon />
                </IconButton>
              </ul>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
