import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './components/common/Navigation'
import Inicio from './components/pages/Inicio'
import Error404 from './components/pages/Error404'
import Footer from './components/common/Footer';
import AgregarProducto from './components/productos/AgregarProducto';
import EditarProducto from './components/productos/EditarProducto';
import ListaProducto from './components/productos/ListaProducto';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/productos' element={<ListaProducto></ListaProducto>}></Route>
        <Route exact path='/productos/nuevo' element={<AgregarProducto titulo="Agregar Productos"></AgregarProducto>}></Route>
        <Route exact path='/productos/editar' element={<EditarProducto titulo="Nuevo Producto"></EditarProducto>} ></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
