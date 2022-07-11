// Este codigo pretende ser una implementacion del atron de arquitectura modelo vista controlador MVC, en donde el presente archivo pretende ser el modelo, es decir, el objeto que se encarga de realizar las peticiones a la API, no obstante, debo de mensionar que no se estara implementando objetos, si no funciones, donde cada funcion tiene un objetivo epecifico de realaizar alguna clase de consulta a nuestra API 



// Es importante mensionar que para poder conectarse y consumir los datos de la API que vamos a utilizar es necesario tener una llave o como la llaman en su documentacion api_key. Para obtener mas informacion acerca como utilizar dicha API dirijase a: https://developers.themoviedb.org/3/getting-started/introduction
// ! API: The Movie Data Base (TMDB)
// ! URL: https://api.themoviedb.org/3/movie
// ! API_KEY: 579b5890d14bce4792901da9659754bb





// Declaracion de constantes necesarias para la aplicacion
const KEY = "579b5890d14bce4792901da9659754bb";





//* --------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*  DOCUMENTACION:
La funcion GetPopulars se encarga de conectar con la API "THDB" y realizar la peticion segun los parametros que se le sean pasado a la funcion.

    PARAMETROS:
La funcion puede recibir dos parametro opcionales los cuales son:
    page --> Debe ser un numero entrero entre 1 y 500. Si no se le pasa este parametro, por defecto entregara la pagina 1
    language --> Debe ser un string con la siguiente forma es-MX, en-US, ect, por defecto el lenguaje es es-MX

    RESPUESTA API SIN ERRORES
Si NO ocurre ningun erro al enviar la peticion, la funcion devuelve un objeto de tipo Primise, el cual debe ser consumido, para de esta manera obtener un array, el cual contiene 20 objetos, correspondiente a las peliculas. Los objetos contenidos en el array tienen varias propiedades utiles para la aplicacion, misma que se explican a continuacion

    objeto.adult -> Esta propiedad es un boolean, el cual indica si la pelicula en coestion tiene clasificacion para mayores de esdad o no
    objeto.

    objeto.id -> Contiene el id de la pelicula, es muy util para obtener informacion mas detallada acerca de las peliculas
    
    objeto.poster_path -> Esta propiedad contiene el path mediante el cual poder acceder a la imagen de al pelicula. Para acceder al dicho poster debes de utlizar la funcion GetPoster
    
    objeto.original_title -> Contiene titulo de la pelicula
    
    objeto.original_language -> Contiene el lenguaje original de la pelicula
    
    overveiw -> Contiene una breve descripcion de la pelicula*/
export const GetPopulars = async (page=1, language='es-MX') => {

    try{
        let URL = "https://api.themoviedb.org/3/movie";
        let endPoint = "/popular?";
        let url = `${URL}${endPoint}api_key=${KEY}&language=${language}&page=${page}`;
        console.group("Url peticion");
        console.log(url);
        console.groupEnd();

        let response = await fetch(url);
        let status = response.status;
        
        // Validacion de respuesta
        if(status === 200){
            let reponse_json = await response.json();
            console.group("Respuesta exitosa del servidor");
            console.log(reponse_json.results);
            console.groupEnd();
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
        console.group("Ha ocurrido un error");
        console.error(err);
        console.groupEnd();
        return err;
    }

}
//* --------------------------------------------------------------------------------------------------------------------------------------------------------------------