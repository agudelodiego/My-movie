import React, {useState, useEffect} from "react";
import "../styles/Inicio.css";
import Galeria from "./Galeria.js";
import Filtros from "./Filtros.js";
import Descripcion from "./Descripcion.js";
import {GetPopulars,GetUpcoming,GetPlayNow} from "../Model/Model.js";




//Este componente muestra la pagina principal de la aplicacion
const Inicio = ()=>{

    const [filtros,setFiltros] = useState("Peliculas populares");
    const [pelicula,setPelicula] = useState(null);
    const [page, setPage] = useState("1");
    let callback = GetPopulars;

    // El elemento Filtros llamara a aesta funcion cada vez que desee actualizar el estado de los filtros del componente inicio
    const actualizar = (nuevo)=>{
        setFiltros(nuevo);
    }

    
    // El recuadro de descripcion sera controlado por las siguientes funciones
    const esconderDescripcion = ()=>{
        let recuadro = document.querySelector(".descripcion");
        recuadro.classList.add("descripcion-esconder");
    }
    const mostrarDescripcion = ()=>{
        try{
            let recuadro = document.querySelector(".descripcion");
            recuadro.classList.remove("descripcion-esconder");
        }   
        catch(err){
            console.log("Manejando error");
        }
    }
    const seleccionarPelicula = (id,titulo,descripcion)=>{
        setPelicula({id,titulo,descripcion});
        mostrarDescripcion();
    }


    if(filtros === "Peliculas populares"){
        callback = GetPopulars;
    }
    else if(filtros === "Nuevos lanzamientos"){
        callback = GetUpcoming;
    }
    else if(filtros === "Peliculas en cartelera"){
        callback = GetPlayNow;
    }

    return (

        <div className="inicio">
            
            <section className="inicio__galeria">
                <Galeria page={page} language="es-MX" solicitar={callback} click={seleccionarPelicula} />
            </section>

            <aside className="inicio__asideBar">
                <Filtros llamar={actualizar} />
            </aside>

            {pelicula && 
                <Descripcion click={esconderDescripcion} titulo={pelicula.titulo} contenido={pelicula.descripcion} />
            }
            
        </div>
    );
}


export default Inicio;