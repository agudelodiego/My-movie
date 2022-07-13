// Este codigo pretende ser una implementacion del atron de arquitectura modelo vista controlador MVC, en donde el presente archivo pretende ser el modelo, es decir, el objeto que se encarga de realizar las peticiones a la API, no obstante, debo de mensionar que no se estara implementando objetos, si no funciones, donde cada funcion tiene un objetivo epecifico de realaizar alguna clase de consulta a nuestra API 



// Es importante mensionar que para poder conectarse y consumir los datos de la API que vamos a utilizar es necesario tener una llave o como la llaman en su documentacion api_key. Para obtener mas informacion acerca como utilizar dicha API dirijase a: https://developers.themoviedb.org/3/getting-started/introduction
// ! API: The Movie Data Base (TMDB)
// ! URL: https://api.themoviedb.org/3/movie
// ! API_KEY: 579b5890d14bce4792901da9659754bb





// Declaracion de constantes necesarias para la aplicacion
const KEY = "579b5890d14bce4792901da9659754bb";





//! NOTA: En el manejo de los errores con throw, me di cuenta de que lo podia hacer de manera que tuviera que programar menos lineas de codigo, no obstante, me di cuenta de ello demasiado tarde, puesto que ya habia terminado de programar todos los metodos. Se puede realizar la validacion simplemente asi: else if(status>=400){throw response}; por si lo deseas reemplazar, ahi te dejo como quedaria.





//* --------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*  DOCUMENTACION:
La funcion GetPopulars se encarga de conectar con la API "THDB" y realizar la peticion segun los parametros que se le sean pasado a la funcion.

    PARAMETROS:
La funcion puede recibir dos parametro opcionales los cuales son:
    page --> Debe ser un numero entrero entre 1 y 500. Si no se le pasa este parametro, por defecto entregara la pagina 1
    language --> Debe ser un string con la siguiente forma es-MX, en-US, ect, por defecto el lenguaje es es-MX

    RESPUESTA API SIN ERRORES
La API devuelve un objeto, el cual contiene varias propiedaes, entre ellas, y la mas importante es un array con 20 objetos, los cuales corresponden a las propias peliculas y su correspondiente informacion, para acceder a dicho array debes de utilizar la sintaxis respuestaAPI.results, esto te devolvera el aray mensionado. A su vez cada uno de los objetos de tipo pelicula contiene varias propiedades, entre las importantes tenemos las siguientes:

    objeto.adult -> Esta propiedad es un boolean, el cual indica si la pelicula en coestion tiene clasificacion para mayores de esdad o no
    objeto.

    objeto.id -> Contiene el id de la pelicula, es muy util para obtener informacion mas detallada acerca de las peliculas
    
    objeto.poster_path -> Esta propiedad contiene el path mediante el cual poder acceder a la imagen de al pelicula. Para acceder al dicho poster debes de utlizar la funcion GetPoster
    
    objeto.original_title -> Contiene titulo de la pelicula
    
    objeto.original_language -> Contiene el lenguaje original de la pelicula
    
    overveiw -> Contiene una breve descripcion de la pelicula
    
    RESPUESTA ERRONEA
Si sucede algun error al hacer la peticion el metodo retornara un objeto que contiene propiedades como el status entre otras*/
export const GetPopulars = async (page=1, language='es-MX') => {

    try{
        let URL = "https://api.themoviedb.org/3/movie";
        let endPoint = "/popular?";
        let url = `${URL}${endPoint}api_key=${KEY}&language=${language}&page=${page}`;

        let response = await fetch(url);
        let status = response.status;
        
        // Validacion de respuesta
        if(status === 200){
            let reponse_json = await response.json();
            return reponse_json;
        }
        else if(status === 404){
            throw response;
        }
        else if(status === 401){
            throw response;
        }
        else{
            throw response;
        }
        
    }
    catch(err){
        return err;
    }

}
//* --------------------------------------------------------------------------------------------------------------------------------------------------------------------







//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*  DOCUMENTACION:
Esta funcion se encarga de obtener los detalles de una determinada pelicula, recibe los siguiente parametros
    idPelicula -> Identificador de la pelicaula, este parametro es obligatorio
    language -> Lenguaje en que desea que le responda la API, por defecto esta en es-MX, este parametro es opcional

    RESPUESTA API SIN ERRORES
