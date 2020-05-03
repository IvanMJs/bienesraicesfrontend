import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categorias {
            nombre
          }
          agentes {
            nombre
            Telefono
            email
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
               
        }
      }
    }
  `)
  //console.log(datos);

  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    imagen: propiedad.imagen,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    precio: propiedad.precio,
    agentes: propiedad.agentes,
    categorias: propiedad.categorias,
  }))
}

export default usePropiedades

//imagen {
//  childImageSharp {
//    fluid(maxWidth: 600, maxHeight: 400) {
//      ...GatsbyImageSharpFluid
//    }
//  }
//}

//imagen {
//  formats {
//    thumbnail {
//      childImageSharp {
//        fluid(maxHeight: 600, maxWidth: 400){
//          ...GatsbyImageSharpFluid_withWebp
//        }
//
//      }
//    }
//  }
//}
