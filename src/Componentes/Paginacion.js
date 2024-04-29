import React from 'react'; 


const Paginacion = props => {
   return (
     <div className="py-3">
    <button  onClick = {props.paginaAnterior}type="button" className= " btn btn-infor mr-1">Anterior &larr;</button>
    <button  onClick = {props.paginaSiguiente}type="button" className= " btn btn-infor">Siguiente &rarr;</button>
     </div>
   )
}

export default Paginacion;