import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "../Styles/custom.css";
import "../Styles/styles.css";
import Routes from "../Routes";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
    document.getElementById("img-huella").style.transform = "translateX(5px) rotateZ(0deg) scale(1)";
    document.getElementById("img-huella").style.opacity = "0.15";
  }, []);
  
  return (
    <div className="centro">
      <div className="centro">
        <img
          id="img-huella"
          src={
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMS45NTQgMTFjMy4zMyAwIDcuMDU3IDYuMTIzIDcuNjMyIDguNzE2LjU3NSAyLjU5NC0uOTk2IDQuNzI5LTMuNDg0IDQuMTEyLTEuMDkyLS4yNzEtMy4yNTItMS4zMDctNC4xMDItMS4yOTEtLjkyNS4wMTYtMi4zNzkuODM2LTMuNTg3IDEuMjUyLTIuNjU3LjkxNi00LjcxNy0xLjI4My00LjAxLTQuMDczLjc3NC0zLjA1MSA0LjQ4LTguNzE2IDcuNTUxLTguNzE2em0xMC43OTMtNC4zOWMxLjE4OC41MzkgMS42MjkgMi44Mi44OTQgNS4yNy0uNzA0IDIuMzQxLTIuMzMgMy44MDYtNC41NTYgMi43OTYtMS45MzEtLjg3Ny0yLjE1OC0zLjE3OC0uODk0LTUuMjcgMS4yNzQtMi4xMDcgMy4zNjctMy4zMzYgNC41NTYtMi43OTZ6bS0yMS45NjguNzA2Yy0xLjA0NC43MjktMS4wNiAyLjk5Ni4wODIgNS4yMTUgMS4wOTIgMi4xMiAyLjkxMyAzLjIzNiA0Ljg2OCAxLjg3IDEuNjk2LTEuMTg1IDEuNTA0LTMuNDMzLS4wODItNS4yMTUtMS41OTYtMS43OTMtMy44MjQtMi41OTktNC44NjgtMS44N3ptMTUuNjQzLTcuMjkyYzEuMzIzLjI1MSAyLjMyMSAyLjQyOCAyLjE4MiA1LjA2Mi0uMTM0IDIuNTE3LTEuNDA1IDQuMzgyLTMuODgyIDMuOTEyLTIuMTQ5LS40MDctMi45MzgtMi42NTctMi4xODEtNS4wNjEuNzYxLTIuNDIxIDIuNTU5LTQuMTY0IDMuODgxLTMuOTEzem0tMTAuMjk1LjA1OGMtMS4yNjguNDUxLTEuOTIgMi43NTYtMS4zNzcgNS4zMzcuNTE5IDIuNDY3IDIuMDYyIDQuMTE0IDQuNDM3IDMuMjY5IDIuMDYtLjczMiAyLjQ5NC0zLjA3NyAxLjM3Ny01LjMzNi0xLjEyNS0yLjI3Ni0zLjE2OS0zLjcyMS00LjQzNy0zLjI3eiIvPjwvc3ZnPg=="
          }
          alt="pata"
        ></img>
        {/* <img id="img-trasera" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNC44NzIgMTcuNzExYy0uMjkuNTQtMS4wMDIuOTE4LTEuNzI5LjkxOC0uNDQ3IDAtLjg0OS0uMTQ3LTEuMTUtLjQxNi0uMzAxLjI2OS0uNzA0LjQxNi0xLjE0OS40MTYtLjcyOSAwLTEuNDQtLjM3OC0xLjczLS45MTgtLjMwOS0uNTc2LjUzNi0xLjE0Ljk0LS40MjQuMTAyLjE4MS40MzIuMzc1Ljc2MS4zNzUuNjkyIDAgLjYzMS0uNzM4LjYzMS0xLjMtLjQyMy0uMjExLS43MTctLjYzLS43MTctMS4wMDYgMC0uNTI3LjU3LS43NjIgMS4yNzEtLjc2MnMxLjI3MS4yMzUgMS4yNzEuNzYyYzAgLjM4LS4yOTkuODA1LS43MyAxLjAxNCAwIC41ODctLjA1NiAxLjI1NC41OTkgMS4yNTQuMzQxIDAgLjcyOS0uMjA4Ljg2My0uMzkzLjQ1LS42MjQgMS4xODUtLjEwNi44NjkuNDh6bS4xMjgtNi4yMTFjLS40NTkgMC0uODMzLjM3NC0uODMzLjgzNCAwIC40NTkuMzc0LjgzMy44MzMuODMzLjQ1OSAwIC44MzMtLjM3NC44MzMtLjgzMyAwLS40Ni0uMzc0LS44MzQtLjgzMy0uODM0em0wIDIuNjY3Yy0xLjAxMSAwLTEuODMzLS44MjItMS44MzMtMS44MzMgMC0xLjAxMi44MjItMS44MzQgMS44MzMtMS44MzQgMS4wMTEgMCAxLjgzMy44MjIgMS44MzMgMS44MzQgMCAxLjAxMS0uODIyIDEuODMzLTEuODMzIDEuODMzem0tNi0yLjY2N2MtLjQ2IDAtLjgzNC4zNzQtLjgzNC44MzQgMCAuNDU5LjM3NC44MzMuODM0LjgzMy40NTkgMCAuODMzLS4zNzQuODMzLS44MzMgMC0uNDYtLjM3NC0uODM0LS44MzMtLjgzNHptMCAyLjY2N2MtMS4wMTEgMC0xLjgzNC0uODIyLTEuODM0LTEuODMzIDAtMS4wMTIuODIzLTEuODM0IDEuODM0LTEuODM0IDEuMDExIDAgMS44MzMuODIyIDEuODMzIDEuODM0IDAgMS4wMTEtLjgyMiAxLjgzMy0xLjgzMyAxLjgzM3ptMTIuMTEzIDMuOTg2Yy0uNzgtNy42MS0yLjQ2Mi0xMS4yODktNC41NjgtMTMuODY5LTEuMjEgMS4wNTUtMi4wNDQgMS43NjktMy4zMjEgMy42NjctLjc0LS4xMjEtMS43NjktLjExOS0yLjQ4Ni4wMDYtMS41MzgtMS44MzgtMi41NzQtMi42NzYtMy44MTMtMy42NTQtMi4wMzcgMi40ODQtMy41MDMgNi4xMzctNC4xMTcgMTMuNzIzLTEuMTQtMS43MzItMS44MDgtMy44MDEtMS44MDgtNi4wMjYgMC02LjA2NSA0LjkzNC0xMSAxMS0xMSA2LjA2NSAwIDExIDQuOTM1IDExIDExIDAgMi4yNzctLjY5NiA0LjM5Ni0xLjg4NyA2LjE1M3ptLTkuMTEzIDQuODQ3Yy0zLjI5OCAwLTYuMjU0LTEuNDY2LTguMjcyLTMuNzcyLjMwNC00LjUyMSAxLjA5NC0xMC4zNjEgMy4zNTctMTMuNTE3IDEuNzI4IDEuNDIxIDIuNzE3IDIuNjgyIDMuMjc2IDMuMzU5Ljc0OC0uMTkgMS44MjMtLjM1OCAzLjMxNi4wMDcuOTYtMS40NTIgMS41MDgtMi4yMjIgMi43NC0zLjM0NyAxLjk4OSAyLjcxNyAzLjI2IDcuMjY3IDMuOCAxMy41NTgtMi4wMTcgMi4yNzEtNC45NDkgMy43MTItOC4yMTcgMy43MTJ6bTAtMjNjLTYuNjIzIDAtMTIgNS4zNzctMTIgMTIgMCA2LjYyNyA1LjQgMTIgMTIgMTIgNi41NTkgMCAxMi01LjMzIDEyLTEyIDAtNi42MjMtNS4zNzctMTItMTItMTJ6Ii8+PC9zdmc+"></img> */}
      </div>
      <div id="home" className="columna">
        <h1>HOME</h1>
        <div id="datos-usuario" className="centro recuadro">
          <svg
            id="img-usuario"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c3.032 0 5.5 2.467 5.5 5.5 0 1.458-.483 3.196-3.248 5.59 4.111 1.961 6.602 5.253 7.482 8.909h-19.486c.955-4.188 4.005-7.399 7.519-8.889-1.601-1.287-3.267-3.323-3.267-5.61 0-3.033 2.468-5.5 5.5-5.5zm0-2c-4.142 0-7.5 3.357-7.5 7.5 0 2.012.797 3.834 2.086 5.182-5.03 3.009-6.586 8.501-6.586 11.318h24c0-2.791-1.657-8.28-6.59-11.314 1.292-1.348 2.09-3.172 2.09-5.186 0-4.143-3.358-7.5-7.5-7.5z" />
          </svg>
          <p>nombreUsuario</p>
        </div>
        <div className="columna">
          <NavLink to={Routes.AddUser}>
            <button type="button" className="btn btn-primary botón">
              Registrar nuevo usuario
            </button>
          </NavLink>
          <NavLink to={Routes.CRUDUsers}>
          <button type="button" className="btn btn-primary botón">
            Visualizar listado de usuarios
          </button>
          </NavLink>
        </div>
        <NavLink to="/">Cerrar Sesion</NavLink>
        <div className="vacío"></div>
      </div>
    </div>
  );
};


export default Home;
