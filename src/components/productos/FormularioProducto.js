import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularioProducto = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNombreProducto">
        <Form.Label>Nombre del Producto*</Form.Label>
        <Form.Control type="text" placeholder="Ej: café" maxlength="40" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio*</Form.Label>
        <Form.Control type="text" placeholder="ej: 50" maxlength="10" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategoriaProducto">
        <Form.Label>Categoria*</Form.Label>
        <Form.Select>
          <option>Seleccione una opción</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Button className="w-100" variant="primary" type="submit">
        {props.boton}
      </Button>
    </Form>
  );
};

export default FormularioProducto;
