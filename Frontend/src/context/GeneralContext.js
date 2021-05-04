import React, { useState } from "react";

export const UserContext = React.createContext();

const GeneralContext = (props) => {
  const [dato,setDato] = useState("DATO")
  const datoX = "Test Context "
  return (
    <UserContext.Provider value={{datoX,dato,setDato}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default GeneralContext;
