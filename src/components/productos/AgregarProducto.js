import React, { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import {campoRequerido, rangoNumero} from "../helpers/helpers";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const[error, setError]= useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos del form
    if(campoRequerido(nombreProducto) &&
    rangoNumero(precioProducto) &&
    campoRequerido(categoria)){
      // reset del state de error
      setError(false);
      // crar un producto y enviar a la API
       const productoNuevo = {
         nombreProducto, // como coincide el nombre de la propiedad con el state con poner el nombre de la propiedad es suficiente, si no nombreProducto: nombreproducto
         precioProducto,
         categoria
       };
      // console.log(productoNuevo);
        try {
          const parametros={
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
              },
            body: JSON.stringify(productoNuevo)  
          }
          const respuesta = await fetch(URL, parametros)
          console.log(respuesta);
          if(respuesta.status === 201){
            console.log('el producto se creo correctamente');
            // mostrar cartel al usuario
            Swal.fire(
              'Producto Creado!',
              'Su producto se creo correctamente',
              'success'
            )
            // resetear el formulario
              e.target.reset(); //el e.target en este caso por el submitt es el form
            // volver a pedir a la API
            props.consultaAPI();
              // redireccion a la pagina de lista de productos
              navigation('/productos')
          }else{
            console.log('mostrar cartel de error')
          }
        } catch (error) {
          console.log(error);
        }

    }else{
      //mostrar cartel de error
      setError(true);
    }
  }

  return (
    <section className="container">
      <h2 className="display-1 text-center my-4">{props.titulo}</h2>
      <hr />
      <FormularioProducto
        boton="Guardar"
        setNombreProducto={setNombreProducto}
        setPrecioProducto={setPrecioProducto}
        setCategoria={setCategoria}
        handleSubmit={handleSubmit}
        error={error}
      ></FormularioProducto>
    </section>
  );
};

export default AgregarProducto;
