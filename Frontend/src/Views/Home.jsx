import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../context/GeneralContext";
const Home = () => {
  const {datoX} = useContext(UserContext)
  return (
    <div>
      <h1>HOME</h1>
      <p>{datoX}</p>
      <NavLink to="/">Cerrar Sesion</NavLink>
    </div>
  );
};

export default Home;
