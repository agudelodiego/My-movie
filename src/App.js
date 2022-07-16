import "./App.css";
import NavBar from "./componentes/NavBar";
import Card from "./componentes/Cards.js";
import Galeria from "./componentes/Galeria.js";
import {GetPopulars,GetPoster,GetDetails} from "./Model/Model.js"
import React, { useState } from 'react';
import Filtros from './componentes/Filtros.js'
import Descripcion from './componentes/Descripcion.js';
import Inicio from './componentes/Inicio.js';



function App() {

    return (
      <div className="App">
        <NavBar />
        <Inicio />
      </div>
    );
}

export default App;
