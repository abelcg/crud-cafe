import React, { useState, useEffect, useRef } from "react";
import FormularioProducto from "./FormularioProducto";
import { useParams } from "react-router-dom";
import { campoRequerido, rangoNumero } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditarProducto = (props) => {
  const { id } = useParams();
  // console.log(id);
  const [producto, setProducto] = useState({});
  const [categoria, setCategorias] = useState("");
  const URL = process.env.REACT_APP_API_URL + "/" + id;
  // crear variables ref
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef(0);
  const navigation = useNavigate();
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [errors, setError] = useState(false);

  useEffect(async () => {
    // consultar a la API el producto que tiene el id
    try {
      // realizar una consulta GET
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        //console.log(dato);
        setProducto(dato);
        setCategorias(dato.categoria);
        console.log(categoria);
      }
    } catch (error) {
      console.log(error);
      //mostrar cartel error al usuario
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validar los campos
    //console.log(nombreProductoRef);
    //console.log(nombreProductoRef.current.value);
    //console.log(precioProductoRef.current.value);
    if (
      campoRequerido(nombreProductoRef.current.value) &&
      rangoNumero(precioProductoRef.current.value) &&
      campoRequerido(categoria)
    ) {
      // reset del state de error
      setError(false);
      // construir el objeto a enviar a la API
      const productoModificado = {
        nombreProducto: nombreProductoRef.current.value,
        precioProducto: precioProductoRef.current.value,
        categoria,
      };
      try {
        //consulta PUT para modificar valores en la API
        const respuesta = await fetch(URL, {
          method: "PUT",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(productoModificado),
        });
        console.log(respuesta);
        if (respuesta.status === 200) {
          console.log("el producto se mofifico correctamente");
          // mostrar cartel al usuario
          Swal.fire(
            "Producto Modificado!",
            "Su producto se modifico correctamente",
            "success"
          );
          // volver a pedir a la API
          props.consultaAPI();
          // redireccion a la pagina de lista de productos
          navigation("/productos");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // mostrar un cartel error
      setError(true);
    }
  };

  return (
    <section className="container">
      <h2 className="display-1 text-center my-4">{props.titulo}</h2>
      <hr />
      <FormularioProducto
        editar={true}
        producto={producto}
        categorias={categoria}
        setCategorias={setCategorias}
        nombreProductoRef={nombreProductoRef}
        precioProductoRef={precioProductoRef}
        handleSubmits={handleSubmit}
        setNombreProducto={setNombreProducto}
        setPrecioProducto={setPrecioProducto}
        error={errors}
        boton="Guardar cambios"
      ></FormularioProducto>
    </section>
  );
};

export default EditarProducto;
