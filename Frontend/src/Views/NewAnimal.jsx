import React from "react";
import "../Styles/RegistrarA.css";
import { NavLink } from "react-router-dom";

const NewAnimal = () => {
   
    return (
        <>
        <div className= "containerForm">
            <h1>------Registrar Animal---------</h1>
        <main className="mainForm">
        <section classNama="sectionForm"> 
            <h2>Animal</h2>
            <p>Rut: <input type="text" /></p>
            
            <p>Nombre: <input type="text" /></p>
            
            <p>Clase: <input type="text" /> </p>


            <p>Tipo: <input type="text" /> </p>
            
            <p>Zoológico: 
            <select>
                <option value="Ford">1</option>
                <option value="Volvo">2</option>
                <option value="Fiat">3</option>
            </select>
            </p>
            
        </section>
        <section className="sectionForm">
            <h2>Registro Clínico</h2>
            <p>Estatura: <input type="text" placeholder="Metros" /></p>
            
            <p>Peso: <input type="text" placeholder="Kilogramos" /></p>
            
            <p>Enfermedades Crónicas: <input type="text" /> </p> 
            <p>Descripción</p> <textarea className="descripcion"  rows="10" cols="40"> Describa la situación del animal </textarea> 

        
        </section>

       
        </main>
        <NavLink to="/home">
          <button>REGISTRAR</button>
        </NavLink>

    </div>
 
        </>
    );


};

export default NewAnimal;