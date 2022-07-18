import React, {useState, useEffect} from "react";
import "../styles/Paginacion.css";






const Paginacion = (props)=>{

    const [page,setPage] = useState(1);
    const [left,setLeft] = useState(false);
    const [right,setRight] = useState(true);

    const aumentar = ()=>{
        setPage(page + 1);
    }
    const disminuir = ()=>{
        setPage(page - 1);
    }

    useEffect(()=>{
        if(page === 1){ 
            setLeft(false);
        }
        else{
            setLeft(true);
        }
        props.setear(page);
    },[page])

    return(
        <div className="paginacion">
            {left && 
                <button onClick={disminuir} className="paginacion__boton paginacion__boton-izquierda">
                <img className="paginacion__icon paginacion__iconIzquierda" src={require('../icons/flecha-paginacion.png')} alt="Paginacion flecha izquirda" />
                </button>
            }

            <div className="paginacion__paginaContainer">
                <h2 className="paginacion__pagina">{page}</h2>
            </div>

            {right &&
                <button onClick={aumentar} className="paginacion__boton paginacion__boton-derecha">
                <img className="paginacion__icon paginacion__iconDerecha" src={require('../icons/flecha-paginacion.png')} alt="Paginacion flecha derecha" />
                </button>
            }
        </div>
    );
}


export default Paginacion;