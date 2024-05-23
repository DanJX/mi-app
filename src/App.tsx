import Container from '@mui/material/Container';
import Header from './components/layout/Header'
import CardNovedades from './components/CardNovedades';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardOfertas from './components/CardOfertas';
import CardCategorias from './components/CardCategorias';

function App() {
  return (
    <div className="App">
      {/* Cabecera */}
      <Header></Header>
      {/* Cuerpecito */}
      <Typography sx={{ margin: '20px 100px', fontWeight: 'bold', fontSize: '2rem' }}>
        Novedades
      </Typography>
      <Container sx={{ marginBottom: '80px' }}>
        <CardNovedades></CardNovedades>
      </Container>
      <Container>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
      {/* Ofertas */}
      <Typography sx={{ margin: '20px 100px', fontWeight: 'bold', fontSize: '2rem' }}>
        Ofertas
      </Typography>
      <Container sx={{ marginBottom: '80px' }}>
        <CardOfertas></CardOfertas>
      </Container>
      <Container>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
      <Typography sx={{ margin: '20px 100px', fontWeight: 'bold', fontSize: '2rem' }}>
        Categorías
      </Typography>
      <Container sx={{ marginBottom: '80px' }}>
        <CardCategorias></CardCategorias>
      </Container>
      <Container sx={{ marginBottom: '80px' }}>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
    </div>
  );
}

export default App;
