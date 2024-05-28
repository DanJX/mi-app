import Container from '@mui/material/Container';
import Header from './components/layout/Header'
import CardNovedades from './components/CardNovedades';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardOfertas from './components/CardOfertas';
import CardCategorias from './components/CardCategorias';
import CardSlider from './components/CardSlider';

function App() {
  return (
    <div className="App">
      {/* Cabecera */}
      <Header></Header>
      <CardSlider></CardSlider>
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
    </div>
  );
}

export default App;
