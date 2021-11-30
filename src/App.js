import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "./components/common/Navigation";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";
import AgregarProducto from "./components/productos/AgregarProducto";
import EditarProducto from "./components/productos/EditarProducto";
import ListaProducto from "./components/productos/ListaProducto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaAPI();
  }, []); //si dejo un arreglo vacio solo se ejecuta en montaje y no en actualizacion

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      console.log(datos);
      setProductos(datos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/productos"
          element={<ListaProducto productos={productos} consultaAPI={consultaAPI}></ListaProducto>}
        ></Route>
        <Route
          exact
          path="/productos/nuevo"
          element={
            <AgregarProducto titulo="Agregar Productos" consultaAPI={consultaAPI}></AgregarProducto>
          }
        ></Route>
        <Route
          exact
          path="/productos/editar"
          element={<EditarProducto titulo="Nuevo Producto"></EditarProducto>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
