import React, { useState } from "react";
import { NavLink as A} from "react-router-dom";
import "../Styles/SideBar.css";
import elefanteLogo from "../assets/img/HOSPITALZOOICO.PNG";
import Routes from "../Routes";

const SideBar = ({ children, history }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="toggle" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <div className={`navigation${toggle ? " active" : ""}`}>
        <div className="head">
          <img className="logo" src={elefanteLogo} alt="elefante" />
        </div>
        <ul>
          <li>
            <A to={Routes.HOME}>
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="title">Home</span>
            </A>
          </li>
          <li>
            <A to="#">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="title">Perfil</span>
            </A>
          </li>
          <li>
            <A to="#">
              <span className="icon">
                <i className="fas fa-question-circle"></i>
              </span>
              <span className="title">Ayuda</span>
            </A>
          </li>
          <li>
            <A to="#">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              <span className="title">Configuracion</span>
            </A>
          </li>
          <li>
            <A to="#">
              <span className="icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              <span className="title">Cerrar Sesion</span>
            </A>
          </li>
        </ul>
      </div>
      <section className="content">{children}</section>
    </div>
  );
};

export default SideBar;