Este metodo asincrono devuelve un objeto el cual contiene varias propiedaes, entre las mas destacadas son:

    objeto.genres -> Es un array de objetos los cuales contienen los generos a los que pertenece al pelicual

    objeto.overview -> Pequeña descripcion de la pelicula 

    objeto.production_companies -> Contiene un array con objetos, los cuales contienen la informacion de las compañias que aportaron para producir la pelicula

    objeto.production_countries -> Contiene un array de objetos que contienen el codigo iso del pais asi como el nombre del pais
    
    RESPUESTA ERRONEA
Si llegase a suceder algun error, el metodo devuelve un objeto con informacion acerca de la peticion, donde podra encontrar una descriopcion mas detallada acerca del error, como por ejemplo el status devuelto por el seridor entre otras cosas mas.*/
export const GetDetails = async (idPelicula, language='es-MX') => {

    try {

        const URL = "https://api.themoviedb.org/3/movie";
        let endPoint = `/${idPelicula}?`;
        let url = `${URL}${endPoint}api_key=${KEY}&language=${language}`;

        let response = await fetch(url);
        let status = response.status;
        
        // Validacion de respuesta
        if(status === 200){
            let reponse_json = await response.json();
            return reponse_json;
        }
        else if(status === 404){
            throw response;
        }
        else if(status === 401){
            throw response;
        }
        else{
            throw response;
        }

    }
    catch(err){
        return err;
    }
}
//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------






//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*  DOCUMENTACION:
Este metodo se encarga de solicitar las peliculas que se encuentran proximas a salir

    RESPUESTA API SIN ERRORES
Este metodo devuelve un objeto el cual contiene propiedades como la pagina en que se encuentra, la cantidad de paginas disponible, y las mas importante de todas es un array con 20 objetos, los cuales corresponden a las peliculas. Cada objeto pelicula dentro del array a su vez contiene varios atributos con informacion relative acerca de la pelicula. Para acceder al array utlice la siguiente sintaxis: respuestaAPI.results. Algunas de las propiedades mas relevantes de cada pelicula se ven acontinuacion:

    objetoPeicula.release_date -> Corresponde a la fecha de estreno de la pelicula

    objeto.adult -> Esta propiedad es un boolean, el cual indica si la pelicula en coestion tiene clasificacion para mayores de esdad o no
    objeto.

    objeto.id -> Contiene el id de la pelicula, es muy util para obtener informacion mas detallada acerca de las peliculas
    
    objeto.poster_path -> Esta propiedad contiene el path mediante el cual poder acceder a la imagen de al pelicula. Para acceder al dicho poster debes de utlizar la funcion GetPoster
    
    objeto.original_title -> Contiene titulo de la pelicula
    
    objeto.original_language -> Contiene el lenguaje original de la pelicula
    
    overveiw -> Contiene una breve descripcion de la pelicula

    RESPUESTA ERRONEA
Si ocurrio algun error al hacer la peticion el metodo devuelve un objeto con informacion acerca de lo sucedido, como por ejemplo el status, entre otras cosas*/ 
export const GetUpcoming = async (page=1, language='es-MX')=>{

    try{
        
        const URL = "https://api.themoviedb.org/3/movie/upcoming?";
        let url = `${URL}api_key=${KEY}&page=${page}&language=${language}`;

        let response = await fetch(url);
        let status = response.status;
        
        // Validacion de respuesta
        if(status === 200){
            let reponse_json = await response.json();
            return reponse_json;
        }
        else if(status === 404){
            throw response;
        }
        else if(status === 401){
            throw response;
        }
        else{
            throw response;
        }

    }
    catch(err){
        return err;
    }
}
//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------





