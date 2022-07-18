// Importamos la hoja de estilos para nuestro componente
import "../styles/NavBar.css"
// Primero importamos la libreria
import React from "react";



// Ahora creamos nuestro componente mediante una funcion
const NavBar = () =>{

    // Cuando usamos la sintaxis de jsx no podemos agregar imagenes de la misma manera en que lo haciamos con html puro, en su lugar debemos hacerlo como se muestra en pantalla
    return (
        <header className="NavBar__container">
            <nav className="NavBar">
                <div className="NavBar__div NavBar__div-menu">
                    <img className="NavBar__icon NavBar__icon-menu" src={require("../icons/menu-icon.png")} alt="Menu icon"/>
                </div>
                <div className="NavBar__div NavBar__div-main">
                    <ul className="NavBar__ul">
                        <li className="NavBar__li" key="inicio">
                            <a href="#s1" className="NavBar__link">Inicio</a>
                        </li>
                        <li className="NavBar__li" key="info">
                            <a href="#s2" className="NavBar__link">Informacion</a>
                        </li>
                    </ul>
                    <h2 className="NavBar__title">My movie</h2>
                    <img className="NavBar__icon NavBar__icon-app" src={require("../icons/galeria-icon.png")} alt="App icon"/>
                </div>
                <div className="NavBar__div NavBar__div-acount">
                    <img className="NavBar__icon NavBar__icon-acount" src={require("../icons/user-icon.png")} alt="user acount icon"/>
                </div>
            </nav>
        </header>
    );
}

// class NavBar extends React.Component {
//     render(){
//         return(
//             <header className="NavBar__container">
//                 <nav className="NavBar">
//                     <div className="NavBar__div NavBar__div-menu">
//                         <img className="NavBar__icon NavBar__icon-menu" src={require("../icons/menu-icon.png")} alt="Menu icon"/>
//                     </div>
//                     <div className="NavBar__div NavBar__div-main">
//                         <ul className="NavBar__ul">
//                             <li className="NavBar__li" key="inicio">
//                                 <a href="#s1" className="NavBar__link">Inicio</a>
//                             </li>
//                             <li className="NavBar__li" key="info">
//                                 <a href="#s2" className="NavBar__link">Informacion</a>
//                             </li>
//                         </ul>
//                         <h2 className="NavBar__title">My movie</h2>
//                         <img className="NavBar__icon NavBar__icon-app" src={require("../icons/galeria-icon.png")} alt="App icon"/>
//                     </div>
//                     <div className="NavBar__div NavBar__div-acount">
//                         <img className="NavBar__icon NavBar__icon-acount" src={require("../icons/user-icon.png")} alt="user acount icon"/>
//                     </div>
//                 </nav>
//             </header>
//         );
//     };
// }

// Exportamo el componente
export default NavBar;