import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const FormularioProducto = (props) => {
  return (
    <>
      <Form onSubmit={props.handleSubmit || props.handleSubmits}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre del Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: café"
            P
            onChange={(e) => props.setNombreProducto(e.target.value)}
            defaultValue={(!props.editar) ? "" : props.producto.nombreProducto}
            ref={props.nombreProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej: 50"
            maxLength="10"
            onChange={(e) => props.setPrecioProducto(e.target.value)}
            defaultValue={(!props.editar) ? "" : props.producto.precioProducto}
            ref={props.precioProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoriaProducto">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select value={props.categorias} onChange={((e) => (!props.editar) ? (props.setCategoria(e.target.value)) : props.setCategorias(e.target.value))}>
            <option value="">Seleccione una opción</option>
            <option value="bebida-caliente">Bebida Caliente</option>
            <option value="bebida-fria">Bebida Fría</option>
            <option value="sandwich">Sandwich</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          {props.boton}
        </Button>
      </Form>
      {props.error === true ? (
        <Alert variant="danger">
          Debe cargar todos los datos y el precio debe estar entre 1 y $4999
        </Alert>
      ) : null}
    </>
  );
};

export default FormularioProducto;
