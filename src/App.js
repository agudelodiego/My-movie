import "./App.css";
import NavBar from "./componentes/NavBar";
import Card from "./componentes/Cards.js";
import Galeria from "./componentes/Galeria.js";
import {GetPopulars,GetPoster,GetDetails} from "./Model/Model.js"
import React, { useState } from 'react';



function App() {

    return (
      <div className="App">
        <NavBar />
        <Galeria solicitar={GetPopulars} page={4} language='en-US' />
      </div>
    );
}

export default App;
