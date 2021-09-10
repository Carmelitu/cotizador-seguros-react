import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const ContenedorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`



function App() {

  const [resumen, setResumen] = useState({});
  const {datos, cotizacion} = resumen;

  return (
    <Contenedor>
      <Header titulo='Cotizador de Seguros' />

      <ContenedorForm>
        <Formulario 
          setResumen={setResumen}
        />

        {datos ? 
        <Fragment>
        <Resumen datos={datos} /> <Resultado cotizacion={cotizacion} />
        </Fragment>
         : null}
      </ContenedorForm>

    </Contenedor>
  );
}

export default App;
