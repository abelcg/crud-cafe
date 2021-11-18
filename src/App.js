import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './components/common/Navigation'
//import Inicio from './components/pages/Inicio'
//import Error404 from './components/pages/Error404'
import Footer from './components/common/Footer';
//import AgregarProducto from './components/productos/AgregarProducto';
import EditarProducto from './components/productos/EditarProducto';
//import ListaProducto from './components/productos/ListaProducto';

function App() {
  return (
    <div className="App">
     <header>
       <Navigation/> 
     </header>
     <main>
       {/*  <Inicio></Inicio>  */}
      {/* <Error404></Error404> */}
      {/* <ListaProducto></ListaProducto> */}
      {/* <AgregarProducto titulo="Nuevo Producto"></AgregarProducto> */}
      <EditarProducto titulo="Editar Producto"></EditarProducto>
     </main>
     <footer>
       <Footer></Footer>
     </footer>
    </div>
  );
}

export default App;
