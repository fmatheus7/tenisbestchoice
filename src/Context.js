import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  // States
  const [emailClient, setEmailClient] = useState('');
  //

  // Handle Functions

  // Handle Email Value

  function onEmailChange(e) {
    const { name, value } = e.target;

    setEmailClient({ ...emailClient, [name]: value });
    console.log(emailClient);
  }

  //
  return (
    <Context.Provider value={{ onEmailChange }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
