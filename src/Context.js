import React, { useState } from "react";
import firebase from "./utils/Firebase";

const Context = React.createContext();

function ContextProvider({ children }) {
    // States
    const [shoes, setShoes] = useState([]);
    const [searchShoe, setSearchShoe] = useState([]);
    const [submitedShoe, setSubmitedShoe] = useState([]);
    const [emailClient, setEmailClient] = useState('');
    //


    // Handle Functions
    const handleChange = (e) => {
        const { name, value } = e.target;
        setShoes((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle Email Value

    function onEmailChange(e) {
        const {name, value} = e.target;

        setEmailClient({...emailClient, [name]: value});
        console.log(emailClient)
    }

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchShoe((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        console.log(searchShoe);
    };

    function onSubmit(e) {  // add items to the DB (admin)
        e.preventDefault();
            firebase
            .firestore()
            .collection('Tenis')
            .add({ shoes })
            .then(() => {
                setShoes([]);
            });
    }

    function searchSubmit(e) { // Add the user search item to the DB
        e.preventDefault();
        firebase
            .firestore()
            .collection('Search')
            .add({ searchShoe })
            .then(() => {
                setShoes([]);
            });
    }


    // 
    return (
      <Context.Provider value={{ handleChange, onSubmit, searchSubmit, handleSearchChange, onEmailChange, setSubmitedShoe, submitedShoe }}>
        {children}
      </Context.Provider>
    );
}

export { ContextProvider, Context };
