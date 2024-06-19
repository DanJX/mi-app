import * as React from 'react';
import { red } from '@mui/material/colors';
import { Box, Container, Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@mui/material';

import nov4 from '../assets/nov4.jpg';
import logonov4 from '../assets/logonov4.jpg';
import nov5 from '../assets/nov5.jpg';
import logonov5 from '../assets/logonov5.webp';
import nov6 from '../assets/nov6.jpg';
import logonov6 from '../assets/logonov6.jpg';

export default function CardLazy() {
    return (
        <Container sx={{ marginBottom: '80px' }}>
            <Typography sx={{ margin: '20px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('../assets/fondotxt.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Lazy Loading
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>     
                {/* Mortal Kombat */}
                <Card sx={{ width: { xs: '100%', sm: '48%', md: '32%' }, background: '#1d1d22', color: '#863b8d' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="Logo" src={logonov4}>
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ fontWeight: 'bold' }}>
                                Mortal Kombat
                            </Typography>
                        } />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Todas las técnicas, movimientos, brutalities y fatalities de Jax en Mortal Kombat X.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={nov4}
                        alt="Paella dish"
                    />
                </Card>
                {/* Spiderman */}
                <Card sx={{ width: { xs: '100%', sm: '48%', md: '32%' }, background: '#1d1d22', color: '#863b8d' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="Logo" src={logonov5}>
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ fontWeight: 'bold' }}>
                                Spider-man PS4
                            </Typography>
                        } />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Si tienes Spider-Man podrás pagar 10 dólares para conseguir la remasterización en PS5
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={nov5}
                        alt="Paella dish"
                    />
                </Card>
                {/* GTA V */}
                <Card sx={{ width: { xs: '100%', sm: '48%', md: '32%' }, background: '#1d1d22', color: '#863b8d' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="Logo" src={logonov6}>
                            </Avatar>
                        }
                        title={
                            <Typography sx={{ fontWeight: 'bold' }}>
                                Gta V
                            </Typography>
                        } />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                            El multijugador de GTA 5 se actualiza con recompensas extras.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={nov6}
                        alt="Paella dish"
                    />
                </Card>
            </Box>
        </Container>
    );
}
