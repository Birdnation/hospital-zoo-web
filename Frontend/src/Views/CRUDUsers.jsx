import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "../Styles/custom.css";
import "../Styles/styles.css";
import Routes from "../Routes";


const CRUDUsers = () => {
  useEffect(() => {
    document.title = "Users";
  }, []);

  const eliminar = () => {
    document.getElementById("confirmar").style.display = "flex";
  }

  const cancelar = () => {
    document.getElementById("confirmar").style.display = "none";
  }

  return (
    <div id="min-screen-height" className="centro">
      <div id="confirmar" className="columna no-mostrar">
        <label>¿Está seguro de que desea eliminar?</label>
        <div id="opciones" className="fila">
          <button type="button" className="btn btn-danger">Confirmar</button>
          <button onClick={() => cancelar()} type="button" className="btn btn-secondary">Cancelar</button>
        </div>
      </div>
      <div className="fila">
        <div id="titulo">
          <h1>Administrar usuarios</h1>
        </div>
        <div id="div-agregar-usuario" className="centro">
          <NavLink to={Routes.AddUser}>
            <button id="agregar-usuario" type="button" className="btn btn-primary">Agregar usuario</button>
          </NavLink>
        </div>
      </div>
      <div className="columna">

        <table id="tabla" className="table table-striped texto-centro align-middle">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
              <th scope="col">Rut</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="align-middle">Juan</th>
              <td className="align-middle">juan.perez@gmail.com</td>
              <td className="align-middle">Administrador</td>
              <td className="align-middle">193333339</td>
              <td>
                <NavLink to={Routes.UpdateUser}>
                  <button type="button" className="btn btn-primary botón-pequeño">
                    Cambiar datos
                  </button>
                </NavLink>
                <button onClick={() => eliminar()} type="button" className="btn btn-primary botón-pequeño">
                  Eliminar usuario
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row" className="align-middle">Pedro</th>
              <td className="align-middle">prueba@mail.com</td>
              <td className="align-middle">Veterinario</td>
              <td className="align-middle">111111111</td>
              <td>
                <NavLink to={Routes.NUEVOANIMAL}>
                  <button type="button" className="btn btn-primary botón-pequeño">
                    Cambiar datos
                  </button>
                </NavLink>
                <button onClick={() => eliminar()} type="button" className="btn btn-primary botón-pequeño">
                  Eliminar usuario
              </button>
              </td>
            </tr>
            <tr>
              <th scope="row" className="align-middle">Sabrina</th>
              <td className="align-middle">sabrina@mail.com</td>
              <td className="align-middle">Secretaria</td>
              <td className="align-middle">122222222</td>
              <td>
                <NavLink to={Routes.NUEVOANIMAL}>
                  <button type="button" className="btn btn-primary botón-pequeño">
                    Cambiar datos
                  </button>
                </NavLink>
                <button onClick={() => eliminar()} type="button" className="btn btn-primary botón-pequeño">
                  Eliminar usuario
              </button>
              </td>
            </tr>
          </tbody>
        </table>
        <NavLink to="/home_admin">Volver a inicio</NavLink>
        <div className="vacío"></div>
      </div>
    </div>
  );
};


export default CRUDUsers;
