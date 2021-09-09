import React, { Fragment } from 'react';

const Resumen = ({datos}) => {
    // Extraer de datos
    const {marca, plan, year} = datos;

    return (
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año: {year}</li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;