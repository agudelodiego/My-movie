# My movie gallery
Este proyecto aun se encuentra en desarrollo

## Que es ?
En este proyecto se hace la conexion con la API para de esta manera obtener informacion acerca de peliculas populares, los nuevos lanzamiento del mundo del cine, asi como las peliculas que se encuentran en cartelera en este momento, tambien se muestra informacion en particual de una determinada pelicula, como el titulo, el poster, y una breve descripcion de la pelicula.
Es un proyecto cuyo objetivo principal es aplicar los conocimiento adquiridos de React y css. Este proyecto se conecta con una API conocida como "The Movie Data Base". Si deseas conocer acerca de esta API puedes adquirir informacion en el siguiente enlace: https://www.themoviedb.org/documentation/api, donde encontraras informacion acerca como adquirir una llave de acceso al servidor, puesto que para poder acceder a los datos debes primero adquirir dicha llave. 

## Como empezar
Antes de descargar el repositorio debes saber que debes tener installado Node js, para descargarlo puedes dirigirte al siguiente enlace: https://nodejs.org/es/download/
Una vez hallas descargado node debes clonar el repositorio en algun lugar de tus archivos, luego de ello debes abrir una terminal en la direccion donde clonaste el repositorio y ejecutar npm start y esperar que se monte el servidor

## Estructura
Dentro del proyecto podras encontrar varias carpetas, entre las cuales encontraras una que se llama src, es aca donde esta el codigo fuente del proyecto.
Este proyecto se dividio en Componenetes, por que lo el diseño de cada componente de la app lo puedes encontrar en la carpeta src/componentes.
Tambien se decidio separa los estilos de los componentes, por lo que los estilos de cada componente lo podras encontrar en la carpeta src/syles.
La parte de la conexion con el servidor que provee la informacion de las peliculas se puede encontrar en la carpeta src/Model/Model.js donde se encuentra toda la documentacion de como conectar con la API y de la forma como esta devuelve la informacion.