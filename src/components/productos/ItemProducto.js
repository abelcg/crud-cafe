import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

const ItemProducto = (props) => {
    const URL = process.env.REACT_APP_API_URL+'/'+props.producto.id;

    const eliminarProducto=  ()=> {
      //  console.log(URL)
      Swal.fire({
        title: '¿Esta seguro de eliminar el producto?',
        text: "No puedes recuperar el producto una vez que fue eliminado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
            //aqui borro el producto
            try {
                const respuesta = await fetch(URL,{ 
                    method: 'DELETE',
                    headers: {
                   'Content-Type': 'application/json'
                  }
                });
                console.log(respuesta);
                if(respuesta.status === 200){
                    console.log('el producto se eliminó correctamente');
                    // mostrar cartel al usuario
                    Swal.fire(
                      'Producto Eliminado!',
                      'Su producto se eliminó correctamente',
                      'success'
                    )
                    // volver a pedir a la API para recargar la lista de productos
                    props.consultaAPI();
                    
                  }else{
                    console.log('mostrar cartel de error')
                  }
            } catch (error) {
                console.log(error);
            }
        }
      })
    }

    return (
        <ListGroup.Item className="d-flex flex-row justify-content-end align-items-center">
            {props.producto.nombreProducto}<span className="fw-bold ms-2 me-auto">- Precio: $ {props.producto.precioProducto}</span>  
             <Link className="btn btn-warning ms-2" to={`/productos/editar/${props.producto.id}`}><i className="bi bi-pencil"></i></Link>{' '}
             <Button className="ms-2" variant="danger" onClick={() => eliminarProducto()}><i className="bi bi-trash"></i></Button>{' '}
        </ListGroup.Item>
    );
};

export default ItemProducto;