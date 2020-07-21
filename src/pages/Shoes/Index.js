import React, { useEffect, useState } from 'react';
import Firebase from '../../utils/Firebase';
import { Context } from '../../Context';
import './styles.css';

export default function Shoes() {
  const [tenis, setTenis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = Firebase.firestore();
      db.collection('Tenis')
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
      <ul>
        <li>{shoe?.values.shoe}</li>
      </ul>
    );
  });

  return <div className="Shoes-Container">{shoeList}</div>;
}
