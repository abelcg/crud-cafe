import React, { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import {campoRequerido, rangoNumero} from "../helpers/helpers";

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const[error, setError]= useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar los datos del form
    if(campoRequerido(nombreProducto) &&
    rangoNumero(precioProducto) &&
    campoRequerido(categoria)){
      // reset del state de error
      setError(false);
      // crar un producto y enviar a la API
     
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
