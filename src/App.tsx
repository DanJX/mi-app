import Container from '@mui/material/Container';
import Header from './components/layout/Header'
import CardNovedades from './components/CardNovedades';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      {/* Cabecera */}
      <Header></Header>
      {/* Cuerpecito */}
      <Typography sx={{ margin: '20px 100px', fontWeight: 'bold', fontSize: '2rem' }}>
        Novedades
      </Typography>
      <Container>
        <CardNovedades></CardNovedades>
      </Container>
    </div>
  );
}

export default App;
