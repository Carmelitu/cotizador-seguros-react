import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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
            <TransitionGroup
                component="p"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit: 500}}
                >
                    <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </DivCotizacion>
     );
}
 
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;