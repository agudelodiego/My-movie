import React, {useState, useEffect} from 'react';
import Card from './Cards.js';
import {GetPoster,GetPopulars,GetPlayNow,GetUpcoming} from "../Model/Model.js";
import '../styles/Galeria.css';




// Elemento galeria, en el cual estaran todas las Cards que contendran las peliculas 
const Galeria = (props)=>{

    // Utilizamos un hook para almacenar el array de las cards que se van a crear dinamicamente
    const [cards, setCards] = useState([]);

    let peliculasArray;
    let page = props.page;
    let language = props.language;


    // El elemento padre indica a cual de las funciones descritas en ./src/Modelo/Model.js debe acceder
    let solicitar = props.solicitar;
    // Se supone que el elemento padre nos devuelve una funcion callback
    solicitar(page,language)
        .then((response) => {
            peliculasArray = response.results;
            let cardsArray = peliculasArray.map((pelicula)=>{
                
                return(
                    <Card id={pelicula.id} src={GetPoster(pelicula.poster_path)} alt={pelicula.title} titulo={pelicula.title} key={pelicula.id} click={props.click} overveiw={pelicula.overview} />
                );
            });

            setCards(cardsArray);

        })
        .catch((err) => {
            console.error(err);
        });

        return(
            <main className="Galeria">
                {cards}
            </main>
        );
}


export default Galeria;


