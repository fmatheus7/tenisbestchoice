import React, { useEffect, useState } from 'react';
import Firebase from '../../utils/Firebase';
import { Context } from '../../Context';
import './styles.css';

export default function Shoes() {
  const [tenis, setTenis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = Firebase.firestore();
      db.collection('Shoes')
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setTenis(data);
          console.log(data);
        });
    };
    fetchData();
  }, []);

  const shoeList = tenis.map((shoe) => {
    return (
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
    );
  });

  return <div className="Shoes-Container">{shoeList}</div>;
}
