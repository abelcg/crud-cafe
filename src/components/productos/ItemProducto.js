import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const ItemProducto = () => {
    return (
        <ListGroup.Item className="d-flex flex-row justify-content-end align-items-center">
             Café con leche <span className="fw-bold ms-2 me-auto">- Precio: $80</span>  
             <Button className="ms-2" variant="warning"><i className="bi bi-pencil"></i></Button>{' '}
             <Button className="ms-2" variant="danger"><i className="bi bi-trash"></i></Button>{' '}
        </ListGroup.Item>
    );
};

export default ItemProducto;