//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*  DOCUMENTACION:
Este metodo funcion de manera exacta a los metodos anteriores, solo que en lugar de devolver peliculas populares, o nuevos lanzamientos, este devuelve las peliculas que se encuentran en cartera. Lo demas funcion exactamente igual*/
export const GetPlayNow = async (page=1, language='es-MX')=>{

    try{
        const URL = "https://api.themoviedb.org/3/movie/now_playing?";
        let url = `${URL}api_key=${KEY}&page=${page}&language=${language}`;

        let response = await fetch(url);
        let status = response.status;
        
        // Validacion de respuesta
        if(status === 200){
            let reponse_json = await response.json();
            // console.group("Respuesta exitosa del servidor");
            // console.log(reponse_json.results);
            // console.groupEnd();
            return reponse_json;
        }
        else if(status === 404){
            throw response;
        }
        else if(status === 401){
            throw response;
        }
        else{
            throw response;
        }
    }
    catch(err){
        return err;
    }
    
} 
//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------





//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*  DOCUMENTACION:
Esta funcion solo se encarga de devolver la url donde puede encontrar el poster de la lepicula en coestion. Para utilizarla solo se debe de invocar y pasarle un el poster_paht de la pelicula que desee */
export const GetPoster = (path) => {
    let urlPoster = `https://image.tmdb.org/t/p/w500${path}`;
    // console.group("Poster Path");
    // console.log(urlPoster);
    // console.groupEnd();
    return urlPoster;
} 
//* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------







// !---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! PRUEBAS
//*--------------- Consumiendo GetPopulars-----------------
//   (page=1,language='es-MX') -> Estos son los parametros por defecto
// GetPopulars(4,'en-US')
//     .then((objetoPopulares)=>{

//         console.group("Respuesta fcn GetPopulars");

//         // Devuelve un objeto varias propiedades
//         console.log(objetoPopulares);

//         // Propiedad la cual contine un array con 20 objetos dentro, cada uno corresponde a un pelicula
//         console.log(objetoPopulares.results);

//         // Obtenemos el id de la pelicula que se encuentra en la posicion 4 del array
//         let idAleatorio = objetoPopulares.results[4].id;
        
//         // Obtenemos la direccion del poster o la imagen de la pelicula
//         let posterPath = objetoPopulares.results[4].poster_path;


//         //* ---------Consumo de GetPoster------------
//         // Esta nos devuelve la url del servidor donde se aloja dicha imagen, se le debe de pasar la propiedad poster_path del objeto pelicula
//         let posterUrl = GetPoster(posterPath);
//         console.log(posterUrl);

//         console.groupEnd();

//         //*----------- Consumiendo GetDetails----------
//         // Le debemos pasar el id de una pelicula
//         return GetDetails(idAleatorio,'en-US');
//     })

//     // Si no hay ningun error el return anterior devuelve un promesa que es necesario consumir
//     .then((detallesPelicula)=>{

//         // Devuelve un objeto
//         console.group("Respuesta fcn GetDetails");
//         console.log(detallesPelicula);
//         console.groupEnd();

//         // *------------Consumiendo GetUpcoming------------
//         // (page=1, language='es-MX') --> Por defecto
//         return GetUpcoming(3,'en-US');
//     })

//     // Respuesta de GetUpcoming
//     .then((proximamente)=>{
        
//         console.group("Respuesta fcn GetUpcoming");

//         // Devuelvu un objeto
//         console.log(proximamente);

        
//         // Propiedad que contiene un array con 20 objetos, en el cual cada un representa una pelicula
//         console.log(proximamente.results);
//         console.groupEnd();

//         // *------------Consumiendo GetPlayNow------------
//         // Tiene los mimso parametros por defecto que los demas
//         return GetPlayNow(4,'en-US');

//     })

//     // Respuesta que devuelve GetPlayNow
//     .then((enCarterela)=>{

//         console.group("Respuesta GetPlayNow");

//         // Devuelve un objeto 
//         console.log(enCarterela);

//         // Contiene un array con 20 peliculas
//         console.log(enCarterela.results);

//         // Acedemos a la fecha de estreno de uno de los objetos dentro de dicho array
//         console.log(enCarterela.results[5].release_date);
//         console.groupEnd();
//     })

//     // !Manejo de errores
//     .catch((error)=>{
//         console.group("Respuesta Erronea");

//         // Devuelve un objeto con informacion acerca de lo sucedido
//         console.log(error);
//         console.groupEnd();
//     })
// !---------------------------------------------------------------------------------------------------------------------------------------------------------------------