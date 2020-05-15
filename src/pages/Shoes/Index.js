import React, { useEffect, useState } from 'react';
import Firebase from "../../utils/Firebase"
import { Context } from "../../Context"
import "./styles.css";

export default function Shoes() {
  const [tenis, setTenis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = Firebase.firestore()
      db.collection("Tenis")
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          setTenis(data)
          console.log(data)
        });
    }
    fetchData();

  }, [])

  return (
    <div className="Shoes-Container">
      {tenis.map(item => (
        <ul key={item.shoes.name}>
          {item.shoes.name}
          <li>
            {item.shoes.treino}
            Tipo de treino
            {' '}
          </li>
          <li>
            {item.shoes.amortecimento}
            amortecimento
          </li>
          <li>
            {item.shoes.drop}
            drop
          </li>
          <li>
            {item.shoes.peso}
            peso
          </li>
        </ul>
       ))}
    </div>
  );
}
