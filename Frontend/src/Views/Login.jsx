import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  },[])
  return (
    <>
      <div className="containerForm">
        <h1>---------INGRESE SUS DATOS---------</h1>
        <h2>USUARIO</h2>
        <input type="text" />
        <h2>CONTRASEÑA</h2>
        <input type="password" />
        <NavLink to="/home">
          <button>ENTRAR</button>
        </NavLink>
      </div>
    </>
  );
};

export default Login;
