import React from 'react';
import FormularioProducto from './FormularioProducto'

const EditarProducto = (props) => {
    return (
        <section className="container">
            <h2 className="display-1 text-center my-4">{props.titulo}</h2>
            <hr />
            <FormularioProducto boton="Guardar cambios"></FormularioProducto>
        </section>
    );
};

export default EditarProducto;