import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from './propiedadPreview'
import ListadoPropiedadesCSS from '../css/ListadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro'

const ListadoPropiedades = () => {

  const resultado = usePropiedades();
  const [propiedades] = useState(resultado);
  const [ filtradas, guardarFiltradas] = useState([]);
  // filtrado de propiedades
  const { categoria,  FiltroUI } = useFiltro();

  console.log(categoria);

  useEffect(() => {
    //Uso del filtro en listado
      if(categoria) {
         const filtro = propiedades.filter( propiedad => propiedad.categorias.nombre === categoria);
          guardarFiltradas(filtro);
      } else {
          guardarFiltradas(propiedades);
      }
  },[categoria, propiedades])
  
  return (
      <>
    <h2
      css={css`
        margin-top: 5rem;
      `}>Nuestras Propiedades</h2>

      

      <ul className={ListadoPropiedadesCSS.propiedades}>
          {filtradas.map( propiedad => (
              <PropiedadPreview
              key={propiedad.id}
              propiedad={propiedad}
              />
          ))}
      </ul>
      </>
  )
}

export default ListadoPropiedades

//Arreglar este filtro
//{FiltroUI()}