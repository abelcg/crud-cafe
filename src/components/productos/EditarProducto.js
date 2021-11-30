import React, {useState, useEffect, useRef} from 'react';
import FormularioProducto from './FormularioProducto'
import {useParams} from 'react-router-dom'

const EditarProducto = (props) => {
    const { id } = useParams();
   // console.log(id);
   const [producto, setProducto] = useState({});
   const URL = process.env.REACT_APP_API_URL+'/'+id;

   useEffect(async () => {
     // consultar a la API el producto que tiene el id
     try {
         // realizar una consulta GET
         const respuesta = await fetch(URL);
         //console.log(respuesta);
         if(respuesta.status === 200){
             const dato = await respuesta.json();
            // console.log(dato);
             setProducto(dato);
         }
     } catch (error) {
         console.log(error);
         //mostrar cartel error al usuario
     }
   }, [])

    return (
        <section className="container">
            <h2 className="display-1 text-center my-4">{props.titulo}</h2>
            <hr />
            <FormularioProducto editar={true} producto={producto} boton="Guardar cambios"></FormularioProducto>
        </section>
    );
};

export default EditarProducto;