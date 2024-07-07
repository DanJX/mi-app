import Container from '@mui/material/Container';
import Header from './components/layout/Header'
import CardNovedades from './components/CardNovedades';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardOfertas from './components/CardOfertas';
import CardCategorias from './components/CardCategorias';
import CardSlider from './components/CardSlider';
import { Grid } from '@mui/material';
import Informacion from './components/Informacion';
import Form from './components/Form';

import React, { Suspense, useState } from 'react';
import SkeletonLazy from './components/SkeletonLazy';
import Contador from './components/Contador';
import ToDoList from './components/ToDoList';
import SliderThumb from './components/SliderThumb';
import SliderUrbanix from './components/SliderUrbanix';
import Cronometro from './components/Cronometro';
import ImgUseState from './components/ImgUseState';
import FormColorPicker from './components/FormColorPicker';
import ExamenContador from './components/ExamenContador';

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const CardLazy = React.lazy(() => simulateDelay(2000).then(() => import('./components/CardLazy')));

function App() {
  return (
    <div className="App">
      {/* Cabecera */}
      <Header></Header>
      {/* <CardSlider></CardSlider>
      <SliderUrbanix />
      <FormColorPicker /> */}

      <ExamenContador/>
{/* 
      <ImgUseState />
      <Cronometro />

      <Suspense fallback={<SkeletonLazy />}>
        <CardLazy />
      </Suspense>

      
      <Contador />

      <ToDoList />

      <CardNovedades></CardNovedades>
      <Container>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
      <CardOfertas></CardOfertas>
      <Container>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
      <CardCategorias></CardCategorias>
      <Container sx={{ marginBottom: '80px' }}>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>

      <Container>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Informacion />
          </Grid>
        </Grid>
      </Container>

   
      <Form></Form> */}
    </div>
  );
}

export default App;
