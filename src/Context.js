import React, { useState } from "react";
import firebase from "./utils/Firebase";

const Context = React.createContext();

function ContextProvider({ children }) {
    // States
    const [shoes, setShoes] = useState([{}]);
    // Handle Functions
    const handleChange = (e) => {
        const { name, value } = e.target;
        setShoes((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(shoes);
    };

    function onSubmit(e) {
        e.preventDefault();

        firebase
            .firestore()
            .collection("Tenis")
            .add({ shoes })
            .then(() => {
                setShoes("");
            });
    }

    return (
      <Context.Provider value={{ handleChange, onSubmit }}>
        {children}
      </Context.Provider>
    );
}

export { ContextProvider, Context };
