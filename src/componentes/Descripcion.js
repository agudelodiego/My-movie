import React from "react";
import "../styles/Descripcion.css"



// Este componente muestra la descriocion de una pelicula en particular, dicha descripcion es mostrada gracias a lo props
const Description = (props) => {
    return(
        <section className="descripcion descripcion-mostrar">
            <img onClick={props.click} className="descripcion__icon" src={require('../icons/cruzar.png')} alt="Icono de cerrar ventana" />

            <h2 className="descripcion__titulo">{props.titulo}</h2>
            <p className="descripcion__contenido">{props.contenido}</p>
        </section>
    );
}





export default Description;