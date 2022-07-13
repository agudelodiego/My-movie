import "./App.css";
import NavBar from "./componentes/NavBar";
import Card from "./componentes/Cards.js";
import {GetPopulars,GetPoster,GetDetails} from "./Model/Model.js"



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Pruebas">
        <Card id="iD-ejemplo" path="https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/field/image/article/final-rick-morty-radionica.jpg" descripcion="imgen de prueba" titulo="Rick con su cerebelo hueco" />
      </div>
    </div>
  );
}

export default App;
