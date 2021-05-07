import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "../Styles/custom.css";
import "../Styles/styles.css";
import Routes from "../Routes";
import SideBar from "../components/SideBar";

const UpdateUser = () => {
  useEffect(() => {
    document.title = "Editar usuario";
  }, []);

  return (
    <SideBar>
      {" "}
      <section id="min-screen-height" className="centro">
        <div className="columna">
          <h1>Editar usuario</h1>
          <form id="form1">
            <h2>Datos</h2>
            <div className="form-group row">
              <label
                htmlFor="inputEmail3"
                className="col-sm-2 col-form-label flex-end"
              >
                Nombre
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label flex-end"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label flex-end"
              >
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label flex-end"
              >
                Rol
              </label>
              <div className="col-sm-10">
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
          <NavLink to={Routes.HOME}>Volver a inicio</NavLink>
          <div className="vacío"></div>
        </div>
      </section>
    </SideBar>
  );
};

export default UpdateUser;
