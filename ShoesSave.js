import React, { useEffect, useState } from 'react';
import Firebase from '../../utils/Firebase';
import { Context } from '../../Context';
import './styles.css';
import Search from '../../components/Search/index';

export default function Shoes() {
  const [tenis, setTenis] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [searchValues, setSearchValues] = useState([]);
  const testando = '8';
  const shoesSearched = tenis.filter((shoe) => {
    return shoe.name.includes(testando);
  });

  useEffect(() => {
    if (tenis.length < 1) {
      const fetchData = async () => {
        const db = Firebase.firestore();
        db.collection('Shoes')
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data());
            setTenis(data);
          });
      };
      fetchData();
    }
    if (filteredShoes.length < 1) {
      setFilteredShoes(searchValues);
    }
  }, []);

  const shoeList = tenis.map((shoe) => {
    return (
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
    );
  });

  if (filteredShoes) {
    return (
      <div>
        <Search />
        <div className="Shoes-Container">{shoeList}</div>
        <h2>oie</h2>
        {shoesSearched}
      </div>
    );
  }
  return <div className="Shoes-Container">{filteredShoes}</div>;
}
