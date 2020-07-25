import React, { useEffect, useState } from 'react';
import Firebase from '../../utils/Firebase';
import './styles.css';

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
      <div className="Shoes-Container">
        {filteredShoes.map((shoe) => (
          <div>
            <ul className="Shoe-list">
              <li>
                <img src={shoe?.values.imgUrl} alt="shoe-img" />
              </li>
              <li>{shoe?.values.name}</li>
              <li>{shoe?.values.drop}</li>
              <li>{shoe?.values.damping}</li>
              <li>{shoe?.values.traning}</li>
              <li>{shoe?.values.weight}</li>
              <button>
                <span>Comprar</span>
              </button>
            </ul>
          </div>
        ))}
        <div></div>
      </div>
      <button onClick={() => console.log(busca, tenis, filteredShoes)}>
        LOGA AQ
      </button>
    </div>
  );
}
