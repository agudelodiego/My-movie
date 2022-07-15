import "./App.css";
import NavBar from "./componentes/NavBar";
import Card from "./componentes/Cards.js";
import Galeria from "./componentes/Galeria.js";
import {GetPopulars,GetPoster,GetDetails} from "./Model/Model.js"
import React, { useState } from 'react';
import Filtros from './componentes/Filtros.js'



function App() {

    return (
      <div className="App">
        <NavBar />
        <div className="Pruebas">
          <div className="Pruebas2">
            <Filtros />
          </div>
        </div>
      </div>
    );
}

export default App;
