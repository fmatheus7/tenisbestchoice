import React, { useState } from 'react';
import firebase from './utils/Firebase';

const Context = React.createContext();

function ContextProvider({ children }) {
    States
    nst[shoes, setShoes] = useState([{}]);
    // Hdle Functions
    cons  ndleChange = (e) => {
        consname, value
    } = e.target;
    setShoes    ate) => ({
        ...prevState,
        ame]: value
        onsole.log(shoes);;

        onSubmit(e) {
            e.pventfault();

            firebase
            estore()
                .collectioenis')
            hoes
        })
     (() => {
            setShoes('');
            ;
        }

  return xt.Provider vaandleChange, onSubmit
}}>
    hild  
  </Context.P    
  );
}

export { ContextProvider, Context };
