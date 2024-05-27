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
      <Container sx={{ marginBottom: '80px' }}>
        <Typography sx={{ margin: '80px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('./assets/fondotxt.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Populares
        </Typography>
        <CardSlider></CardSlider>
      </Container>
      {/* Cuerpecito */}
      <Container sx={{ marginBottom: '80px' }}>
        <Typography sx={{ margin: '20px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('./assets/fondotxt.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Novedades
        </Typography>
        <CardNovedades></CardNovedades>
      </Container>
      <Container>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
      {/* Ofertas */}
      <Container sx={{ marginBottom: '80px' }}>
        <Typography sx={{ margin: '20px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('./assets/fondotxt.jpg')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Ofertas
        </Typography>
        <CardOfertas></CardOfertas>
      </Container>
      <Container>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
      <Container sx={{ marginBottom: '80px' }}>
        <Typography sx={{ margin: '20px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('./assets/fondotxt.jpg')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Categorías
        </Typography>
        <CardCategorias></CardCategorias>
      </Container>
      <Container sx={{ marginBottom: '80px' }}>
        <Divider sx={{ background: 'white' }}></Divider>
      </Container>
    </div>
  );
}

export default App;
