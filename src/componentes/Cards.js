import React from 'react';
import '../styles/Card.css';



// El componente card es el que llevara en su interior a cada una de las peliculas que devuelva la API 
const Card = (props) =>{

    return(
        <figure className="Card" id={props.id}>
            <div className="Card__posterContainer">
                <img src={props.src} alt={props.alt} className="Card__poster" />    
            </div>
            <figcaption className="Card__tituloContainer">
                <h2 className="Card__titulo">{props.titulo}</h2>
            </figcaption>
        </figure>
    );
}


export default Card;