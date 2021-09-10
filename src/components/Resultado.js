import React from 'react';
import styled from '@emotion/styled';

const DivCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return ( 
        <DivCotizacion>
            <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
        </DivCotizacion>
     );
}
 
export default Resultado;