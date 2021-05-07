import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "../Styles/custom.css";
import "../Styles/styles.css";
import Routes from "../Routes";

const AddUser = () => {
  useEffect(() => {
    document.title = "Agregar usuario";
  }, []);

  return (
    <div id="min-screen-height" className="centro">
      <div className="columna">
        <h1>Agregar usuario</h1>
        <form id="form1">
          <h2>Datos</h2>
          <div class="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label flex-end">Rut</label>
            <div class="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label flex-end">Nombre</label>
            <div class="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label flex-end">Email</label>
            <div class="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label flex-end">Contraseña</label>
            <div class="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label flex-end">Rol</label>
            <div class="col-sm-10">
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </form>
        <button type="button" className="btn btn-success botón">
          Confirmar
          </button>
        <NavLink to="/home_admin">Volver a inicio</NavLink>
        <div className="vacío"></div>
      </div>
    </div>
  );
};


export default AddUser;
