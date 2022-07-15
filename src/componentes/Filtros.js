import React from 'react';
import '../styles/Filtros.css'





const Filtros = () => {

    return (
        <form className="desplegable">
            <div className="desplegable__selectContainer" onClick={desplegar} >
                <div className="desplegable__select">
                    <img className="desplegable__icon" src= {require('../icons/favorito.png')} alt="Icono de favorito" />
                    <p>Peliculas populares</p>
                </div>
                <img className="desplegable__icon-flecha desplegable__icon" src={require('../icons/flecha-desplegable.png')} alt="Icono de flecha" />
            </div>

            <div className="desplegable__opciones">
                <div className="desplegable__opcion" id="populares" >
                    <img className="desplegable__icon" src= {require('../icons/favorito.png')} alt="Icono de favorito" />
                    <p>Peliculas populares</p>
                </div>
                <div className="desplegable__opcion" id="proximamente" >
                    <img className="desplegable__icon" src={require('../icons/esperar.png')} alt="Icono de reloj de arena" />
                    <p>Nuevos lanzamientos</p>
                </div>
                <div className="desplegable__opcion" id="cartelera" >
                    <img className="desplegable__icon" src={require('../icons/cartelera.png')} alt="Icono de cartelera" />
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