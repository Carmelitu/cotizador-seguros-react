import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    `;

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const Resumen = ({datos}) => {
    // Extraer de datos
    const {marca, plan, year} = datos;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {capitalize(marca)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Año: {(year)}</li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;