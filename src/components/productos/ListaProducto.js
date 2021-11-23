import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ItemProducto from './ItemProducto';

const ListaProducto = (props) => {
    return (
        <section className="container">
        <h2 className="fw-bold my-5 text-center">Lista de productos</h2>
        <hr />
        <div className="d-flex flex-row justify-content-end align-items-center">
            <p className="fw-bold">Agregar nuevos productos:
            <Button className="ms-3" variant="primary"><i className="bi bi-plus-circle"></i></Button>{' '}
            </p>
        </div>
        <ListGroup>
            {
                props.productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
            }
            
        </ListGroup>
        </section>
    );
};

export default ListaProducto;