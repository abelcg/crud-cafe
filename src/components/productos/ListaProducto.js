import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import ItemProducto from './ItemProducto';
import {Link} from 'react-router-dom';

const ListaProducto = (props) => {
    return (
        <section className="container mb-5 pb-5">
        <h2 className="fw-bold my-5 text-center">Lista de productos</h2>
        <hr />
        <div className="d-flex flex-row justify-content-end align-items-center">
            <p className="fw-bold">Agregar nuevos productos:
           
            <Link to='/productos/nuevo' className="btn btn-primary ms-3"><i className="bi bi-plus-circle"></i></Link>
            </p>
        </div>
        <ListGroup className="mb-5">
            {
                props.productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
            }
            
        </ListGroup>
        </section>
    );
};

export default ListaProducto;