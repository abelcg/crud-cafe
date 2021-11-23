import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularioProducto = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNombreProducto">
        <Form.Label>Nombre del Producto*</Form.Label>
        <Form.Control type="text" placeholder="Ej: café" maxlength="40" onChange={(e)=> props.setNombreProducto(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio*</Form.Label>
        <Form.Control type="text" placeholder="ej: 50" maxlength="10" onChange={(e)=> props.setPrecioProducto(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategoriaProducto">
        <Form.Label>Categoria*</Form.Label>
        <Form.Select onChange={(e)=> props.setCategoria(e.target.value)}>
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
  );
};

export default FormularioProducto;
