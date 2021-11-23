import React, { useState } from "react";
import FormularioProducto from "./FormularioProducto";

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");

  return (
    <section className="container">
      <h2 className="display-1 text-center my-4">{props.titulo}</h2>
      <hr />
      <FormularioProducto
        boton="Guardar"
        setNombreProducto={setNombreProducto}
        setPrecioProducto={setPrecioProducto}
        setCategoria={setCategoria}
      ></FormularioProducto>
    </section>
  );
};

export default AgregarProducto;
