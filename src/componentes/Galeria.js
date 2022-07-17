import React, {useState, useEffect} from 'react';
import Card from './Cards.js';
import {GetPoster,GetPopulars,GetPlayNow,GetUpcoming} from "../Model/Model.js";
import '../styles/Galeria.css';




// Elemento galeria, en el cual estaran todas las Cards que contendran las peliculas 
const Galeria = (props) => {

    // Variable de estado que almacena las cards que luego seran renderizadas en la aplicacion
    const [cards,setCards] = useState([]);

    // Usamos un hook de efecto que se ejecute cada vez que el usuario cabie de filtro, la pagina o el idioma
    useEffect(()=>{

        // Funcion encargada de comunicarse con el Modelo.js y enviarle la informacion necesaria para que este realice la peticion a la API
        let peticionAsincrona = async()=>{

            try{
                // Validamos el tipo de peticio
                let tipo = props.solicitar;
                let peliculas;

                if(tipo === "Peliculas populares"){
                    let data = await GetPopulars(props.page, props.language);
                    peliculas = data.results;
                    let intercambioCards = peliculas.map((pelicula)=>{
                        return(
                            <Card id={pelicula.id} src={GetPoster(pelicula.poster_path)} alt={pelicula.title} titulo={pelicula.title} key={pelicula.id} click={props.click} overveiw={pelicula.overview} />
                        );
                    });
                    setCards(intercambioCards);
                }
                else if(tipo === "Nuevos lanzamientos"){
                    let data = await GetUpcoming(props.page, props.language);
                    peliculas = data.results;
                    let intercambioCards = peliculas.map((pelicula)=>{
                        return(
                            <Card id={pelicula.id} src={GetPoster(pelicula.poster_path)} alt={pelicula.title} titulo={pelicula.title} key={pelicula.id} click={props.click} overveiw={pelicula.overview} />
                        );
                    });
                    setCards(intercambioCards);
                }
                else if(tipo === "Peliculas en cartelera"){
                    let data = await GetPlayNow(props.page, props.language);
                    peliculas = data.results;
                    let intercambioCards = peliculas.map((pelicula)=>{
                        return(
                            <Card id={pelicula.id} src={GetPoster(pelicula.poster_path)} alt={pelicula.title} titulo={pelicula.title} key={pelicula.id} click={props.click} overveiw={pelicula.overview} />
                        );
                    });
                    setCards(intercambioCards);
                }
            }
            catch(error){
                console.error(error);
            }
        };

        peticionAsincrona();

    },[props.solicitar,props.page, props.language]);

    // Retornamos las Cards construidas mediante el useEffect
    return (
        <main className="Galeria" >
            {cards}
        </main>
    );

}


export default Galeria;


