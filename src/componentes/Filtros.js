import React, {useState, useEffect} from "react";
import "../styles/Filtros.css";





const Filtros = (props) => {

    // Utilizamos un hook de estado
    let [filtro, setFiltro] = useState("Peliculas populares");

    // Utilizamos el useEffect para que cada vez que se actualice el estado filtro, este componente le avise al componenete padre que el usuario quiere cambiar el filtro 
    useEffect(()=>{
        props.llamar(filtro)
    });

    return (
        <form className="desplegable">
            
            <div className="desplegable__select" onClick={desplegar}>
                <img className="desplegable__icon" src= {require("../icons/flecha-azul.png")} alt="Icono de favorito" />
                <h2>{filtro}</h2>
            </div>

            <div className="desplegable__opciones">
                <div className="desplegable__opcion" id="populares" onClick={()=>setFiltro("Peliculas populares")} >
                    <img className="desplegable__icon" src= {require("../icons/favorito.png")} alt="Icono de favorito" />
                    <p>Peliculas populares</p>
                </div>
                <div className="desplegable__opcion" id="proximamente" onClick={()=> setFiltro("Nuevos lanzamientos")} >
                    <img className="desplegable__icon" src={require("../icons/esperar.png")} alt="Icono de reloj de arena" />
                    <p>Nuevos lanzamientos</p>
                </div>
                <div className="desplegable__opcion" id="cartelera" onClick={() => setFiltro("Peliculas en cartelera")} >
                    <img className="desplegable__icon" src={require("../icons/cartelera.png")} alt="Icono de cartelera" />
                    <p>Peliculas en cartelera</p>
                </div>
            </div>
        </form>
    )
}



const desplegar = () => {
    let opciones = document.querySelector(".desplegable__opciones");
    opciones.classList.toggle("show");
}



export default Filtros;