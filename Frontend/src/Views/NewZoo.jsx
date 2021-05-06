import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";
import "../Styles/NewAnimal.css";

const NewZoo = () => {
  useEffect(() => {
    document.title = "Nuevo Zoologico";
  }, []);
  
  return (
    <SideBar>
      <div className="centro">
        <div className="centro">
          <img
            id="img-huella"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMS45NTQgMTFjMy4zMyAwIDcuMDU3IDYuMTIzIDcuNjMyIDguNzE2LjU3NSAyLjU5NC0uOTk2IDQuNzI5LTMuNDg0IDQuMTEyLTEuMDkyLS4yNzEtMy4yNTItMS4zMDctNC4xMDItMS4yOTEtLjkyNS4wMTYtMi4zNzkuODM2LTMuNTg3IDEuMjUyLTIuNjU3LjkxNi00LjcxNy0xLjI4My00LjAxLTQuMDczLjc3NC0zLjA1MSA0LjQ4LTguNzE2IDcuNTUxLTguNzE2em0xMC43OTMtNC4zOWMxLjE4OC41MzkgMS42MjkgMi44Mi44OTQgNS4yNy0uNzA0IDIuMzQxLTIuMzMgMy44MDYtNC41NTYgMi43OTYtMS45MzEtLjg3Ny0yLjE1OC0zLjE3OC0uODk0LTUuMjcgMS4yNzQtMi4xMDcgMy4zNjctMy4zMzYgNC41NTYtMi43OTZ6bS0yMS45NjguNzA2Yy0xLjA0NC43MjktMS4wNiAyLjk5Ni4wODIgNS4yMTUgMS4wOTIgMi4xMiAyLjkxMyAzLjIzNiA0Ljg2OCAxLjg3IDEuNjk2LTEuMTg1IDEuNTA0LTMuNDMzLS4wODItNS4yMTUtMS41OTYtMS43OTMtMy44MjQtMi41OTktNC44NjgtMS44N3ptMTUuNjQzLTcuMjkyYzEuMzIzLjI1MSAyLjMyMSAyLjQyOCAyLjE4MiA1LjA2Mi0uMTM0IDIuNTE3LTEuNDA1IDQuMzgyLTMuODgyIDMuOTEyLTIuMTQ5LS40MDctMi45MzgtMi42NTctMi4xODEtNS4wNjEuNzYxLTIuNDIxIDIuNTU5LTQuMTY0IDMuODgxLTMuOTEzem0tMTAuMjk1LjA1OGMtMS4yNjguNDUxLTEuOTIgMi43NTYtMS4zNzcgNS4zMzcuNTE5IDIuNDY3IDIuMDYyIDQuMTE0IDQuNDM3IDMuMjY5IDIuMDYtLjczMiAyLjQ5NC0zLjA3NyAxLjM3Ny01LjMzNi0xLjEyNS0yLjI3Ni0zLjE2OS0zLjcyMS00LjQzNy0zLjI3eiIvPjwvc3ZnPg=="
            alt="huella"
          ></img>
        </div>
        <div className="containerForm">
          <h1>Agregar Zoológico</h1>
          <main className="mainForm">
            <section className="sectionForm">
              <h2>Datos</h2>
              <p>
                Nombre: <input type="text" />
              </p>
              <p>
                Región:
                <select>
                  <option value="Ford">1</option>
                  <option value="Volvo">2</option>
                  <option value="Fiat">3</option>
                </select>
              </p>

              <p>
                Dirección: <input type="text" />{" "}
              </p>

              <p>
                Ciudad:
                <select>
                  <option value="Ford">1</option>
                  <option value="Volvo">2</option>
                  <option value="Fiat">3</option>
                </select>
              </p>
            </section>
          </main>
          <NavLink to="/home">
            <button>REGISTRAR</button>
          </NavLink>
        </div>
      </div>
    </SideBar>
  );
};

export default NewZoo;
